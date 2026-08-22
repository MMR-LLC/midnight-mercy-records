
## v2.5.4 — Clean Guide Funnel Recovery

- Restores the correct branded Redemption Guide page at `/redemption-guide/` after an incorrect homepage file was placed in that folder.
- Preserves the Brevo email gate, reCAPTCHA, hidden PDF download, and Redemption listening link.
- Includes the new `/community-confirmed/` post-confirmation page in the correct root-level location.
- Packages the complete website in a clean deployment-ready folder structure.

## v2.5.3 — Community Confirmation Page

- Added a branded post-confirmation page for Brevo double opt-in subscribers.
- Clearly confirms that the visitor has joined the Midnight Mercy Community.
- Tells subscribers to allow a minute for the Redemption Guide delivery email and to check Promotions or Spam.
- Includes direct actions to listen to Redemption or return to the Midnight Mercy Records website.

## v2.5.2 — Redemption Guide Email Gate

- Replaced the public Redemption Guide download button with the existing Brevo community signup form.
- Unlocks the PDF download only after Brevo accepts the visitor's email submission.
- Keeps reCAPTCHA, the Brevo list connection, error handling, and the existing Midnight Mercy visual style.
- Removed the homepage shortcut that allowed visitors to bypass the email signup.
- Added a clear path for existing subscribers to enter the same email and unlock the guide.

## v2.4.7 — Instagram Mobile Containment

- Added a final mobile containment layer for Instagram and other in-app browsers so the Redemption artwork, title, copy, and Brevo form cannot exceed the viewport.
- Reserved the square Redemption artwork dimensions to prevent layout movement after the guide anchor is activated.
- Advanced the stylesheet cache key so mobile browsers receive the corrected CSS instead of an older cached copy.

## v2.4.6 — Mobile Guide Funnel Fixes

- Changed the homepage “Get the Free Guide” button to land directly at the guide signup area instead of the top of the featured release.
- Reduced oversized mobile typography and spacing so the homepage feels less cramped and zoomed in.
- Prevented the featured release, community copy, and Brevo form from overflowing narrow phone screens.
- Preserved the clean official Redemption HyperFollow URL while documenting the separate DistroKid pre-save configuration issue.

## v2.4.5 — Redemption Guide Artwork Fit

- Corrected the desktop Redemption Guide page so the complete square album cover remains visible without cropping.
- Preserved the existing mobile layout and guide download experience.

## v2.4.4 — Redemption Guide Download Page

- Added a branded, responsive `/redemption-guide/` landing page for the free Redemption Lyric & Scripture Guide.
- Added the complete 38-page PDF at a stable same-domain download address.
- Added direct calls to action for downloading the guide and listening to REDEMPTION.
- Updated the homepage, Music page, and Discover page community calls to action to promote the free release-day guide.

## v2.4.3 — REDEMPTION Pre-save CTA Fix

- Changed the pre-release REDEMPTION Discover button from “Join the Community” to “Pre-save REDEMPTION.”
- Connected the button directly to the official REDEMPTION HyperFollow pre-save page.

## v2.4.2 — Music Page Release Corrections

- Replaced both Music page uses of the Your Light Remix artwork with the approved cover and added cache-busting so the old image is not retained by browsers.
- Published REDEMPTION in the Albums section with its August 21, 2026 release date and official pre-save link.
- Restored the two-album responsive grid for Dust To Grace and REDEMPTION.

## v2.4.1 — Correct Your Light Remix Artwork

- Replaced the outdated Your Light Remix cover across the Discover and Music pages.
- Standardized the supplied artwork at 3000 × 3000 for consistent release display.

## v2.3 — Brevo form runtime fix
- Restored Brevo's required `sib-form-container` and `sib-container` DOM wrappers so the official Brevo JavaScript can complete submissions instead of hanging on the loading spinner.
- Kept the Midnight Mercy custom styling, CAPTCHA, double opt-in, and hidden anti-bot field intact.
## v2.2 — Brevo Signup Fix

- Restored Brevo's required form DOM structure so its validation/submission script can bind correctly.
- Fixed the Join the Community submit button.
- Fixed success/error notices so they stay hidden until Brevo triggers them.
- Fixed the honeypot field so it remains hidden.
- Added Brevo's official form stylesheet before site styles and retained Midnight Mercy visual overrides.
- Kept reCAPTCHA and double opt-in intact.
- Updated CSP entries for Brevo and Google reCAPTCHA on hosts that honor `_headers`.

