# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Adding a property listing

Listings live in `src/content/listings/` as one Markdown file per property. The filename becomes the
URL: `src/content/listings/41255-county-road-19-deer-river.md` → `/listings/41255-county-road-19-deer-river`.

New listings appear automatically on `/listings`, in the "Our Listings" section of the homepage, and in
the sitemap. No code changes needed.

Frontmatter fields (see `src/content.config.ts` for the full schema):

| Field | Required | Notes |
| :--- | :--- | :--- |
| `address`, `city`, `state`, `zip` | yes | Street address only in `address` |
| `price` | yes | Number, no `$` or commas — `274999` |
| `status` | no | `active` (default), `coming-soon`, `pending`, `sold` |
| `beds`, `baths` | yes | Numbers |
| `sqft`, `acres`, `yearBuilt`, `county`, `mls` | no | Shown in the stat bar and detail table when present |
| `listDate` | yes | `YYYY-MM-DD`, controls sort order |
| `agent` | no | Agent slug from `src/lib/constants.ts`, defaults to `malcolm-wallaker` |
| `tagline` | yes | The big headline on the page |
| `description` | yes | Meta description and social share text |
| `heroImage` | yes | Full image URL |
| `photos` | no | `[{ src, alt }]` — renders a photo grid on the page |
| `photoCount`, `externalPhotosUrl` | no | Links out to the full photo set (RateMyAgent, MLS, etc.) |
| `highlights` | no | Bullet list for the "At a Glance" box |
| `features` | no | `[{ title, detail }]` — the feature cards |
| `mapQuery` | no | Address string for the Google Maps link |
| `draft` | no | `true` hides the listing from the build |

The Markdown body below the frontmatter is the property narrative, rendered with `##` headings.

Showing requests submit through Netlify Forms under the form name `listing-inquiry`, with the property
address and MLS number attached as hidden fields. Email notifications are configured in the Netlify
dashboard under **Forms → Form notifications**.
