import { jsPDF } from 'jspdf';

import MainTemplate from "./Data/OKTB";
import { CurrentDate, PDFHooks } from "../Hooks"

const OKTB = (data) => {
  const {template, crew} = data;
  const docTitle = Object.keys(data.crew).length === 1 ? data.crew["p1"].Name : `${Object.keys(data.crew).length} TRIPS`;
  const { header, title, textBlock, joiners, flightDetails } = MainTemplate();
  
  const doc = new jsPDF();
  doc.setFont('times');

  // Initial Y position
  const x = 10;
  let y = 25;

  try {
    doc.setFontSize(22)
    doc.setFont("helvetica", "bold");
    doc.text(template.toUpperCase(), 95, y);

    // Header
    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text(header[0], 75, y += 14);
    doc.text(header[1], 15, y += 5);
    doc.text(header[2], 15, y += 5);
    doc.text(header[3], 75, y += 5);

    // Title
    doc.setFontSize(16)
    doc.setFont("helvetica", "bolditalic");
    doc.setLineWidth(0.5);
    doc.text(title[0], 55, y += 10);
    doc.line(55, y + 0.5, 153, y + 0.5);
    doc.text(title[1], 55, y += 6);
    doc.line(55, y + 0.5, 155, y + 0.5);

    // Current Date
    doc.setFont("helvetica", "normal")
    doc.setFontSize(11);
    doc.text(CurrentDate(), 160, y += 10);

    // Text Block
    textBlock.forEach(block => {
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold");
      y += 10;
      doc.text(block.title, x, y);
      doc.setFont("helvetica", "normal")
      doc.setFontSize(11);
      y += 8;
      PDFHooks.JustifyText(block.content, doc, [x, y])
      y += 10;
    });

    // Joiners
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(joiners.title, x, y += 7);
    doc.line(x, y + 0.5, 64, y + 0.5);

    // Joiners Table
    doc.setFontSize(10);
    const line = (text) => {
      PDFHooks.Cell(doc, text[0], x, y += 3, 70, 7);
      PDFHooks.Cell(doc, text[1], x + 70, y, 40, 7);
      PDFHooks.Cell(doc, text[2], x + 110, y, 30, 7);
      PDFHooks.Cell(doc, text[3], x + 140, y, 45, 7);
    };
    
    line(joiners.tableMenu);

    doc.setFont("helvetica", "normal");

    [...Object.keys(crew)].forEach(p => {
      const {Name, Nationality, BirthDate, Document} = crew[p];
      y += 4
      line([Name, Nationality, BirthDate, Document]);
    });

     // Flight Details
     doc.setFont("helvetica", "bold");
     doc.text(flightDetails, x, y += 14);
     doc.setFont("helvetica", "normal");
     doc.setFontSize(7);
     doc.text(data.flight, x + 5, y += 7)

    
    
  
    // Save the PDF
    // doc.save(`OKTB - ${docTitle}.pdf`);


    const pdfData = doc.output('datauristring');
    window.open(pdfData, '_blank');

    return true;
  } catch (error) {
    console.log(error)
    return false;
  }

};

export default {
  OKTB
}
