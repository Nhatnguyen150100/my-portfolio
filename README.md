# Nhat Nguyen — Developer Portfolio

A personal portfolio website for **Nhat Nguyen**, a Full Stack Engineer.
Built as a single-page site with a dark, gradient-accented design and a
working contact form.

> **Live:** _add your deployment URL here_ · **Source:** this repository

---

## ✨ Features

- **Single-page layout** with sections: Hero, About, Experience & Education
  (+ Certifications), Projects, and Contact.
- **Full-height sections** (`min-h-dvh`) with smooth in-view fade animations.
- **Responsive header** — centered nav on desktop, hamburger menu on mobile.
- **Working contact form** — validated on the client _and_ the server, with a
  honeypot for spam, sending email through [Resend](https://resend.com) via a
  Next.js Server Action.
- **Theme tokens** — a small design-token system (colors, radii, gradients)
  defined in `globals.css`.
- **SEO ready** — rich metadata, Open Graph / Twitter cards, and an SVG favicon.

## 🧰 Tech Stack

| Area | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + `tw-animate-css` |
| Forms | react-hook-form + Zod |
| Email | Resend (via Server Action) |
| Animation | `motion` |
| Icons | `lucide-react` |
| Fonts | Josefin Sans (display) + Inter (body) via `next/font` |
| Tooling | Biome (lint + format) |
| Package manager | pnpm |

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.9+ (required by Next.js 16)
- **pnpm** (`npm install -g pnpm`)

### Install

```bash
pnpm install
```

### Environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | ✅ | API key from [resend.com/api-keys](https://resend.com/api-keys). Without it the contact form returns a "not configured" error. |
| `CONTACT_TO_EMAIL` | – | Inbox that receives messages. Defaults to the address in the server action. |
| `CONTACT_FROM_EMAIL` | – | Verified sender. Defaults to Resend's shared test sender (`onboarding@resend.dev`), which can only deliver to your own Resend account email until you verify a domain. |

### Run the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📜 Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Lint `./src` with Biome |
| `pnpm format` | Format `./src` with Biome |
| `pnpm check` | Lint + format + auto-fix |

## 📁 Project Structure

```
src/
├── app/                      # App Router entry, layout, global styles, metadata
│   ├── layout.tsx            # Root layout, fonts, SEO metadata, favicon
│   ├── page.tsx              # Renders the home page
│   └── globals.css           # Design tokens + Tailwind theme
├── components/
│   ├── layout/               # Header, Footer, Container
│   └── ui/                   # Button, Input, Textarea, SectionHeading, FadeIn
├── lib/                      # fonts, utils (cn)
└── modules/home/
    ├── actions/              # contact.action.ts (Server Action — Resend)
    ├── components/           # ContactForm, ProjectCard
    ├── containers/           # HomePage (composes all sections)
    ├── data/                 # portfolio.ts — ALL editable content
    ├── schemas/              # contact.schema.ts (Zod)
    └── sections/             # Hero, About, Experience, Work, Contact
```

## ✏️ Customizing Content

Almost everything you'd want to change lives in one file:

- **`src/modules/home/data/portfolio.ts`** — profile, bio, nav links,
  experience, education, certifications, projects, and contact details.
- **`src/app/layout.tsx`** — page title, description, Open Graph metadata,
  and `metadataBase` (update `https://your-domain.com` to your real URL).
- **`public/images/`** — portrait, project thumbnails, and the skills graphic.
- **`public/icon.svg`** — the favicon (a gradient "N" monogram).

## ☁️ Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example` under
   **Settings → Environment Variables** (at minimum `RESEND_API_KEY`).
4. Deploy. Vercel auto-detects Next.js — no extra configuration needed.

## 📄 License

Personal project — all rights reserved. Feel free to draw inspiration, but please don't republish the content or imagery as your own.
