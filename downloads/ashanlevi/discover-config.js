/**
 * Midnight Mercy Records — Discover page configuration
 * Update this file for future releases. No HTML editing is required.
 */
window.DISCOVER_CONFIG = {
  timeZone: "America/New_York",
  releases: {
    sweets: {
      title: "Sweets",
      subtitle: "A deeply personal song about fatherhood",
      releaseDate: "Release Date • October 2, 2026",
      artwork: "../assets/albums/sweets-web.jpg",
      artworkAlt: "Sweets cover artwork by Ashan Levi",
      url: "https://distrokid.com/hyperfollow/ashanlevi/sweets",
      openInNewTab: true
    },
    redemption: {
      title: "REDEMPTION",
      subtitle: "The new album from Ashan Levi",
      releaseDate: "Release Date • August 21, 2026",
      artwork: "../assets/albums/redemption.jpg",
      artworkAlt: "REDEMPTION album artwork by Ashan Levi",
      url: "https://open.spotify.com/album/7sSkKsUODS3fbMDyDlclwh",
      openInNewTab: true
    },
    remix: {
      title: "Your Light Remix",
      subtitle: "Ashan Levi • Noah Graves • Ava Thorn",
      releaseDate: "Release Date • August 28, 2026",
      artwork: "../assets/albums/Your_Light_Remix_Album_Cover_3000x3000.jpg?v=2.4.2",
      artworkAlt: "Your Light Remix cover artwork by Ashan Levi, Noah Graves, and Ava Thorn",
      url: "https://open.spotify.com/track/4nSWyZGpfkBUHh6uCOYsl6",
      openInNewTab: true
    }
  },
  timeline: [
    { from: "0000-01-01", primary: "sweets", primaryLabel: "COMING OCTOBER 2", primaryCta: "Pre-save now →", secondary: "redemption", secondaryLabel: "OUT NOW", secondaryCta: "Listen now →" },
    { from: "2026-10-02", primary: "sweets", primaryLabel: "OUT NOW", primaryCta: "Listen now →", secondary: "redemption", secondaryLabel: "OUT NOW", secondaryCta: "Listen now →" }
  ]
};