## v2.1 — Brevo Community Signup
- Replaced Kit website signup with Brevo.
- Preserved Midnight Mercy styling.
- Added Brevo double-opt-in success/error handling and reCAPTCHA.
- Removed Kit-specific signup JavaScript.

## v2.4 — Automated Discover Release Timeline

- Added primary and secondary release cards for REDEMPTION and Your Light Remix.
- Added automatic America/New_York campaign transitions for August 21, 24, and 28, 2026.
- Added the LISTEN EVERYWHERE divider and simplified the Midnight Mercy Records subtitle to “Official Website.”
- Refined Discover spacing and typography for mobile screens.

# v2.0 — REDEMPTION Discover Campaign

- Rebuilt the `/discover/` featured campaign around **REDEMPTION**.
- Added “COMING AUGUST 21,” “The new album from Ashan Levi,” and the full August 21, 2026 release date.
- Expanded `discover-config.js` so campaign label, title, subtitle, date, artwork, destination, CTA, and visibility can be updated centrally.
- Improved mobile spacing, card proportions, CTA sizing, and touch targets.
- Polished the Midnight Mercy Records website card.
- Updated Discover page title, description, Open Graph, and Twitter/X metadata for REDEMPTION.
- Replaced the homepage Your Light Remix campaign with the REDEMPTION featured release and removed its pre-save links.
- Added the official REDEMPTION DistroKid pre-save link to the homepage and Discover campaign.
- Changed the Discover artwork layout so the complete square album cover remains visible on desktop and mobile.
- Removed the leftover `discover_index.tmp` file.

# v1.3.1 — Discover Page Refinements

- Removed duplicate large social-profile cards while retaining the compact social icons.
- Replaced the Spotify artwork thumbnail with a recognizable Spotify logo.
- Combined streaming and website destinations into one link section, with Midnight Mercy Records placed last.
- Updated the Community button to target the email signup form directly, with improved mobile scroll positioning.
- Restyled AI Transparency & Disclaimer as a full, visible card matching the other links.

# Changelog
## v1.2 — Mobile polish and storefront pause
- Hid the homepage merch section without deleting its markup.
- Removed Merch from shared navigation.
- Added mobile auto-scroll to selected song recommendations.
- Improved Spotify player centering, width, and spacing.
- Added responsive spacing refinements.
- Added and linked favicon assets across all pages.
- Added null guards for shared lightbox JavaScript.


## v1.0.8 — Spotify Album Player
- Added a polished, responsive Spotify album player for *Dust To Grace* to the Music page.
- Added a direct Spotify album link as a fallback and accessibility option.
- Styled the listening panel to match Midnight Mercy Records' dark, premium visual identity.

# Website v1.0.7 — Honest merch coming-soon state

- Removed the non-functional merch watchlist confirmation.
- Removed the JavaScript that claimed a visitor was on a list without collecting an email address.
- Replaced each watchlist control with an honest “Available soon” message.
- Added a working “Join the Community” link to the existing Kit signup section for real launch updates.

# Changelog

## v1.0.6 — Premium Merch Watchlist
- Replaced the placeholder “Interest saved” copy with a branded merch watchlist confirmation.
- Added a short button loading state followed by “✓ You’re on the list.”
- Added an animated confirmation card for early access, restock alerts, and limited drops.
- Applied the experience consistently to both upcoming hoodie products.

## v1.0.4 — 2026-07-28
- Removed Redemption from the public Music page until its release campaign is ready.
- Preserved the Redemption artwork and draft album card in the project files.
- Updated the live Albums section to focus on Dust To Grace.


## v1.0.3
- Added the Your Light (Remix) Featured Release to the Music page
- Added the official Your Light (Remix) cover artwork and Spotify pre-save CTA
- Replaced the Redemption placeholder with the current album artwork
- Added a Singles & Collaborations section
- Added a Midnight Mercy Community CTA to the Music page

# Website v1.0.2

- Added homepage Featured Release section for “Your Light (Remix)”
- Added August 28 pre-save call to action using the DistroKid HyperFollow link
- Added updated single artwork featuring Ashan Levi, Noah Graves, and Ava Thorn
- Embedded the Midnight Mercy Community Kit signup form
- Updated homepage hero calls to action to prioritize pre-saves and owned email growth
- Updated footer wording from Newsletter to Join the Community


