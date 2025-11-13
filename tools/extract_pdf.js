const fs = require('fs');
const pdf = require('pdf-parse');

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: node extract_pdf.js <path-to-pdf>');
  process.exit(1);
}

try {
  const dataBuffer = fs.readFileSync(filePath);
  pdf(dataBuffer).then(function(data) {
    console.log(data.text);
  }).catch(err => {
    console.error('Error parsing PDF:', err);
    process.exit(1);
  });
} catch (err) {
  console.error('Error reading file:', err.message);
  process.exit(1);
}
