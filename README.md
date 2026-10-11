nvm use        # Node 20 LTS (see .nvmrc; Gatsby 5 needs Node >= 18)
npm ci         # also applies patches/ via patch-package (react-dom NUL-byte fix)

## Data

Doctor data is in `src/data/doctors.csv`; see [docs/DATA.md](docs/DATA.md) for the columns, how to add a doctor, and `scripts/migrate-doctor-csv.js` for converting old-format CSVs.