## Website v1.0.1 — Dust To Grace streaming update

- Replaced all 13 “Coming Soon” track controls with direct Spotify links.
- Added the standardized label “🎧 Listen on Spotify →”.
- Added branded hover, keyboard-focus, and mobile tap states.
- Corrected the displayed title to “Hold Me Now” while preserving its supplied Spotify destination.

## v1.0.5 — Mobile navigation and Community form polish
- Rebuilt the mobile navigation as an opaque full-screen overlay so page content no longer overlaps the menu.
- Added Escape-key closing, scroll locking, and resize cleanup for the mobile menu.
- Restyled the embedded Kit form to match Midnight Mercy Records typography, gold accents, spacing, and mobile layout.
- Changed the Kit email placeholder to “Enter your email address.”
- Changed the signup button label to “❤️ Join the Community.”
- Added a Kit Creator Network recommendations removal checklist for the account-level setting.

## v1.2.1
- Corrected the Music page closing-banner alignment.
- Centered the “Not sure where to begin?” panel on the same 1220px site grid as the Community panel.
- Added consistent mobile gutters and full-width mobile CTA behavior for the Find a Song panel.

## v1.2.2 — About Page Alignment Fix
- Centered the About page “Join the Midnight Mercy community” panel on the same site grid as the values section.
- Removed the viewport-based horizontal offset from that panel.
- Added balanced mobile gutters and a full-width mobile call-to-action button.
- Includes the Music page alignment correction from v1.2.1.

## v1.3.0 — Discover Artist Hub
- Added a standalone mobile-first artist link hub at `/discover/`.
- Added featured Your Light Remix pre-save card.
- Added Spotify, Apple Music, YouTube, Amazon Music, Pandora, website, and social links.
- Added Midnight Mercy Community call-to-action and AI transparency disclosure.
- Kept the page out of all site navigation and added `noindex, nofollow, noarchive` metadata.

## v1.4 — Discover page system and polish

- Removed the visible `@ashanlevimusic` line from `/discover`.
- Added a subtle page-load fade and lift animation with reduced-motion support.
- Added desktop hover lift, border glow, and mobile press feedback.
- Added a smart featured-release renderer controlled by `discover/discover-config.js`.
- Added full Open Graph, Twitter Card, canonical, and indexable metadata.
- Added `assets/og/discover-preview.jpg` for link previews.
- Added permanent QR code `assets/qr/discover-qr.png` pointing to `https://midnightmercyrecords.com/discover/`.
- Added a strict page-level Content Security Policy for `/discover`.
- Added `_headers` as a deploy-ready security-header policy for hosts that support it. GitHub Pages does not apply custom response headers from this file.

## v1.5.2 — REDEMPTION Coming Soon

- Removed the Your Light Remix promotion from the Discover page.
- Replaced it with a REDEMPTION coming-soon featured card.
- Added the message “The next chapter is almost here.”
- Changed the featured-card call to action to “Join the Midnight Mercy Community.”
- Linked the entire featured card to the Community signup section.
- Added a REDEMPTION-focused 1200 × 630 social preview image.
- Updated Open Graph and Twitter/X metadata to reflect the upcoming album.
## v2.5.1 — Redemption Artwork Containment

- Locked the homepage REDEMPTION artwork to a complete square on desktop so it cannot stretch to the height of the guide/form column.
- Changed the artwork fit from cropping to containment and aligned the cover with the top of the release copy.
- Advanced the shared stylesheet cache key so the corrected artwork layout loads immediately.

## v2.5.0 — REDEMPTION Release Day

- Replaced REDEMPTION pre-save destinations with the official Spotify album link across the homepage, Music page, Discover page, and guide page.
- Changed the remaining August 21 coming-soon language to release-day “Out Now” messaging.
- Made REDEMPTION the homepage’s latest album and added a focused four-song introduction.
- Replaced the Dust To Grace Music-page embed with the complete 12-song REDEMPTION Spotify player.
- Changed guide messaging from future delivery to immediate availability and added direct download access for existing community members.
- Reduced the oversized desktop REDEMPTION heading and strengthened containment to prevent the release panel from clipping.
- Updated Discover metadata and cache keys for the live release.
