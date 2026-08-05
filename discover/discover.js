(() => {
  const config = window.DISCOVER_CONFIG || {};
  const release = config.featuredRelease;
  const feature = document.querySelector('[data-feature-link]');

  if (feature && release) {
    if (release.status === 'hidden') {
      feature.hidden = true;
    } else {
      feature.href = release.url;
      if (release.openInNewTab) {
        feature.target = '_blank';
        feature.rel = 'noopener noreferrer';
      } else {
        feature.removeAttribute('target');
        feature.removeAttribute('rel');
      }

      const values = {
        '[data-feature-label]': release.label,
        '[data-feature-title]': release.title,
        '[data-feature-artists]': release.artists,
        '[data-feature-cta]': release.cta
      };
      Object.entries(values).forEach(([selector, value]) => {
        const node = feature.querySelector(selector);
        if (node && value) node.textContent = value;
      });

      const art = feature.querySelector('[data-feature-art]');
      if (art) {
        art.src = release.artwork;
        art.alt = release.artworkAlt || `${release.title} cover artwork`;
      }
    }
  }

  requestAnimationFrame(() => document.documentElement.classList.add('is-loaded'));
})();
