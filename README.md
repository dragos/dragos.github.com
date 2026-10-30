# My blog

Source for my blog at [iulidragos.com](https://iulidragos.com), built with [Astro](https://astro.build) and the [AstroPaper](https://github.com/satnaing/astro-paper) theme.

## Writing

- Posts live in `src/content/posts/*.md`. The file name is the URL slug (`/posts/<slug>/`).
- Frontmatter needs at least `title`, `description` and `pubDatetime`; see `src/content.config.ts` for the full schema. Set `draft: true` to keep a post unpublished.
- The About and Talks pages are `src/content/pages/about.md` and `talks.md`.
- Site settings (title, socials, features) are in `astro-paper.config.ts`.

## Running locally

Requires Node 22.23+ and pnpm.

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # type-check, build to dist/, and index for search
pnpm preview    # serve the built site
```

## Deploying

Pushing to the `source` branch runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

---

### License

The site theme is AstroPaper, under [the MIT license](/LICENSE).
