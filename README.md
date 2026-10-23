# Diego S. Dominguez

Personal researcher website: https://diego-dom95.github.io/

Physics, continuous gravitational waves, and scientific machine learning.
The site uses static HTML, CSS, and a small script for its light/dark theme.
No build system, external fonts, or site-owned backend is required.
An optional visitor map loads third-party analytics only after a visitor opts in.

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
- `visitor-map.js`: explicit opt-in loading and unloading of the visitor map.
- `visitor-map.html`: sandboxed MapMyVisitors embed.
- `assets/`: website assets, including a photograph with personal metadata removed.
- `.nojekyll`: serves this static site without Jekyll processing.

## Research media

Two short, silent animation chapters explain a rotating source and Earth's
orbital Doppler modulation. They have native playback controls and text
descriptions, and do not autoplay or loop.

The featured sensitivity figure comes from the ten-day targeted transformer
experiment presented alongside the KAGRA poster work. Its caption distinguishes
that experiment from the later CNN/transformer manuscript.

The KAGRA F2F 2026 poster is available as an image preview only. Its original
PDF, private documents, research data, and checkpoints are not included here.

GitHub Pages publishes the root of the `main` branch.
The scientific diagram is illustrative and does not represent measured data.
Unpublished work is labeled separately from published papers.

## Optional visitor map

The footer map is disabled until a visitor selects “Load visitor map”. Loading
it sends visitor information to MapMyVisitors, including an IP address used for
approximate geolocation. The provider retains visitor data while the site's
account is active; see https://mapmyvisitors.com/b/policy.

The widget runs in a sandboxed iframe without same-origin access to the parent.
It can be unloaded, and its activation is not remembered between page loads.
Counts cover only visitors who enable the map; locations are approximate.
Unloading does not delete data already sent to the provider.

Local previews do not load the tracker. Both `visitor-map.js` and
`visitor-map.html` restrict activation to `diego-dom95.github.io`.
The rest of the website works with the map blocked or JavaScript disabled.
