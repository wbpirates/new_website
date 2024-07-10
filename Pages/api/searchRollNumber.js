import xlsx from 'xlsx';
import path from 'path';

export default function handler(req, res) {
    const { rollNumber, phoneNumber } = req.body;

    // Path to your Excel file
    const filePath = path.resolve('./public/data.xlsx');
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    // Find entry by roll number or phone number
    const found = data.find(entry => entry['Roll No'] == rollNumber) || data.find(entry => entry['Phone Number'] == phoneNumber);

    if (found) {
        // Convert the Excel serial date to a JavaScript Date object
        const excelDateToJSDate = (serial) => {
            const utc_days = Math.floor(serial - 25569);
            const utc_value = utc_days * 86400;
            const date_info = new Date(utc_value * 1000);
            return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate());
        };

        // Convert the time from decimal to HH:MM AM/PM format
        const decimalTimeToTimeString = (decimalTime) => {
            const hours = Math.floor(decimalTime * 24);
            const minutes = Math.round((decimalTime * 24 * 60) % 60);
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12; // Convert to 12-hour format
            const formattedMinutes = minutes.toString().padStart(2, '0');
            return `${formattedHours}:${formattedMinutes} ${ampm}`;
        };

        // Format the date and time fields
        found['Examination Date'] = excelDateToJSDate(found['Examination Date']).toLocaleDateString('en-GB'); // DD-MM-YYYY format
        found['Reporting Time'] = decimalTimeToTimeString(found['Reporting Time']);

        res.status(200).json({ success: true, data: found });
    } else {
        res.status(404).json({ success: false, message: 'Roll number or phone number not found' });
    }
}
