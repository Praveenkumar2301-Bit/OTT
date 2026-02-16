# ZENTRA – OTT POC

**Tamil & Indian Short Films — Publish. Watch. Rise.** A platform to watch and publish Tamil and Indian short films, with a focus on Tamil content.

## Overview

ZENTRA v0.1 is an investor-ready OTT demo with:

- **Landing** – Cinematic hero, auto-scrolling featured Tamil shorts, tagline
- **Home** – Horizontal carousels (Trending Tamil Shorts, New Tamil & Indian Releases, Tamil Director Debuts, Tamil Nadu & Indian Picks)
- **Content detail** – Thumbnail, play, director profile, “Support the Creator” CTA
- **Video player** – Embedded player (YouTube/HTML5), theater-style UI, suggested next shorts
- **Creator profile** – Bio, published shorts, total views & earnings (mocked)
- **Admin dashboard** – Mock upload form, stats charts, approve/reject content

## Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **UI:** Custom components (ShadCN-style), Lucide icons
- **Backend:** Next.js API routes + in-memory mock data (ready for PostgreSQL/SQLite)
- **Video:** YouTube embeds; architecture supports HLS later

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/           # App Router pages & API
  components/    # Layout, UI, content, player
  lib/           # Types, mock data, utils
```

## Data (POC)

- All content and creators are **mock data** in `src/lib/mock-data.ts`.
- Sample images use Unsplash (demo only); replace with licensed assets for production.
- Video embeds use a placeholder YouTube ID; replace with real unlisted shorts for demos.

## API (POC)

- `GET /api/content` – List all content
- `GET /api/content/[slug]` – Single content
- `GET /api/creators` – List creators
- `GET /api/creators/[slug]` – Single creator + shorts

## Design

- **Brand:** ZENTRA – premium, cinematic, minimal
- **Theme:** Dark OTT-style background, subtle gold accent
- **Typography:** Playfair Display (headings), Outfit (body)

## License & Disclaimer

Demo content (images, video placeholders) is for POC use only. Replace with properly licensed content before any commercial use.
