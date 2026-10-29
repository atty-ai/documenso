# Atty AI fork of Documenso

This repository is the source code of the e-signature service at **https://sign.atty.ai**, operated by Jonie.ai, LLC d/b/a Atty AI. It is Documenso, licensed under the AGPL-3.0 (see `LICENSE`), with a small set of branding changes. We publish it to meet the AGPL source obligation.

- Upstream: https://github.com/documenso/documenso
- Base: tag `v2.21.1` (commit `8707e33`)
- Branch: `atty/v2.21.1`
- Image: `ghcr.io/atty-ai/documenso:atty-v2.21.1`, built by `.github/workflows/atty-image.yml`

## Changes from upstream

| Area | Change |
|---|---|
| Signing pages | Tab title "Sign Document - Atty AI" (`routes/_recipient+/_layout.tsx`) |
| Signing pages | The "Check out Documenso" line on cancelled and rejected documents is removed (`sign.$token+/_index.tsx`) |
| Completed page | The Share button is removed (`sign.$token+/complete.tsx`) |
| Signature disclosure | "Documenso" is replaced by "Atty AI" (`articles.signature-disclosure.tsx`) |
| Share links | Meta text says Atty AI; the redirect goes to https://atty.ai (`share.$slug.tsx`) |
| All pages | Titles, description and social meta say Atty AI; `robots` is `noindex, nofollow`, so search engines do not list sign.atty.ai (`utils/meta.ts`) |
| Embedded signing | The "Powered by" badge links to https://atty.ai (`document-signing-page-view-v2.tsx`) |
| Small items | The embed completed card falls back to the name "Atty AI"; profile and mobile logo alt text is "Atty AI" |
| Logos | `BrandingLogo` and `BrandingLogoIcon` draw the Atty AI wordmark and icon; `logo.png` files are the Atty AI wordmark |
| Icons | Favicons, app icons, `site.webmanifest` and `opengraph-image.jpg` are Atty AI |
| Team screens | Mobile menu logo and copyright say Atty AI |
| Build | `.github/workflows/atty-image.yml` builds and publishes the Docker image |

The tab title and the two changed disclosure sentences have no translations in other languages, so those languages show them in English.

Staff-only help text (API, webhooks, licence pages) still names Documenso, because it describes the software correctly.

## Upgrade to a new Documenso release

1. Fetch the new tag: `git fetch upstream tag vX.Y.Z --no-tags`.
2. Create the branch `atty/vX.Y.Z` from the tag.
3. Cherry-pick the commits of the previous `atty/` branch. Fix any conflict in the files of the table above.
4. Push the branch. The workflow publishes `ghcr.io/atty-ai/documenso:atty-vX.Y.Z`.
5. In Railway (project **atty-esign**, service **documenso**), change the image tag, then test a signing.

Do not push tags to this repository: the upstream `deploy.yml` runs on every tag.
