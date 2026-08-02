# Instructions for AI Assistants

This site is **live** at grandrapidsminnesota.com and rebuilds automatically from the `main` branch. Before making any changes, follow these rules:

1. Read `README.md` before making any changes.
2. Understand the existing project before editing files — don't guess at intent.
3. Avoid rebuilding the entire project unnecessarily. Small, targeted changes are almost always better than a rewrite.
4. Make small, focused changes. One change, one reason.
5. Never publish secrets — API keys, passwords, tokens, or credentials must never be written into code or committed to git.
6. Never include client information, guest information, door codes, passwords, or API keys in any file, commit message, or comment. The content-writing automation must never invent or include specific client transactions or private details.
7. Check mobile usability for any page you change — most visitors are on phones.
8. Preserve existing integrations (the scheduled content-publishing workflow) — don't remove or break working automations without asking first.
9. Explain every file you changed and why, in plain English, when you report back.
10. Test changes locally (`npm run dev` or `npm run build`) before recommending they be published.
11. Use a new branch for your work — never edit `main` directly, since it deploys straight to the live site.
12. Ask for approval before making destructive changes (deleting pages, renaming things, changing visibility, removing automations).
