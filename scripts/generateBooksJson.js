const fs = require("fs");
const path = require("path");

const booksDir = path.join(__dirname, "..", "public", "books");
const outputFile = path.join(booksDir, "books.json");

fs.readdir(booksDir, (err, files) => {
  if (err) {
    console.error("Error reading books folder:", err);
    return;
  }

  const pdfFiles = files.filter((file) => file.endsWith(".pdf"));
  fs.writeFileSync(outputFile, JSON.stringify(pdfFiles, null, 2));
  console.log(`✅ books.json generated with ${pdfFiles.length} entries.`);
});
