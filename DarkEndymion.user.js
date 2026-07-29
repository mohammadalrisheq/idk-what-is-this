// ==UserScript==
// @name         DarkEndymion - Self Hosted 3rb.io Client
// @namespace    https://github.com/YOUR-GITHUB-USERNAME/DarkEndymion
// @version      1.0.0
// @description  Loads the authorized DarkEndymion client from your own GitHub Pages host.
// @author       Project contributors
// @match        https://3rb.io/*
// @match        https://*.3rb.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      YOUR-GITHUB-USERNAME.github.io
// ==/UserScript==

(() => {
  "use strict";

  // Change this after enabling GitHub Pages for the repository.
  const BASE_URL = "https://YOUR-GITHUB-USERNAME.github.io/DarkEndymion/";
  const FILES = Object.freeze({
    page: "index.html",
    scripts: ["v.js", "m.js"],
  });

  const makeUrl = (file) => {
    const base = BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`;
    const url = new URL(file, base);
    url.searchParams.set("darkendymion_cache", `${Date.now()}`);
    return url.href;
  };

  const requestText = (file) => new Promise((resolve, reject) => {
    const url = makeUrl(file);
    GM_xmlhttpRequest({
      method: "GET",
      url,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
      },
      timeout: 30000,
      onload: ({ status, responseText }) => {
        if (status < 200 || status >= 300 || !responseText) {
          reject(new Error(`${file} returned HTTP ${status || "unknown"}`));
          return;
        }
        resolve({ file, url, source: responseText });
      },
      onerror: () => reject(new Error(`Network failure while loading ${file}`)),
      ontimeout: () => reject(new Error(`Timed out while loading ${file}`)),
    });
  });

  const showBootstrap = () => {
    document.open();
    document.write(`<!doctype html>
      <html><head><meta charset="utf-8"><title>DarkEndymion</title></head>
      <body style="margin:0;background:#08070b;color:#eee;font:16px system-ui;display:grid;place-items:center;height:100vh">
        <div id="darkendymion-bootstrap" style="text-align:center">
          <div style="font-size:28px;letter-spacing:.15em">DARKENDYMION</div>
          <div style="margin-top:12px;opacity:.7">Loading self-hosted client…</div>
        </div>
      </body></html>`);
    document.close();
  };

  const showFailure = (error) => {
    document.open();
    document.write(`<!doctype html><html><head><meta charset="utf-8"><title>DarkEndymion failed</title></head>
      <body style="margin:0;background:#0b080d;color:#ff87c8;font:15px ui-monospace,monospace;padding:36px">
        <h2>DarkEndymion failed to start</h2>
        <pre style="white-space:pre-wrap;color:#fff">${String(error && error.stack || error).replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"})[c])}</pre>
        <p>Base URL: ${BASE_URL}</p>
        <button onclick="location.reload()" style="padding:10px 16px">Reload</button>
      </body></html>`);
    document.close();
  };

  const execute = ({ file, url, source }) => {
    // Preserve the original loader's execution model while giving DevTools a useful filename.
    const wrapped = `${source}\n//# sourceURL=${url.replace(/[\r\n]/g, "")}`;
    try {
      new Function(wrapped)();
    } catch (error) {
      error.message = `${file}: ${error.message}`;
      throw error;
    }
  };

  const waitForDocument = () => new Promise((resolve) => {
    if (document.readyState !== "loading") {
      resolve();
      return;
    }

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      resolve();
    };
    document.addEventListener("DOMContentLoaded", finish, { once: true });
    // A failed optional third-party asset must not hold the client forever.
    setTimeout(finish, 10000);
  });

  const start = async () => {
    showBootstrap();
    try {
      // Download concurrently, then initialize deterministically.
      const [page, ...scripts] = await Promise.all([
        requestText(FILES.page),
        ...FILES.scripts.map(requestText),
      ]);

      document.open();
      document.write(page.source);
      document.close();

      await waitForDocument();

      for (const script of scripts) execute(script);
    } catch (error) {
      console.error("[DarkEndymion] Startup failed", error);
      showFailure(error);
    }
  };

  start();
})();
