import fs from "fs";

async function fetchFile(url, dest) {
  const res = await fetch(url);
  const text = await res.text();
  fs.writeFileSync(dest, text);
  console.log(`Saved ${dest}`);
}

async function main() {
  await fetchFile("https://raw.githubusercontent.com/engziada/v0-eve/main/components/app-card.tsx", "app-card.tsx");
}
main();
