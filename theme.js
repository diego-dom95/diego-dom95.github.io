(() => {
  const storageKey = "diego-website-theme";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let preference = null;
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") preference = stored;
  } catch {}

  function applyTheme() {
    const theme = preference || (systemTheme.matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content =
      theme === "dark" ? "#111c24" : "#f5f6f2";
    const toggle = document.querySelector(".theme-toggle");
    if (toggle) toggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  applyTheme();
  systemTheme.addEventListener("change", () => {
    if (!preference) applyTheme();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;
    applyTheme();
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      preference = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme();
      try {
        window.localStorage.setItem(storageKey, preference);
      } catch {}
    });
  });
})();
