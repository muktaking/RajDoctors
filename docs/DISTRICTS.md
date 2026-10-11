# Districts under one site

All districts are served by one build of this repository under URL paths
(instead of one git branch + sub-domain per district).

## URL scheme

| Page | English | Bangla |
| --- | --- | --- |
| District picker (grouped by division) | `/` | `/bn/` |
| District home | `/<district>/` | `/bn/<district>/` |
| All doctors (6 per page) | `/<district>/doctors/`, `/<district>/doctors/<n>/` | `/bn/<district>/doctors/…` |
| Doctor | `/<district>/doctor/<slug>` | `/bn/<district>/doctor/<slug>` |
| Speciality index | `/<district>/speciality/` | `/bn/<district>/speciality/` |
| Speciality | `/<district>/speciality/<name>` (e.g. `dental surgery`) | `/bn/<district>/speciality/<name>` |
| Emergency numbers | `/<district>/emergency/` | `/bn/<district>/emergency/` |
| Global: telemedicine, about, contact, privacy, 404 | unchanged (`/teledoctor`, `/teledoctor/<id>`, `/about-us/`, …) | `/bn/…` |

`gatsby-plugin-intl` also emits every page under `/en/…` (as before).
Doctor slugs per district (`slugStyle` in `districts.json`):

* `name` (Rajshahi): `dr-azizul-haque` – the old rajdoctors.com URLs. Two rows
  with the same name in one district share a slug; the first row (CSV order)
  gets the page, later ones are skipped with a build warning.
* `name_id` (Dhaka, Sylhet and every other old sub-domain):
  `dr-shayda-ali_emrlDu` – exactly the paths the sub-domains used, always
  unique.

## Files

* `src/data/districts.json` – all 64 districts / 8 divisions: `slug`, `en`,
  `bn`, `division`, `enabled`, and for districts that had a site:
  `legacyHost`, `slugStyle`, `hasBangla` (shows the language switch),
  `gitBranch`; `legacyPaths: true` marks the district that used to be the root
  of rajdoctors.com (Rajshahi). `defaultDistrict` is used for the sidebar /
  footer links on global pages. Slugs keep the old sub-domain names
  (`chittagong`, `comilla`, `barisal`, `bogra`).
* `src/data/doctors/<district>.csv` – doctors of one district (`district`
  column = file name). Schema: [DATA.md](DATA.md).
* `src/images/doctor/<district>/<doctorId>_<anything>.jpg` – photos
  (`src/images/doctor/default.png` when none).
* `src/data/emergency/<district>.json` – emergency numbers; districts without
  a file use `src/data/emergency/_national.json` (999 only).
* Telemedicine (`src/data/telemediDoctorLists.csv`) stays global.

Code: `gatsby-node.js` creates the per-district pages (context `district`) and
writes one search index per district to `public/search/<district>.json`;
`src/utils/district.js` has `useDistrict()` (via `wrapPageElement` in
`gatsby-browser.js`/`gatsby-ssr.js`) and `districtMessage()` for titles
(`adl.<District>`, `siteMetaData.tagLine.<District>`, `arcib.<District>`,
`seo.doctors.des.<District>` when present in `src/intl/*.json`, otherwise the
`district.*` templates with the district name). The top bar has a district
switcher; search looks in the current district, with a "Search all
districts" checkbox (global pages search everything).

## Adding a district

1. Get its data, usually from its old git branch (`git show <branch>:"src/data - Copy/…"`)
   or its `src/data` folder, and convert it:

   ```sh
   mkdir -p src/data-legacy/khulna   # copy the old doctorLists*.csv there
   node scripts/migrate-doctor-csv.js --repair --district khulna \
     --repair-log /tmp/khulna-repair.log \
     --out src/data/doctors/khulna.csv \
     src/data-legacy/khulna/doctorLists.csv --new src/data-legacy/khulna/doctorListsCopy.csv
   ```

   Check that the converted rows match the published site (the old branch's
   `public/doctor/` folder names are `<slug>_<uid>`), and read the repair log.
2. Photos: copy the doctors' photos from the branch, e.g.
   `git archive khulna src/images/doctor | tar -x -C /tmp/k` and move
   `<uid>_*` files into `src/images/doctor/khulna/` (only the uids in the CSV).
3. In `src/data/districts.json` set `"enabled": true` (and check
   `legacyHost`, `slugStyle: "name_id"`, `hasBangla`).
4. Optional: `src/data/emergency/khulna.json`; `src/intl/{en,bn}.json`
   entries such as `adl.Khulna` if the default wording is not wanted.
5. `node scripts/generate-htaccess.js` (adds the sub-domain redirect), then
   `npm run build`.

## Redirects (`static/.htaccess`, generated)

`node scripts/generate-htaccess.js` writes `static/.htaccess`; Gatsby copies it
to `public/.htaccess`. Rules (all 301):

* Old Rajshahi URLs on rajdoctors.com: `/(bn/|en/)?(doctor|doctors|speciality|emergency)…`
  → `/$1rajshahi/…` (e.g. `/doctor/dr-azizul-haque/` → `/rajshahi/doctor/dr-azizul-haque/`,
  `/bn/speciality/medicine` → `/bn/rajshahi/speciality/medicine`). `/` is now
  the picker, so it is not redirected.
* Each enabled district with a `legacyHost` (dhaka.rajdoctors.com,
  sylhet.rajdoctors.com): `/` → `https://rajdoctors.com/dhaka/`, the
  per-district sections → `https://rajdoctors.com/dhaka/…` (same slug), any
  other path (teledoctor, about-us, assets) → same path on rajdoctors.com.
* `ErrorDocument 404 /404.html`.

Gatsby `createRedirect` is not used (it would only redirect client-side
navigation, and the dev server serves the new paths directly).

## Deployment / DNS notes

* `.cpanel.yml` now copies `public/.` instead of `public/*`, otherwise the
  dotfile `.htaccess` is not deployed. If the server already has a
  `.htaccess` in the document root, merge it.
* The sub-domain rules only fire if requests for dhaka.rajdoctors.com /
  sylhet.rajdoctors.com reach this `.htaccess`: either point those
  sub-domains' document root (cPanel → Domains) to the rajdoctors.com folder,
  or copy the same `public/.htaccess` into their old folders
  (`/home/monergho/dhaka.rajdoctors.com/` …) and remove the old site files
  there. Keep the DNS records and SSL certificates of the sub-domains so old
  links and search results keep working.
* After deploying, submit `https://rajdoctors.com/sitemap.xml` again in Google
  Search Console; the old sub-domain properties can use the change-of-address
  tool.
* The site is bigger now (all districts): build time and `public/` size grow
  with every district (photos are processed by sharp).
