# DarkEndymion self-hosted client

This folder packages the authorized client files supplied for the project and a small Tampermonkey bootstrapper that loads them from your own host.

## Contents

- `index.html` — client page
- `v.js` — vendor/runtime script
- `m.js` — client/game script
- `DarkEndymion.user.js` — Tampermonkey loader
- `manifest.json` — file inventory and provenance hashes

The loader deliberately initializes in this order:

1. Download all three files.
2. Replace the original 3rb.io document with `index.html`.
3. Execute `v.js`.
4. Execute `m.js`.

This avoids the race in the old loader, which requested the page and both scripts concurrently.

## Publish with GitHub Pages

1. Create a GitHub repository named `DarkEndymion`.
2. Upload the contents of this folder to the repository root. `index.html` must be at the root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
5. Your base address will normally be:

   `https://YOUR-GITHUB-USERNAME.github.io/DarkEndymion/`

6. Open `DarkEndymion.user.js` and replace both instances of `YOUR-GITHUB-USERNAME`:

   - the `@connect` metadata entry;
   - the `BASE_URL` constant.

7. Install the edited userscript in Tampermonkey and open `https://beta.3rb.io/`.

Future client updates only require replacing `index.html`, `v.js`, or `m.js` in the repository. The loader adds a cache-busting query string on every startup.

## Test locally first

Run this from PowerShell:

```powershell
python -m http.server 8765 --directory "C:\Users\pc\Documents\NyxSen\DarkEndymion"
```

Then make a temporary copy of the userscript and change:

```js
const BASE_URL = "http://127.0.0.1:8765/";
```

Also add this metadata entry to that temporary copy:

```js
// @connect      127.0.0.1
```

Do not run the local and GitHub-hosted loaders simultaneously.

## Scope and safety

Self-hosting changes where the client files are downloaded from. It does not bypass 3rb.io server limits, verification, Turnstile, or other server-side controls. The supplied client code remains otherwise intact so that later feature work can be reviewed separately.
