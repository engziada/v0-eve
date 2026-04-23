# 🔄 How to Update the Apps List

The website now loads all app data dynamically from a central JSON file. This means you do not need to edit any TypeScript (`.tsx`) code to update app versions, links, or add new apps.

There are two ways to update the apps list: manually via GitHub, or using the automated Node.js script.

---

## 1. Manual Update (Easiest)

You can edit the `apps.json` file directly from your browser using GitHub's built-in editor. 

**🔗 Direct Link to Edit:**
[https://github.com/engziada/v0-eve/edit/main/public/data/apps.json](https://github.com/engziada/v0-eve/edit/main/public/data/apps.json)
*(Note: If your default branch is `master` rather than `main`, replace `main` with `master` in the URL).*

**Steps:**
1. Click the link above to open the GitHub text editor.
2. Search (`Ctrl+F` or `Cmd+F`) for the app you want to update (e.g., `"name": "Waze"`).
3. Update the required fields. Typically you will change:
   - `"version"`: The new version number (e.g., `"5.20.0"`)
   - `"fileSize"`: The new size (e.g., `"140 MB"`)
   - `"lastUpdated"`: The new date (e.g., `"May 2026"`)
   - `"downloadUrl"`: The link to the new APK.
4. Scroll to the bottom and click **Commit changes...**.
5. Once committed, if your site is linked to Vercel/Netlify, it will automatically rebuild and deploy the updated list.

---

## 2. Automated Update (Advanced)

If you want to pull updates automatically via web scraping or APIs (like GitHub Releases API), an update script skeleton has been provided.

**File Location:** `scripts/update-apps.ts`

**How it works:**
The script parses `public/data/apps.json` and looks for any app where `"updatable": true` is set. It then simulates fetching the latest version and writing it back to the JSON file.

**Steps to run locally:**
1. Clone the repository to your local machine.
2. Open your terminal in the project folder.
3. Run the following command:
   ```bash
   npx tsx scripts/update-apps.ts
   ```
4. Verify the changes made to `public/data/apps.json`.
5. Commit and push the changes to GitHub.

*Developer Note: To make the automated script production-ready, you will need to replace the simulated random version generator inside `update-apps.ts` with actual `fetch()` calls to the respective provider APIs (like GitHub Releases or APKPure).*
