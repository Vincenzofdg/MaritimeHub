import { jsPDF } from 'jspdf';

import MainTemplate from "./Data/OKTB";
import { CurrentDate } from "../Hooks"


const OKTB = (data) => {
  const docTitle = Object.keys(data.crew).length === 1 ? data.crew["p1"].Name : `${Object.keys(data.crew).length} TRIPS`;
  const { header, title, textBlock } = MainTemplate();
  
  const doc = new jsPDF();
  doc.setFont('times');

  // Initial Y position
  const x = 10;
  let y = 15;

  try {
    doc.setFontSize(22)
    doc.setFont("helvetica", "bold");
    doc.text(data.template.toUpperCase(), 95, y);

    // Header
    doc.setFontSize(11)
    doc.setFont("helvetica", "normal")
    doc.text(header[0], 75, y += 15);
    doc.text(header[1], 15, y += 5);
    doc.text(header[2], 15, y += 5);
    doc.text(header[3], 75, y += 5);

    // Title
    doc.setFontSize(16)
    doc.setFont("helvetica", "bolditalic");
    doc.setLineWidth(0.5);
    doc.text(title[0], 55, y += 15);
    doc.line(55, y + 0.5, 153, y + 0.5);
    doc.text(title[1], 55, y += 6);
    doc.line(55, y + 0.5, 155, y + 0.5);

    // Current Date
    doc.setFont("helvetica", "normal")
    doc.setFontSize(11);
    doc.text(CurrentDate(), 160, y += 10);

    // English Text Block
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold");
    doc.text(textBlock[0].title, x, y += 5);
    doc.setFont("helvetica", "normal")
    doc.setFontSize(11);
    doc.text(textBlock[0].content, x, y += 8);

    // Port Text Block
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold");
    doc.text(textBlock[1].title, x, y += 20);
    doc.setFont("helvetica", "normal")
    doc.setFontSize(11);
    doc.text(textBlock[1].content, x, y += 8);

    // Port Text Block


  
    // Save the PDF
    // doc.save(`OKTB - ${docTitle}.pdf`);

    const pdfData = doc.output('datauristring');
    window.open(pdfData, '_blank');

    return true;
  } catch (error) {
    return false;
  }

};

export default {
  OKTB
}


    // // Add crew data to the PDF
    // for (const [key, member] of Object.entries(data.crew)) {
    //   doc.text(`Crew Member: ${key}`, 10, y);
    //   y += 10;
    //   for (const [attribute, value] of Object.entries(member)) {
    //     doc.text(`${attribute}: ${value}`, 10, y);
    //     y += 10;
    //   }
    //   y += 10; // Add an extra line between members
    // }
  
    // // Add template and flight data to the PDF
    // doc.text(`Template: ${data.template}`, 10, y);
    // y += 10;
    // doc.text('Flight:', 10, y);
    // y += 10;
  
    // // Split flight data into lines and add to the PDF
    // const flightLines = data.flight.split('\n');
    // flightLines.forEach(line => {
    //   doc.text(line, 10, y);
    //   y += 10;
    // });
