import { jsPDF } from 'jspdf';

import TemplateJSON from "./Data/OKTB.json";


const OKTB = (data) => {
  const docTitle = Object.keys(data.crew).length === 1 ? data.crew["p1"].Name : `${Object.keys(data.crew).length} TRIPs`;
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();


  doc.setFont('times');

  const x = 10;
  let y = 10; // Initial Y position

  try {
    doc.setFontSize(22)
    doc.text("MAERSK", 95, y);


    // Header
    doc.setFontSize(11)
    const text = TemplateJSON.header;
    doc.text(text[0], 75, y += 15);
    doc.text(text[1], 15, y += 5);
    doc.text(text[2], 15, y += 5);
    doc.text(text[3], 75, y += 5);

  
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