const JustifyText = (text, doc, coords) => {
  const maxWidth = doc.internal.pageSize.getWidth() - 20; 
  const lines = doc.splitTextToSize(text, maxWidth);
  let [x, y] = coords;
  const xReset = x;

  lines.forEach((linha, i) => {
    const lineFixed = linha.trim();
    x += 5

    if (i === lines.length - 1) {
      doc.text(lineFixed, x, y);
      return
    }

    const lineWidth = doc.getStringUnitWidth(lineFixed) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const words = lineFixed.split(' ');
    const numSpaces = words.length - 1;
    const additionalSpace = numSpaces > 0 ? (maxWidth - lineWidth) / numSpaces : 0;

    words.forEach((word, _i) => {
      doc.text(word, x, y);
      x += doc.getStringUnitWidth(word) * doc.internal.getFontSize() / doc.internal.scaleFactor + additionalSpace;
    });

    x = xReset; 
    y += doc.getLineHeight() / doc.internal.scaleFactor;
  });
}

export default JustifyText;
