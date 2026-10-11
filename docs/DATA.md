# Data schema

All site data lives in `src/data/` and is read by `gatsby-source-filesystem` +
`gatsby-transformer-csv`. The schema is declared in `gatsby-node.js`
(`createSchemaCustomization`), so GraphQL fields never depend on what the CSV
rows happen to contain.

## `src/data/doctors.csv` → GraphQL type `Doctor`

One row per doctor **per language**: the English and the Bangla version of a
doctor share the same `doctorId` and differ in `lang`.

| Column | Meaning | Example |
| --- | --- | --- |
| `doctorId` | Doctor number, shared by the en and bn rows. Also used to find the photo `src/images/doctor/<doctorId>_*.jpg`. | `1` |
| `lang` | `en` or `bn` | `en` |
| `name` | Display name. **The page URL is made from it** (`/doctor/<slug>`, slug = name lower-cased, spaces and ". " → `-`). Changing a name changes the URL. | `Dr. Azizul Haque` |
| `specialty` | Specialty. Must match a menu entry in `src/utils/meta.data.js` (English rows) to appear on `/speciality/<name>` pages. | `Medicine` |
| `degrees` | Degrees, `*`-separated | `MBBS* MD (Internal Medicine)` |
| `designation` | Job title | `Associate Professor` |
| `institute` | Institution | `Rajshahi Medical College Hospital` |
| `rating` | 0–5, kept as text (lists sort on it as before) | `4.3` |
| `fee` | Consultation fee in Taka (optional) | `500` |
| `badges` | Four 0/1 flags `Topper*Popular*Busy*Trusted` | `0*0*1*1` |
| `isNew` | `true` for doctors added after the original list (rows of the old `doctorListsCopy.csv`), else `false` | `false` |
| `chamber1Name` | Chamber name | `Islami Bank Hospital` |
| `chamber1Address` | Address, `*`-separated | `Islami Bank Hospital* Laxmipur* Rajshahi` |
| `chamber1Phone` | Phone numbers, `*`-separated (one link per number) | `01711-000000* 0721-000000` |
| `chamber1VisitTime` | Free-text visiting time shown on the page | `Open: Saturday-Thursday * 3.00 PM-6.00 PM Close: Friday` |
| `chamber1Hours` | Opening hours ("Opening Hour" line) | `3.00 PM-6.00 PM` |
| `chamber1Days` | Open days (stored, not shown yet) | `Saturday-Thursday` |
| `chamber1OffDays` | Closed days (stored, not shown yet) | `Friday` |
| `chamber2Name` … `chamber2OffDays` | Same seven fields for a second chamber | |
| `protocol` | How to book a serial, `*`-separated. Empty → "Please phone to provided number to book a serial". | |
| `clinicalExpertise` | Areas of expertise, one item per `*` or line break. Empty → the card is hidden. | `Diabetes* Hypertension` |

Conventions:

* `*` stands for a comma (commas inside a cell are allowed too if the cell is
  quoted, but the existing data uses `*`).
* Row order matters: if two rows produce the same URL, the **first** row wins
  and later ones are skipped with a build warning (`Duplicate doctor slug`).
* The current data contains 3 completely blank rows; they produce the empty
  page `/doctor/` (kept so the published page list stays the same; remove them,
  or migrate with `--drop-blank`, if you want that page gone).

### GraphQL fields

Text fields (`name`, `specialty`, `degrees`, `designation`, `institute`, `fee`,
`protocol`) come back **cleaned**: every `*` (with the spaces around it) becomes
`", "`. Derived fields:

* `badges: [String!]!` – earned badges, e.g. `["Busy", "Trusted"]`
* `clinicalExpertise: [String!]!` – list items
* `isNew: Boolean!`
* `chambers: [DoctorChamber!]!` – `{ number, name, address, phone, phones, visitTime, hours, days, offDays }`,
  cleaned, with `phones` split into a list. Chamber 1 is listed when it has any
  data; chamber 2 only when it has a phone number (the rule the site always
  used; `SHOW_CHAMBER2_WITHOUT_PHONE` in `gatsby-node.js` changes it).
* `raw { … }` – every column exactly as written in the CSV.
* `fields.slug` – URL slug.

## `src/data/telemediDoctorLists.csv` → `TelemediDoctorListsCsv`

`id` (also the page URL `/teledoctor/<id>` and photo `src/images/teledoctor/<id>.jpg`),
`name`, `specialty`, `degrees`, `skills` (comma-separated, one badge each),
`designation`, `institute`, `fee`, `consultationTime`, `offDays`, `phone`,
`email`, `whatsapp`, `telegram`, `otherContacts`.

## `src/data/carouselData.csv` → `CarouselDataCsv` (currently not shown)

`slot`, `doctorId`, `name`, `specialty`, `degrees`, `designation`, `institute`,
`phone`, `chamberName`. (`id` was renamed to `slot`: a CSV column called `id`
becomes the Gatsby node id and collided with the telemedicine ids.)

## Adding a doctor

1. Add two rows to `src/data/doctors.csv` (one `en`, one `bn`) with a new
   `doctorId`, `isNew` = `true` or `false`, and the columns above. Use a
   spreadsheet app and save as CSV (UTF-8).
2. Optional photo: `src/images/doctor/<doctorId>_<anything>.jpg`.
3. `npm run develop` and open `/doctor/<slug>/`.

## Converting old-format CSVs (other district branches)

Older branches and `src/data - Copy/<district>/` still use the old columns
(`uid, Name, Degree, Speciality, loc1, locDetail1, contact1, …, ' Badges'`).
Convert them with:

```sh
node scripts/migrate-doctor-csv.js --out src/data/doctors.csv \
  src/data/doctorLists.csv --new src/data/doctorListsCopy.csv
node scripts/migrate-doctor-csv.js --type telemedicine --force \
  --out src/data/telemediDoctorLists.csv src/data/telemediDoctorLists.csv
node scripts/migrate-doctor-csv.js --type carousel --force \
  --out src/data/carouselData.csv src/data/carouselData.csv
```

Then move the old files out of `src/data/` (e.g. to `src/data-legacy/`, which
is git-ignored and not read by Gatsby). Everything under `src/data/` is
sourced, so a leftover old CSV would add an unused GraphQL type.

Old → new column names:

| Old | New |
| --- | --- |
| `uid` | `doctorId` |
| `lang` | `lang` |
| `Name` | `name` |
| `Rating` | `rating` |
| `Degree` | `degrees` |
| `Speciality` | `specialty` |
| `Designation` | `designation` |
| `Institute` | `institute` |
| `loc1` / `loc2` | `chamber1Name` / `chamber2Name` |
| `locDetail1` / `locDetail2` | `chamber1Address` / `chamber2Address` |
| `contact1` / `contact2` | `chamber1Phone` / `chamber2Phone` |
| `visitTime1` / `visitTime2` | `chamber1VisitTime` / `chamber2VisitTime` |
| `OpenTime1` / `OpenTime2` | `chamber1Hours` / `chamber2Hours` |
| `OpenDate1` | `chamber1Days` |
| `CloseDate1` | `chamber1OffDays` |
| `Protocol` | `protocol` |
| `Fee` | `fee` |
| `Badges` / `' Badges'` (leading space) | `badges` |
| `ClinicalExpertise` | `clinicalExpertise` |
| `SpecialityDetails` (stray file only) | `clinicalExpertise` |
| *(file it came from)* | `isNew` |

Unknown columns are reported and dropped; files already in the new format
pass through unchanged. Cell values are never modified. Run
`node scripts/migrate-doctor-csv.js --help` for all options.
