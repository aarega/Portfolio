function generatePDF() {
    // Create new jsPDF object
    var doc = new jsPDF();
  
    // Add HTML content to PDF
    doc.fromHTML(document.getElementById('content'), 15, 15);
  
    // Save PDF
    doc.save('portfolio.pdf');
  }
  