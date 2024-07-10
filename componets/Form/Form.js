"use client";
import React, { useState } from "react";
import pdfFooterImage from "../../public/admitCard/footer-image.png"
import pdfManImage from "../../public/admitCard/man.png"
import pdfShipImage from "../../public/admitCard/ship.png"
import html2canvas from 'html2canvas';
import html2pdf from "html2pdf.js"; // Make sure to include the library properly
import { Toaster, toast } from "react-hot-toast";
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import "./form.css"; // Ensure your CSS file is properly linked

const Form = () => {
  const [formData, setFormData] = useState({ rollNumber: "", phoneNumber: "" });
  const [result, setResult] = useState(null);

  const data = {
    fields: [
      { label: "Roll Number", type: "text", name: "rollNumber" },
      { label: "Phone Number", type: "text", name: "phoneNumber" },
    ],
    button: { text: "Search" },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.rollNumber && !formData.phoneNumber) {
      toast.error('Roll number or phone number is required');
      return;
    }
    try {
      const response = await fetch("/api/searchRollNumber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rollNumber: formData.rollNumber }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
        toast.success("Record found!");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred while searching for the roll number");
    }
  };

  const handleView = () => {
    // Assuming 'result' contains the dynamic data
    if (result) {
      // Replace placeholders with actual data
      let htmlContent = `
        <html>
        <head>
          <style type="text/css">
            .signature {
              padding-top: 50px;
            }

            .img-right img,
            .img-left img {
              max-width: 200px;
            }

            .mini-container {
              max-width: 1200px;
              margin: 0 auto;
            }

            .form-title {
              text-align: center;
            }

            .flex-wrapper {
              display: flex;
              align-items: center;
              justify-content: space-around;
            }

            .pdf-footer img {
              display: block;
              max-width: 100%;
            }

            table {
              width: 1200px;
            }

            .tg {
              border-collapse: collapse;
              border-spacing: 0;
            }

            .tg td {
              border-color: black;
              border-style: solid;
              border-width: 1px;
              font-family: Arial, sans-serif;
              font-size: 14px;
              overflow: hidden;
              padding: 10px 5px;
              word-break: normal;
            }

            .tg th {
              border-color: black;
              border-style: solid;
              border-width: 1px;
              font-family: Arial, sans-serif;
              font-size: 14px;
              font-weight: normal;
              overflow: hidden;
              padding: 10px 5px;
              word-break: normal;
            }

            .tg .tg-0pky {
              border-color: inherit;
              text-align: left;
              vertical-align: top
            }

            .tg .tg-0lax {
              text-align: left;
              vertical-align: top
            }
          </style>
        </head>
        <body>
          <div class="mini-container">
            <div class="pdf-main-banner">
              <div class="flex-wrapper">
                <div class="img-left">
                  <img src=${pdfShipImage?.src}>
                </div>
                <div class="form-title">
                  <h1>SEAFARERS ENTRANCE ELIGIBILITY TEST (2024-25)</h1>
                  <h4>APPROVED BY MINISTERIAL CORPORATION</h4>
                </div>
                <div class="img-right">
                  <img src=${pdfManImage?.src}>
                </div>
              </div>
            </div>
        <table class="tg">
          <tr>
            <td class="tg-0lax">Candidate Name</td>
            <td class="tg-0lax">${result["Candidate Name"]}</td>
            <td class="tg-0lax">Roll No: ${result["Roll No"]}</td>
          </tr>
          <tbody>
            <tr>
              <td class="tg-0lax">Father Name:</td>
              <td class="tg-0lax">${result["Father Name"]}</td>
              <td class="tg-0lax" rowspan="5">Paste your photograph</td>
            </tr>
            <tr>
              <td class="tg-0lax">Examination date</td>
              <td class="tg-0lax">${result["Examination Date"]}</td>
            </tr>
            <tr>
              <td class="tg-0lax">Reporting time:</td>
              <td class="tg-0lax">${result["Reporting Time"]}</td>
            </tr>
            <tr>
              <td class="tg-0lax">Exam Time:</td>
              <td class="tg-0lax">${result["Exam Time"]}</td>
            </tr>
            <tr>
              <td class="tg-0lax">Exam center</td>
              <td class="tg-0lax">${result["Exam Centre"]}</td>
            </tr>
          </tbody>
        </table>
        <div class="instructions">
          <h2>Read the instructions carefully</h2>
          <ul>
      <li>Candidates should bring their own mask, Sanitizer, and should bring their own waterbottle. Not more than 1lts
        size.</li>
      <li>Candidates should bring their own mask, Sanitizer, and should bring their own waterbottle, Candidates should
        bring their own mask, Sanitizer, and should bring their own waterbottle</li>
      <li>Candidates should bring their own mask, Sanitizer, and should bring their own waterbottle, C, Candidates
        should bring their own mask, Sanitizer, Candidates should bring their own mask, Sanitizer, and should bring
        their own waterbottle</li>
      <li>Candidates should bring their own mask, Sanitizer, and should bring their own waterbottle</li>
      <li>Candidates should bring their own mask, Sanitizer, and should bring their own waterbottle</li>
      <br />
      <li>Candidates should bring their own mask, Sanitizer, and should bring their own waterbottle. Not more than 1lts
        size.</li>
      <li>Candidates should bring their own mask, Sanitizer, and should bring their own waterbottle, Candidates should
        bring their own mask, Sanitizer, and should bring their own waterbottle</li>
      <li>Candidates should bring their own mask, Sanitizer, and should bring their own waterbottle, C, Candidates
        should bring their own mask, Sanitizer, Candidates should bring their own mask, Sanitizer, and should bring
        their own waterbottle</li>
      <li>Candidates should bring their own mask, Sanitizer, and should bring their own waterbottle</li>
      <li>Candidates should bring their own mask, Sanitizer, and should bring their own waterbottle</li>
      <li><b>Note:Candidates should bring their own mask, Sanitizer, and should bring their own waterbottle</b></li>
    </ul>
        </div>
        <div class="signatures flex-wrapper">
          <h2 class="signature">Candidate's Signature</h2>
          <h2 class="signature">Invigilator's Signature</h2>
        </div>
        <div class="pdf-footer">
          <img src=${pdfFooterImage?.src}>
        </div>
          </div>
        </body>
      </html>
      `;

      // Open new window with the dynamically generated HTML content
      const newWindow = window.open();
      newWindow.document.open();
      newWindow.document.write(htmlContent);
      newWindow.document.close();
    } else {
      toast.error("No data found");
    }
  };

  const handleDownload = () => {
    if (result) {
      const opt = {
        margin: 5,
        filename: "admit_card.pdf",
        image: { type: "png", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "px", format: "a4", orientation: "portrait" },
      };
      const customWidth = 800; 
      const customHeight = 1000;  

      opt.jsPDF.unit = "px";
      opt.jsPDF.format = [customWidth, customHeight];

      const content = `
      <html>
        <style type="text/css">
          body { font-family: Arial, sans-serif; }
          .mini-container { max-width: 210mm; padding: 10mm; }
          .form-title { text-align: center; margin-bottom: 20px; }
          .flex-wrapper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
          .pdf-footer img { display: block; max-width: 100%; margin: 20px 0; }
          .tg { width: 100%; border-collapse: collapse; }
          .tg td, .tg th { border: 1px solid black; padding: 5px; }
          .instructions { margin-top: 20px; }
          .signatures { display: flex; justify-content: space-between; margin-top: 50px; }
          .signature { text-align: center; }
        </style>
        <div class="mini-container">
          <div class="flex-wrapper">
            <div class="img-left"><img src=${pdfShipImage?.src} width="80"></div>
             <div class="form-title">
              <h3>SEAFARERS ENTRANCE ELIGIBILITY TEST (2024-25)</h1>
              <h5>APPROVED BY MINISTERIAL CORPORATION</h4>
            </div>
            <div class="img-right"><img src=${pdfManImage?.src} width="80"></div>
          </div>              
          <table class="tg">
            <tr>
              <td>Candidate Name</td>
              <td>${result['Candidate Name']}</td>
              <td>Roll No: ${result['Roll No']}</td>
            </tr>
            <tbody>
              <tr>
                <td>Father Name:</td>
                <td>${result['Father Name']}</td>
                <td rowspan="5">Paste your photograph</td>
              </tr>
              <tr>
                <td>Examination Date</td>
                <td>${result['Examination Date']}</td>
              </tr>
              <tr>
                <td>Reporting Time:</td>
                <td>${result['Reporting Time']}</td>
              </tr>
              <tr>
                <td>Exam Time:</td>
                <td>${result['Exam Time']}</td>
              </tr>
              <tr>
                <td>Exam Centre</td>
                <td>${result['Exam Centre']}</td>
              </tr>
            </tbody>
          </table>
          <div class="instructions">
            <h2>Read the instructions carefully</h2>
            <ul>
              <li>Candidates should bring their own mask, sanitizer, and should bring their own water bottle. Not more than 1 lt size.</li>
              <li>Candidates should bring their own mask, sanitizer, and should bring their own water bottle.</li>
              <li>Candidates should bring their own mask, sanitizer, and should bring their own water bottle.</li>
              <li>Candidates should bring their own mask, sanitizer, and should bring their own water bottle.</li>
              <li>Candidates should bring their own mask, sanitizer, and should bring their own water bottle.</li>
              <li><b>Note: Candidates should bring their own mask, sanitizer, and should bring their own water bottle.</b></li>
            </ul>
          </div>
          <div class="signatures">
            <div class="signature">Candidate's Signature</div>
            <div class="signature">Invigilator's Signature</div>
          </div>
          <div class="pdf-footer">
            <img src=${pdfFooterImage?.src}>
          </div>
        </div>
      </html>
      `;

      html2pdf()
        .from(content)
        .set(opt)
        .save()
        .then(() => {
          setDownloadingPDF(false);
          toggleEnterAmountModal();
        });

    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form-container">
        {data.fields.map((field, index) => (
          <div key={index} className="form-group">
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="form-button">
          {data.button.text}
        </button>
        {result && (
          <div className="result">
            <div className="button-container">
              <button className="form-button-data-found" onClick={handleView}>
                View
              </button>
              <button
                className="form-button-data-found"
                onClick={handleDownload}
              >
                Download
              </button>
            </div>
          </div>
        )}
      </form>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Form;