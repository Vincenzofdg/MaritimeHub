const cell = (doc, text, x, y, cellWidth, cellHeight) => {
  doc.rect(x, y, cellWidth, cellHeight);
  doc.stroke();

  // Configurar o alinhamento do texto no centro da célula
  doc.text(text, x + cellWidth / 2, y + cellHeight / 2, { align: 'center', baseline: 'middle' });
}

export default cell;