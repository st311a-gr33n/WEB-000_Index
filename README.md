# ST3114-GR33N // WEB-000 Index

A static, single-page personal systems archive for conceptual projects, experiments, tools, investigations, and the technical knowledge that connects them.

Repository: [st311a-gr33n/WEB-000_Index](https://github.com/st311a-gr33n/WEB-000_Index)

## Concept: TZOMPANTLI

The archive is named TZOMPANTLI after the Mexica tzompantli, a rack-like structure used to display a collection of skulls. The name shapes the organization of the site: the index is the structure, and every project is a skull added to it.

Each territory holds a set of artifacts. Hovering or focusing a skull exposes a short record; selecting it opens a detail card with an extended description, the project's skull, an optional image, its status, and a link to the project page when one exists.

The current prototype reuses shared skull assets. The long-term intent is for every project to have its own skull, making the collection legible at a glance while preserving a common visual language.

## Territories

| Territory | Purpose |
| --- | --- |
| NULL | Conceptual systems |
| LABS | Research and experimentation |
| OPS | Tools and operational systems |
| BLACKBOX | Adversarial and hidden systems |
| LOG | Public record of technical thinking |

LOG records are further grouped by kind:

- `REF` — references
- `CFG` — configurations
- `DSP` — dispatches

## Interaction model

- Hover or focus an artifact to show the short record.
- Click an artifact to open its detail card.
- Use `ESC / CLOSE` or the Escape key to dismiss the detail card.
- Use the LOG filters to switch between all records, references, configurations, and dispatches.
- Placeholder artifacts represent open slots and remain unlinked until a record is added.

## Project structure

```text
WEB-000_Index/
├── index.html
├── script.js
├── style.css
├── README.md
├── CNAME
├── assets/
│   ├── ST3114-GR33N_Web.svg
│   ├── ST33114-GR33N_Icon.svg
│   └── skulls/
│       ├── skull_base.svg
│       ├── skull_prototype.svg
│       └── skull_prototype_bbx.svg
├── favicon/
│   ├── favicon_dark.svg
│   └── favicon_light.svg
└── st3114-gr33n-index-prototype-v2.html
```

`st3114-gr33n-index-prototype-v2.html` is a historical prototype snapshot. The active site is `index.html`.

## Editing project records

Project data lives in the `records` object at the top of `script.js`. Each record uses this shape:

```js
"NULL-001": {
  title: "Maya Long Count",
  category: "NULL / CONCEPTUAL SYSTEMS",
  type: "PROJECT RECORD",
  status: "PROTOTYPE",
  description: "Short text shown in the hover record.",
  extended: [
    "First paragraph shown in the detail card.",
    "Second paragraph shown in the detail card."
  ],
  skull: "./assets/skulls/skull_prototype.svg",
  image: null,
  action: {
    label: "MAYA LONG COUNT",
    href: "https://example.com/project"
  }
}
```

| Field | Purpose |
| --- | --- |
| `title` | Project title |
| `category` | Territory and category label |
| `type` | Record type shown in the preview and detail card |
| `status` | Current project status |
| `description` | Short description used by the hover record |
| `extended` | Array of paragraphs used by the detail card |
| `skull` | Path to the project's skull asset |
| `image` | `null`, or `{ src, alt, caption }` for one optional image |
| `action` | `null`, or `{ label, href }` for the project-page link |

To add a project:

1. Add an `.artifact` button with a unique `data-id` to the appropriate territory in `index.html`.
2. Add the matching entry to `records` in `script.js`.
3. Place the skull asset in `assets/skulls/` and point the `skull` field to it.
4. Optionally add a project image and project-page link.
5. Add a new placeholder artifact if the territory should keep an open slot.

For an optional detail image, use:

```js
image: {
  src: "./assets/projects/example.png",
  alt: "Description of the image",
  caption: "Optional caption."
}
```

## Local preview

The site has no build step. Serve the directory with any static file server:

```sh
python3 -m http.server
```

Then open `http://localhost:8000`.

Opening `index.html` directly in a browser also works.

## Deployment

The site is deployed as a static GitHub Pages site. The `CNAME` file configures the custom domain, and no compilation or asset pipeline is required.

## Status

Prototype. Shared skull assets and placeholder records are still in use. Remaining work includes per-project skulls, optional project images, final record copy, and project-page links.
