import fs from "fs";

const filesToRemove = [
  "vite.config.ts",
  "index.html",
  "src",
  "script.ts",
  "script2.ts",
  "fetch.ts"
];

for (const file of filesToRemove) {
  if (fs.existsSync(file)) {
    fs.rmSync(file, { recursive: true, force: true });
    console.log(`Deleted ${file}`);
  }
}
