# Grand Rapids MN Living

## What this is
A local-area content website covering 13 towns across Northern Minnesota (Grand Rapids, the Iron Range, and Aitkin County). It promotes Pemberton Real Estate through two agents — **Malcolm Wallaker** (Grand Rapids/Itasca County) and **Bridger Hopkins** (Iron Range) — with city guides, lake guides, agent profiles, a blog, and pages written to be quoted by AI answer engines like ChatGPT and Google AI Overviews ("GEO" content).

## Current status
**Live and actively maintained.** New blog, guide, and news content is written and published automatically twice a week (Mondays and Thursdays) using Claude — see `.github/workflows/publish-content.yml`.

## Website / deployment link
- Live site: **https://grandrapidsminnesota.com**
- Hosted on **Netlify**, which rebuilds automatically when changes are merged.

## Technologies being used
- **Astro** — website builder that produces a fast, static site
- **Tailwind CSS** — for styling
- **Claude (Anthropic API)** — automatically writes new content on a schedule

## Main folders
- `src/pages/` — every page (home, about, contact, agents, blog, cities, lakes, guides, news)
- `src/content/` — the actual content collections (`blog/`, `geo/`, `news/`, `cities/`)
- `src/lib/constants.ts` — Malcolm and Bridger's contact info, license numbers, and bios
- `scripts/generate-content.mjs` — the automated content-writing script and its topic list
- `.github/workflows/` — the schedule that runs the content automation
- `public/` — images and static files

## Setup instructions
1. Install [Node.js](https://nodejs.org) (version 20+).
2. Run `npm install`.
3. Run `npm run dev` to preview locally, or `npm run build` to build for publishing.

## How to make changes
1. Create a new branch — don't edit `main` directly, since Netlify publishes straight from it.
2. Make your change and preview it locally.
3. Open a pull request so it can be reviewed before it goes live.

## Current priorities
- **Clarify this site's relationship to `moved-with-malcolm`.** Both sites may be targeting similar search terms (local area guides, "moving to Grand Rapids MN"). Decide whether this is a deliberate complementary strategy (team/brokerage authority site funneling to Malcolm's personal site) or duplicated effort that should be consolidated.
- Keep Malcolm's and Bridger's contact info in sync with their other sites — it's currently hand-entered here and separately in `moved-with-malcolm`.

## Known problems
- There was no real README until this one — it still had the default Astro starter-template text.
- One duplicate-looking image filename in `public/images/` has a typo (a double space) — worth cleaning up.
- Contact info duplicated across repos (see above) — a source of drift if one is updated and not the other.

## Privacy warnings
- Never commit real client information (buyer/seller names, deal terms, private addresses) into content.
- The Claude API key is stored as a GitHub secret (`CLAUDE`), never in code — keep it that way.

## Who manages this
Malcolm Wallaker (owner), covering both his own and Bridger Hopkins's listings for this area. Content is partly automated by a scheduled AI workflow — see `AI-INSTRUCTIONS.md` for the rules any AI assistant working on this repo must follow.
