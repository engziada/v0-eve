import fs from "fs";
import path from "path";

const targetDir = path.join(process.cwd(), "public", "data");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Minimal parse to avoid TS transpilation issues.
// Since data.ts is TS we'll just evaluate it if possible via tsx, but we are inside tsx anyway.
// Let's import it directly.
async function run() {
  const { apps } = await import("../lib/data.ts");
  
  const enrichedApps = apps.map(app => ({
    ...app,
    fileSize: app.fileSize || `${Math.floor(Math.random() * 100) + 10} MB`,
    lastUpdated: app.lastUpdated || "Dec 2025",
    updatable: !!app.isOfficial || app.source === 'APKPure' // arbitrary logic for demo
  }));

  fs.writeFileSync(path.join(targetDir, "apps.json"), JSON.stringify(enrichedApps, null, 2));
  console.log("Written apps.json");
}

run();
