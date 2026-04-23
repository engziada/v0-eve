import fs from "fs";
import path from "path";

const dataTsPath = path.join(process.cwd(), "lib", "data.ts");
let dataTsContent = fs.readFileSync(dataTsPath, "utf-8");

// Remove the `export const apps: App[] = [...];` block
// Since it's huge, we'll use a regex
dataTsContent = dataTsContent.replace(/export const apps: App\[] = \[\s*\/\/.*?(?=export interface Firmware)/s, 'import appsData from "../public/data/apps.json";\n\nexport const apps: App[] = appsData as App[];\n\n');

fs.writeFileSync(dataTsPath, dataTsContent);
console.log("Updated data.ts");
