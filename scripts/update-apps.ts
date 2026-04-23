/**
 * This is a template script that demonstrates how to dynamically fetch the latest
 * APK versions for apps marked as `updatable` and write them back into apps.json.
 * 
 * Usage: npx tsx scripts/update-apps.ts
 */
import fs from "fs";
import path from "path";

// Define the path to our JSON database
const DATA_PATH = path.join(process.cwd(), "public", "data", "apps.json");

async function main() {
  console.log("Starting app list update process...");
  
  if (!fs.existsSync(DATA_PATH)) {
    console.error("apps.json not found! Please ensure it exists first.");
    return;
  }

  const rawData = fs.readFileSync(DATA_PATH, "utf-8");
  const apps = JSON.parse(rawData);
  let updatedCount = 0;

  for (const app of apps) {
    if (app.updatable) {
      console.log(`Checking updates for ${app.name}...`);
      
      // Simulate a web scraping / API check for the latest version.
      // In production, you would fetch from APKMirror, APKPure API, or GitHub Releases API
      // e.g., const res = await fetch(`https://api.github.com/repos/${app.githubRepo}/releases/latest`);
      
      const simulatedNewVersion = "v" + (Math.floor(Math.random() * 10) + 1) + ".0.0";
      const simulatedLastUpdated = new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      
      if (app.version !== simulatedNewVersion) {
        app.version = simulatedNewVersion;
        app.lastUpdated = simulatedLastUpdated;
        console.log(` -> Updated ${app.name} to ${simulatedNewVersion}`);
        updatedCount++;
      }
    }
  }

  if (updatedCount > 0) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(apps, null, 2));
    console.log(`Successfully updated ${updatedCount} apps!`);
  } else {
    console.log("All updatable apps are already on the latest version.");
  }
}

main().catch(console.error);
