# portofino — Developer × Artist link page

A single-file, zero-dependency portfolio / linktree with a split personality:
flip the toggle and the whole page morphs between **`<dev>`** (terminal night,
cyan/green, monospace, circuit-flavored particle field) and **artist**
(gallery dusk, coral/gold, serif type, painterly flowing brush trails).

Everything lives in [`index.html`](index.html) — no build step, no framework.

## Features

- 🎨 Generative canvas background whose *algorithm* changes with the theme
  (quantized 8-direction flow in dev mode, smooth paint-stroke flow in art mode)
- 🌓 Dev/Artist mode toggle, remembered in `localStorage`
- ✨ Staggered reveal animations, glassmorphism link cards, animated gradient avatar ring
- ♿ Respects `prefers-reduced-motion`, keyboard-focusable cards, ARIA-labelled toggle
- 📱 Fully responsive, works as a Linktree replacement

## Customize

Open `index.html` and edit:

1. **Name & bio** — in the `<header class="hero">` section. There are two bios:
   `.say-dev` (shown in dev mode) and `.say-art` (shown in art mode).
2. **Links** — each `<li>` inside `<ul class="links">` is one card:
   change the `href`, the `.title`, and the `.sub` description.
   The `#projects`, `#gallery`, `#instagram` hrefs are placeholders — point them
   at your real URLs.
3. **Avatar** — currently pulls your GitHub avatar
   (`https://github.com/brvetr4ve1er.png`); swap the `src` for any image.
4. **Colors / fonts** — all theme tokens are CSS variables at the top of the
   `<style>` block, under `html[data-mode="dev"]` and `html[data-mode="art"]`.
5. **"Now" status** — the dashed strip near the bottom.

## Deploy on GitHub Pages

Repo **Settings → Pages → Source: Deploy from a branch**, pick your branch and
`/ (root)`. Your page goes live at `https://<username>.github.io/portofino/`.
