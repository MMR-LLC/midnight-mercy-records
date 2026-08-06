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
        '[data-feature-subtitle]': release.subtitle,
        '[data-feature-date]': release.releaseDate,
        '[data-feature-cta]': release.cta
      };
      Object.entries(values).forEach(([selector, value]) => {
        const node = feature.querySelector(selector);
        if (!node) return;
        node.textContent = value || '';
        node.hidden = !value;
      });

      const art = feature.querySelector('[data-feature-art]');
      if (art) {
        art.src = release.artwork;
        art.alt = release.artworkAlt || `${release.title} cover artwork`;
      }

      feature.dataset.campaignStatus = release.status || 'coming-soon';
    }
  }

  requestAnimationFrame(() => document.documentElement.classList.add('is-loaded'));
})();
