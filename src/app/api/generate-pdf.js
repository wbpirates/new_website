// pages/api/generate-pdf.js
import { readFileSync } from 'fs';
import path from 'path';
import xlsx from 'xlsx';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export default async function handler(req, res) {
    const { uniqueId } = req.query;

    // Path to your Excel file
    const filePath = path.join(process.cwd(), 'data.xlsx');
    const file = readFileSync(filePath);

    // Read the Excel file
    const workbook = xlsx.read(file, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    // Find the data based on the uniqueId
    const data = jsonData.find(item => item.id === uniqueId);

    if (!data) {
        res.status(404).json({ message: 'Data not found' });
        return;
    }

    // Generate PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();
    const fontSize = 20;

    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    page.drawText(`Data for ID: ${uniqueId}`, {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
    });

    page.drawText(JSON.stringify(data, null, 2), {
        x: 50,
        y: height - 8 * fontSize,
        size: fontSize - 5,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=data.pdf');
    res.send(Buffer.from(pdfBytes));
}
