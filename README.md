# SCC — Civil Design Studio (Static Website)

This is a **static** website (HTML/CSS/JS). Cheap, fast, and secure by design.

## Security
- Static sites have a small attack surface (no server code or database).
- Use HTTPS (GitHub Pages/Netlify provide it automatically).
- For forms, prefer WhatsApp/mailto/Google Forms/Netlify Forms.
- Keep backups and enable 2FA on GitHub/Netlify.

## Modify Later
Yes. Edit files and redeploy. Everything is commented so you can learn as you go.

## Deploy — GitHub Pages (Free)
1) Create a GitHub account (if needed).
2) New repo: `scc-site`.
3) Upload all files/folders from this project (keep structure).
4) Settings → Pages → Source: “Deploy from a branch” → Branch: `main` → Folder: `/ (root)` → Save.
5) Wait ~1–3 minutes. Your site will be at `https://YOUR-USERNAME.github.io/scc-site`.

**Update later:** push new changes to `main` — site auto-updates.

## Deploy — Netlify (Free)
1) Go to https://app.netlify.com → Add new site → Deploy manually.
2) Drag-and-drop the whole folder.
3) You’ll get a live URL like `https://scc-studio-xyz.netlify.app`.
4) Add a custom domain in **Site settings → Domain management** if you have one.

**Update later:** drag-and-drop the updated folder or connect to Git.

## What to change before going live
- `script.js`: set your real WhatsApp number (e.g., 92300XXXXXXX).
- `index.html`: update business details, city, phone, email, prices.
- `assets/`: replace logo and project images.
- `styles.css`: tweak colors at the top variables.
