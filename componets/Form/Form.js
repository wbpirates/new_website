"use client";
import React, { useState, useEffect } from "react";
import pdfFooterImage from "../../public/admitCard/footer-image.png"
import pdfManImage from "../../public/admitCard/man.png"
import pdfShipImage from "../../public/admitCard/ship.png"
import html2pdf from "html2pdf.js"; // Make sure to include the library properly
import { Toaster, toast } from "react-hot-toast";
import 'jspdf-autotable';
import "./Form.css"; // Ensure your CSS file is properly linked
import * as XLSX from 'xlsx';

const Form = () => {
  const [formData, setFormData] = useState({ rollNumber: "", phoneNumber: "" });
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const isPhoneNumberValid = /^[0-9]{10}$/.test(formData.phoneNumber);
    const isRollNumberValid = formData.rollNumber.trim() !== '';
    setIsValid(isPhoneNumberValid && isRollNumberValid);
  }, [formData]);

  const data = {
    fields: [
      { label: "Roll Number", type: "text", name: "rollNumber" },
      // { label: "Phone Number", type: "tel", name: "phoneNumber" },
    ],
    button: { text: "Search" },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleView = () => {
  //   if (result) {
  //     let htmlContent = `
  //       <html>
  //       <head>
  //         <style type="text/css">
  //           .signature {
  //             padding-top: 50px;
  //           }

  //           .img-right img,
  //           .img-left img {
  //             max-width: 80px;
  //           }

  //           .mini-container {
  //             max-width: 1200px;
  //             margin: 0 auto;
  //           }

  //           .form-title {
  //             text-align: center;
  //           }

  //           .flex-wrapper {
  //             display: flex;
  //             align-items: center;
  //             justify-content: space-around;
  //           }

  //           .pdf-footer img {
  //             display: block;
  //             max-width: 100%;
  //           }

  //           table {
  //             width: 1200px;
  //           }

  //           .tg {
  //             border-collapse: collapse;
  //             border-spacing: 0;
  //           }

  //           .tg td {
  //             border-color: black;
  //             border-style: solid;
  //             border-width: 1px;
  //             font-family: Arial, sans-serif;
  //             font-size: 14px;
  //             overflow: hidden;
  //             padding: 10px 5px;
  //             word-break: normal;
  //           }

  //           .tg th {
  //             border-color: black;
  //             border-style: solid;
  //             border-width: 1px;
  //             font-family: Arial, sans-serif;
  //             font-size: 14px;
  //             font-weight: normal;
  //             overflow: hidden;
  //             padding: 10px 5px;
  //             word-break: normal;
  //           }

  //           .tg .tg-0pky {
  //             border-color: inherit;
  //             text-align: left;
  //             vertical-align: top
  //           }

  //           .tg .tg-0lax {
  //             text-align: left;
  //             vertical-align: top
  //             font-weight: bold;
  //           }
  //         </style>
  //       </head>
  //       <body>
  //         <div class="mini-container">
  //           <div class="pdf-main-banner">
  //             <div class="flex-wrapper">
  //               <div class="img-left">
  //                 <img src=${pdfShipImage?.src}>
  //               </div>
  //               <div class="form-title">
  //                 <h1>SEA FARES ENTRANCE ELIGIBILITY TEST (2024-25)</h1>
  //                 <h4>APPROVED BY MINISTERIAL CORPORATION OF ADMINISTRATION</h4>
  //                 <h5>[EXAMINATIONN HALL TICKET]</h5>
  //               </div>
  //               <div class="img-right">
  //                 <img src=${pdfManImage?.src}>
  //               </div>
  //             </div>
  //           </div>
  //       <table class="tg">
  //         <tr>
  //           <td class="tg-0lax">Candidate Name</td>
  //           <td class="tg-0lax"><b> ${result["Candidate Name"]} </b> </td>
  //           <td class="tg-0lax"><b> Roll No: ${result["Roll No"]} </b></td>
  //         </tr>
  //         <tbody>
  //           <tr>
  //             <td class="tg-0lax">Father Name:</td>
  //             <td class="tg-0lax"><b> ${result["Father Name"]} <b> </td>
  //             <td class="tg-0lax" rowspan="5">Paste your photograph</td>
  //           </tr>
  //           <tr>
  //             <td class="tg-0lax">Examination date</td>
  //             <td class="tg-0lax"><b> ${result["Examination Date"]} </b></td>
  //           </tr>
  //           <tr>
  //             <td class="tg-0lax">Reporting time:</td>
  //             <td class="tg-0lax"><b> ${result["Reporting Time"]} </b></td>
  //           </tr>
  //           <tr>
  //             <td class="tg-0lax">Exam Time:</td>
  //             <td class="tg-0lax"> <b>${result["Exam Time"]} <b></td>
  //           </tr>
  //           <tr>
  //             <td class="tg-0lax">Exam center</td>
  //             <td class="tg-0lax"><b> ${result["Exam Centre"]} <b></td>
  //           </tr>
  //         </tbody>
  //       </table>
  //       <div class="instructions">
  //         <h2>Read the instructions carefully</h2>
  //         <ul>
  //           <li>Candidate should bring his/her own mask, sanitizer and wear mask in examination hall and should bring own water bottle (not more than one liter size), and should follow all guideline regarding Covid 19 by Government.</li>
  //           <li>Please check your eligibility for admission in Marine Institute. Only eligible candidate should appear in this test.</li>
  //           <li>Candidate should be present at examination center 1 hour before commencement of the examination positively.</li>
  //           <li>In any case no candidate will be allowed to enter at the examination center after 20 minutes of the commencement of the examination.</li>
  //           <li>No candidate shall be allowed to appear in the examination without Admit Card and a valid Photo ID Proof (Aadhar, Card, PAN Card, Voter Card, Driving License, Passport or ID issued by Government Institution.)</li>
  //           <br />
  //           <li>The candidate will not be allowed to leave the examination hall before the completion of the examination.</li>
  //           <li> <b>KEEP YOUR ADMIT CARD SAFE IT CAN BE DEMANDED AT THE TIME OF INTERVIEW & ADMISSION. </b></li>
  //           <li>The candidate shall not be permitted to carry the Question Booklet with them. They should hand over both the Question Booklet and OMR Answer Sheet to the Invigilator before leaving examination hall.</li>
  //           <li>The candidate should not remove/tear any page(s) from the Test Question Booklet. If any page(s) is/are found missing from his/her Question Booklet he/she will be liable for punishment as per rules.</li>
  //           <li>The candidate is advised to bring good quality Black/Blue Ball point pens for use in the examination to darken the circles in the OMR Answer Sheet. Use of pencil is not allowed.</li>
  //           <li>The candidate should use BLACK/BLUE BALL POINT PEN ONLY to write particulars on the Cover Page of the Test Question Booklet, Answer Sheet.</li>
  //           <li>Calculator, Log Tables, Calculating devices, Communication devices like Cellular Phone/Docupen etc. and Textual materials are not allowed in the Examination Hall.</li>
  //           <li><b>EXAMINATION WILL BE CANCELLED IF CANDIDATE ADOPTS UNFAIR MEANS AND SHOW ANY MISCONDUCT IN THE EXAMINATION. PHYSICALLY UNFIT PERSON IS NOT ALLOWED AND YOU CAN CHECK YOUR RESULT ON northdinamarineacademy.in </b> </li>
  //           <li><b>Note: candidates passing this entrance exam also need to meet the eligibility criteria as per government rules such as medical, interview, imucet and documents verification etc. To secure seat in the institution. * all rights reserved to institute.</b></li>
  //         </ul>
  //       </div>
  //       <div class="signatures flex-wrapper">
  //         <h2 class="signature"><b> Candidate's Signature <b></h2>
  //         <h2 class="signature">Invigilator's Signature</h2>
  //       </div>
  //       <div class="pdf-footer">
  //         <img src=${pdfFooterImage?.src}>
  //       </div>
  //         </div>
  //       </body>
  //     </html>
  //     `;
  //     const newWindow = window.open();
  //     newWindow.document.open();
  //     newWindow.document.write(htmlContent);
  //     newWindow.document.close();
  //   } else {
  //     toast.error("No data found");
  //   }
  // };

  // const handleDownload = () => {
  //   if (result) {
  //     const opt = {
  //       margin: 5,
  //       filename: "admit_card.pdf",
  //       image: { type: "png", quality: 0.98 },
  //       html2canvas: { scale: 2 },
  //       jsPDF: { unit: "px", format: "a4", orientation: "portrait" },
  //     };
  //     const customWidth = 800;
  //     const customHeight = 1000;

  //     opt.jsPDF.unit = "px";
  //     opt.jsPDF.format = [customWidth, customHeight];

  //     const content = `
  //     <html>
  //       <style type="text/css">
  //         body { font-family: Arial, sans-serif; }
  //         .mini-container { max-width: 210mm; padding: 10mm; }
  //         .form-title { text-align: center; margin-bottom: 20px; }
  //         .flex-wrapper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
  //         .pdf-footer img { display: block; max-width: 100%; margin: 20px 0; }
  //         .tg { width: 100%; border-collapse: collapse; }
  //         .tg td, .tg th { border: 1px solid black; padding: 5px; }
  //         .instructions { margin-top: 20px; }
  //         .signatures { display: flex; justify-content: space-between; margin-top: 50px; }
  //         .signature { text-align: center; }
  //       </style>
  //       <div class="mini-container">
  //         <div class="flex-wrapper">
  //           <div class="img-left"><img src=${pdfShipImage?.src} width="80"></div>
  //            <div class="form-title">
  //             <h3>SEA FARES ENTRANCE ELIGIBILITY TEST (2024-25)</h1>
  //             <h4>APPROVED BY MINISTERIAL CORPORATION OF ADMINISTRATION</h4>
  //             <h6>[EXAMINATIONN HALL TICKET]</h6>
  //           </div>
  //           <div class="img-right"><img src=${pdfManImage?.src} width="80"></div>
  //         </div>              
  //         <table class="tg">
  //           <tr>
  //             <td>Candidate Name</td>
  //             <td> <b> ${result['Candidate Name']} </b></td>
  //             <td> <b> Roll No: ${result['Roll No']} </b></td>
  //           </tr>
  //           <tbody>
  //             <tr>
  //               <td>Father Name:</td>
  //               <td> <b> ${result['Father Name']} </b></td>
  //               <td rowspan="5">Paste your photograph</td>
  //             </tr>
  //             <tr>
  //               <td>Examination Date</td>
  //               <td> <b> ${result['Examination Date']} </b></td>
  //             </tr>
  //             <tr>
  //               <td>Reporting Time:</td>
  //               <td><b> ${result['Reporting Time']} </b></td>
  //             </tr>
  //             <tr>
  //               <td>Exam Time:</td>
  //               <td><b> ${result['Exam Time']} </b> </td>
  //             </tr>
  //             <tr>
  //               <td>Exam Centre</td>
  //               <td><b>${result['Exam Centre']}</b></td>
  //             </tr>
  //           </tbody>
  //         </table>
  //         <div class="instructions">
  //           <h2>Read the instructions carefully</h2>
  //           <ul>
  //           <li>Candidate should bring his/her own mask, sanitizer and wear mask in examination hall and should bring own water bottle (not more than one liter size), and should follow all guideline regarding Covid 19 by Government.</li>
  //           <li>Please check your eligibility for admission in Marine Institute. Only eligible candidate should appear in this test.</li>
  //           <li>Candidate should be present at examination center 1 hour before commencement of the examination positively.</li>
  //           <li>In any case no candidate will be allowed to enter at the examination center after 20 minutes of the commencement of the examination.</li>
  //           <li>No candidate shall be allowed to appear in the examination without Admit Card and a valid Photo ID Proof (Aadhar, Card, PAN Card, Voter Card, Driving License, Passport or ID issued by Government Institution.)</li>
  //           <br />
  //           <li>The candidate will not be allowed to leave the examination hall before the completion of the examination.</li>
  //           <li> <b> KEEP YOUR ADMIT CARD SAFE IT CAN BE DEMANDED AT THE TIME OF INTERVIEW & ADMISSION. </b> </li>
  //           <li>The candidate shall not be permitted to carry the Question Booklet with them. They should hand over both the Question Booklet and OMR Answer Sheet to the Invigilator before leaving examination hall.</li>
  //           <li>The candidate should not remove/tear any page(s) from the Test Question Booklet. If any page(s) is/are found missing from his/her Question Booklet he/she will be liable for punishment as per rules.</li>
  //           <li>The candidate is advised to bring good quality Black/Blue Ball point pens for use in the examination to darken the circles in the OMR Answer Sheet. Use of pencil is not allowed.</li>
  //           <li>The candidate should use <b> BLACK/BLUE BALL POINT PEN ONLYBLACK/BLUE BALL POINT PEN ONLY </b> to write particulars on the Cover Page of the Test Question Booklet, Answer Sheet.</li>
  //           <li>Calculator, Log Tables, Calculating devices, Communication devices like Cellular Phone/Docupen etc. and Textual materials are not allowed in the Examination Hall.</li>
  //           <li><b> EXAMINATION WILL BE CANCELLED IF CANDIDATE ADOPTS UNFAIR MEANS AND SHOW ANY MISCONDUCT IN THE EXAMINATION. PHYSICALLY UNFIT PERSON IS NOT ALLOWED AND YOU CAN CHECK YOUR RESULT ON northdinamarineacademy.in </b></li>
  //           <li><b>Note: candidates passing this entrance exam also need to meet the eligibility criteria as per government rules such as medical, interview, imucet and documents verification etc. To secure seat in the institution. * all rights reserved to institute.</b></li>
  //         </ul>
  //         </div>
  //         <div class="signatures">
  //           <div class="signature">Candidate's Signature</div>
  //           <div class="signature">Invigilator's Signature</div>
  //         </div>
  //         <div class="pdf-footer">
  //           <img src=${pdfFooterImage?.src}>
  //         </div>
  //       </div>
  //     </html>
  //     `;

  //     html2pdf()
  //       .from(content)
  //       .set(opt)
  //       .save()
  //       .then(() => {
  //         setDownloadingPDF(false);
  //         toggleEnterAmountModal();
  //       });

  //   }
  // };

  const generateAdmitCardHTML = (result, pdfShipImage, pdfManImage, pdfFooterImage) => {
    return `
      <html>
      <head>
        <style type="text/css">
          body {
            font-family: Arial, sans-serif;
          }
  
          .signature {
            padding-top: 50px;
          }
  
          .img-right img,
          .img-left img {
            max-width: 80px;
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
            width: 100%;
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
            padding: 10px 5px;
          }
  
          .tg th {
            border-color: black;
            border-style: solid;
            border-width: 1px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            padding: 10px 5px;
          }
  
          .instructions {
            margin-top: 20px;
          }
  
          .signatures {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }
  
          .signature {
            text-align: center;
          }
  
          .photo-box {
            width: 160px; /* Reduced width */
            text-align: center;
            font-size: 12px;
            padding: 10px;
            border: 1px dashed #000;
          }
  
          .bold-text {
            font-weight: bold;
          }

          li {
            font-size: 13px;
          }
        </style>
      </head>
      <body>
        <div class="mini-container">
          <div class="flex-wrapper">
            <div class="img-left">
              <img src=${pdfShipImage?.src}>
            </div>
            <div class="form-title">
              <h3>SEA FARES ENTRANCE ELIGIBILITY TEST (2024-25)</h3>
              <h5>APPROVED BY MINISTERIAL CORPORATION OF ADMINISTRATION</h5>
              <h5>[EXAMINATION HALL TICKET]</h5>
            </div>
            <div class="img-right">
              <img src=${pdfManImage?.src}>
            </div>
          </div>
          <table class="tg">
            <tr>
              <td>Candidate Name</td>
              <td class="bold-text">${result["Candidate Name"]}</td>
              <td class="bold-text signature" style="width: 100px;">Roll No: ${result["Roll No"]}</td>
            </tr>
            <tr>
              <td>Father Name</td>
              <td class="bold-text">${result["Father Name"]}</td>
              <td rowspan="5" class="photo-box">Paste your photograph</td>
            </tr>
            <tr>
              <td>Examination Date</td>
              <td class="bold-text">${result["Examination Date"]}</td>
            </tr>
            <tr>
              <td>Reporting Time</td>
              <td class="bold-text">${result["Reporting Time"]}</td>
            </tr>
            <tr>
              <td>Exam Time</td>
              <td class="bold-text">${result["Exam Time"]}</td>
            </tr>
            <tr>
              <td>Exam Centre</td>
              <td class="bold-text">${result["Exam Centre"]}</td>
            </tr>
          </table>
          <div class="instructions">
            <h2>Read the instructions carefully</h2>
            <ul>
              <li>Candidate should bring his/her own mask, sanitizer and wear mask in examination hall and should bring own water bottle (not more than one liter size), and should follow all guideline regarding Covid 19 by Government.</li>
              <li>Please check your eligibility for admission in Marine Institute. Only eligible candidate should appear in this test.</li>
              <li>Candidate should be present at examination center 1 hour before commencement of the examination positively.</li>
              <li>In any case no candidate will be allowed to enter at the examination center after 20 minutes of the commencement of the examination.</li>
              <li>No candidate shall be allowed to appear in the examination without Admit Card and a valid Photo ID Proof (Aadhar, Card, PAN Card, Voter Card, Driving License, Passport or ID issued by Government Institution.)</li>
              <li>The candidate will not be allowed to leave the examination hall before the completion of the examination.</li>
              <li><b>KEEP YOUR ADMIT CARD SAFE IT CAN BE DEMANDED AT THE TIME OF INTERVIEW & ADMISSION.</b></li>
              <li>The candidate should use <b> BLACK/BLUE BALL POINT PEN ONLY </b> to write particulars on the Cover Page of the Test Question Booklet, Answer Sheet.</li>
              <li>Calculator, Log Tables, Calculating devices, Communication devices like Cellular Phone/Docupen etc. and Textual materials are not allowed in the Examination Hall.</li>
              <li><b>EXAMINATION WILL BE CANCELLED IF CANDIDATE ADOPTS UNFAIR MEANS AND SHOW ANY MISCONDUCT IN THE EXAMINATION. PHYSICALLY UNFIT PERSON IS NOT ALLOWED AND YOU CAN CHECK YOUR RESULT ON northdinamarineacademy.in</b></li>
              <li><b>Note: candidates passing this entrance exam also need to meet the eligibility criteria as per government rules such as medical, interview, imucet and documents verification etc. To secure seat in the institution. * all rights reserved to institute.</b></li>
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
      </body>
      </html>
    `;
  };

  const handleView = () => {
    if (result) {
      const htmlContent = generateAdmitCardHTML(result, pdfShipImage, pdfManImage, pdfFooterImage);
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
      opt.jsPDF.format = [customWidth, customHeight];

      const htmlContent = generateAdmitCardHTML(result, pdfShipImage, pdfManImage, pdfFooterImage);

      html2pdf()
        .from(htmlContent)
        .set(opt)
        .save()
        .then(() => {
          setDownloadingPDF(false);
          toggleEnterAmountModal();
        });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    // Validate that either roll number or phone number is provided
    if (!formData.rollNumber || !formData.phoneNumber) {
      toast.error('Both Roll Number and Phone Number are required.');
      return;
    }

    // Show loader while processing
    setIsSubmitting(true);

    try {
      // Simulate network delay for 1 second to give user feedback
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Fetch the Excel file from the public folder
      const response = await fetch('/data.xlsx');
      if (!response.ok) {
        throw new Error('Failed to fetch Excel file');
      }

      const arrayBuffer = await response.arrayBuffer();

      // Read the Excel file
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      // Find entry by both roll number and phone number
      const found = jsonData.find(
        entry =>
          entry['Roll No'] == formData.rollNumber &&
          entry['Phone Number'] == formData.phoneNumber
      );

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
        console.log(`Found`, found);
        setResult(found);
        toast.success("Record found!");
      } else {
        toast.error('No record found for the provided Roll Number and Phone Number.');
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while searching for the record.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleFormSubmit} className="form-container">
        {data?.fields?.map((field, index) => (
          <div key={index} className="form-group">
            <label className="form-label">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
        ))}

        {/* Phone number field */}
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Phone number must be 10 digits"
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="form-button" disabled={!isValid || isSubmitting}>
          {data.button.text}
        </button>

        {/* Conditionally render View and Download buttons if result is available */}
        {result && (
          <div className="result">
            <div className="button-container">
              <button className="form-button-data-found" onClick={handleView}>
                View
              </button>
              <button className="form-button-data-found" onClick={handleDownload}>
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