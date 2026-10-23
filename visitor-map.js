(() => {
  const button = document.querySelector('.visitor-toggle');
  const container = document.querySelector('#visitor-map');
  const placeholder = document.querySelector('.visitor-placeholder');
  const status = document.querySelector('.visitor-status');
  if (!button || !container || !placeholder || !status) return;

  if (window.location.hostname !== 'diego-dom95.github.io') {
    status.textContent = 'Visitor tracking is disabled in local previews.';
    return;
  }

  button.hidden = false;
  button.addEventListener('click', () => {
    const existingFrame = container.querySelector('iframe');
    if (existingFrame) {
      existingFrame.remove();
      placeholder.hidden = false;
      button.textContent = 'Load visitor map';
      button.setAttribute('aria-expanded', 'false');
      status.textContent = 'Map unloaded. Data already sent remains subject to the provider’s retention policy.';
      return;
    }

    const frame = document.createElement('iframe');
    frame.title = 'MapMyVisitors: approximate visitor locations and visit count';
    frame.setAttribute('sandbox', 'allow-scripts allow-top-navigation-by-user-activation');
    frame.referrerPolicy = 'no-referrer';
    frame.src = 'visitor-map.html';
    placeholder.hidden = true;
    container.append(frame);
    button.textContent = 'Unload visitor map';
    button.setAttribute('aria-expanded', 'true');
    status.textContent = 'Map enabled for this page view. If it stays blank, the provider may be unavailable or blocked by your browser.';
  });
})();
