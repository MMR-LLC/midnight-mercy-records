(() => {
  const config = window.DISCOVER_CONFIG || {};
  const dateKey = new Intl.DateTimeFormat('en-CA', {
    timeZone: config.timeZone || 'America/New_York',
    year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date());
  const state = (config.timeline || []).filter(item => item.from <= dateKey).at(-1);

  const renderRelease = (slot, releaseKey, label, cta, urlOverride, newTabOverride) => {
    const release = config.releases?.[releaseKey];
    const feature = document.querySelector(`[data-${slot}-link]`);
    if (!release || !feature) return;
    const prefix = slot === 'feature' ? 'feature' : 'secondary';
    const url = urlOverride || release.url;
    const openInNewTab = typeof newTabOverride === 'boolean' ? newTabOverride : release.openInNewTab;
    feature.href = url;
    if (openInNewTab) {
      feature.target = '_blank';
      feature.rel = 'noopener noreferrer';
    } else {
      feature.removeAttribute('target');
      feature.removeAttribute('rel');
    }
    const values = {
      [`[data-${prefix}-label]`]: label,
      [`[data-${prefix}-title]`]: release.title,
      [`[data-${prefix}-subtitle]`]: release.subtitle,
      [`[data-${prefix}-date]`]: release.releaseDate,
      [`[data-${prefix}-cta]`]: cta
    };
    Object.entries(values).forEach(([selector, value]) => {
      const node = feature.querySelector(selector);
      if (!node) return;
      node.textContent = value || '';
      node.hidden = !value;
    });
    const art = feature.querySelector(`[data-${prefix}-art]`);
    if (art) {
      art.src = release.artwork;
      art.alt = release.artworkAlt || `${release.title} cover artwork`;
    }
  };

  if (state) {
    renderRelease('feature', state.primary, state.primaryLabel, state.primaryCta, state.primaryUrl, state.primaryNewTab);
    renderRelease('secondary', state.secondary, state.secondaryLabel, state.secondaryCta, state.secondaryUrl, state.secondaryNewTab);
  }

  requestAnimationFrame(() => document.documentElement.classList.add('is-loaded'));
})();
