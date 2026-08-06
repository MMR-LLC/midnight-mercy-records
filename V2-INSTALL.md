# Midnight Mercy Records v2.0 — Install Instructions

## Upload through GitHub

1. Open the `midnight-mercy-records` repository on GitHub.
2. Choose **Add file → Upload files**.
3. Drag the contents of the v2.0 update package into the repository, keeping the included folder structure.
4. Confirm that GitHub shows the four updated files inside `discover/`, plus `CHANGELOG.md` and this guide.
5. Delete `discover_index.tmp` from the repository if it still appears online.
6. Commit the upload to the `main` branch.
7. Allow GitHub Pages a few minutes to deploy, then open `https://midnightmercyrecords.com/discover/` in a private browser window.

## Verify after deployment

- The featured card says **COMING AUGUST 21** and **REDEMPTION**.
- The card says **The new album from Ashan Levi**.
- The release date is **August 21, 2026**.
- **Join the Community →** opens the community signup section.
- Streaming links and social icons still open correctly.
- The page fits cleanly on a phone without the CTA crowding the card.

## Future campaign updates

Edit only `discover/discover-config.js` to change the featured release. Set `status` to `hidden` to remove the featured card without deleting its HTML.
