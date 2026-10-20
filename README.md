# Diego S. Dominguez

Personal researcher website: https://diego-dom95.github.io/

Physics, continuous gravitational waves, and scientific machine learning.
The site uses static HTML, CSS, and a small script for its light/dark theme.
No build system, external fonts, analytics, or backend is required.

## Preview

From this directory:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/` on the same computer.

## Files

- `index.html`: biography, research, publications, software, and contact.
- `styles.css`: responsive layout and light/dark palettes.
- `theme.js`: system-theme detection and locally saved theme preference.
- `assets/`: website assets, including a photograph with personal metadata removed.
- `.nojekyll`: serves this static site without Jekyll processing.

GitHub Pages publishes the root of the `main` branch.
The scientific diagram is illustrative and does not represent measured data.
Unpublished work is labeled separately from published papers.
