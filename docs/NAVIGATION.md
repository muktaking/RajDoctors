# Navigation

Components live in `src/components/nav/`, styles in `src/styles/_nav.scss`.

- `app-bar.js` – sticky top app bar. Desktop (≥992px): logo, district chip
  (division-grouped menu + "All districts" → `/`), search, Doctors,
  Specialties mega-menu, Telemedicine, Emergency, EN/বাংলা (hidden for
  districts without Bangla data, `hasBangla` in districts.json) and the
  "Register as doctor" menu (doctor + telemedicine registration links from
  `GATSBY_GOOGLE_ADD_DOCTOR` / `GATSBY_ADD_TELEMEDICINE_DOCTOR`).
  Below 1440px Telemedicine/Emergency/language are icon buttons, below 1180px
  all links are.
  Mobile: logo, district chip, search icon (full-screen `search-overlay.js`)
  and "More" (`more-sheet.js`: language, telemedicine, registration, about,
  contact, privacy).
- `bottom-nav.js` – Material 3 navigation bar on phones: Home, Doctors,
  Specialties, Emergency. The doctor page "Call for serial" bar sits above it.
- `announcement.js` – the old ticker as a dismissible banner (sessionStorage).
- `breadcrumbs.js` – trail + `BreadcrumbList` JSON-LD (separate script; page
  schema unchanged). Used on doctor, speciality (index + pages), doctors list,
  emergency and teledoctor pages.
- `popover.js`, `sheet.js`, `a11y.js` – menus/dialogs: Esc closes and returns
  focus, outside click closes, arrow/Home/End keys in menus, focus trap in
  dialogs.
- `nav-data.js` – speciality groups (meta.data.js `menu`, filtered to
  specialities with doctors in the district), language link (same page in
  the other locale).

`src/utils/nav-state.js` keeps the last visited district (`rd.district`) and
the 5 recently viewed doctors (`rd.recentDoctors`) in localStorage. Global
pages (/, teledoctor, about, contact, privacy, 404) show "Choose district" and
link to the remembered district, or to the picker for new visitors.

Search (`components/search/search.js`) also matches speciality synonyms from
`menuWithSynonyms` ("heart" → Cardiology: suggestion chips + widened query) and
shows recently viewed doctors when focused with an empty query.
