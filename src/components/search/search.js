import React, { Component } from "react"
import { FaTimes } from "react-icons/fa"
import { MdHistory, MdSearch } from "react-icons/md"
import { Index } from "elasticlunr"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { menuWithSynonyms } from "../../utils/meta.data"
import { readRecentDoctors } from "../../utils/nav-state"

// [specialty, [lower-case search terms]] from meta.data.js synonyms,
// e.g. ["Cardiology", ["cardiology", "heart"]]
const SPECIALTY_TERMS = menuWithSynonyms.map(([name, syn]) => [
  name,
  [name, ...(syn ? syn.split(/[,&]/) : [])].map(s => s.trim().toLowerCase()).filter(Boolean),
])

/** Specialities whose name or synonym matches the query ("heart" -> Cardiology). */
export function matchSpecialties(query) {
  const q = query.trim().toLowerCase()
  if (q.length < 3) return []
  const words = q.split(/\s+/).filter(w => w.length >= 3)
  return SPECIALTY_TERMS.filter(([, terms]) =>
    terms.some(t => t.startsWith(q) || t.split(/\s+/).some(tw => words.some(w => tw.startsWith(w))))
  )
    .map(([name]) => name)
    .slice(0, 4)
}

// Search component
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      specialties: [],
      recent: [],
      show: false,
      // per-district by default; global pages (no district) search everywhere
      all: !props.district,
    }
    this.indexes = {}
    this.wrapper = React.createRef()
    this.input = React.createRef()
  }

  componentDidMount() {
    if (this.props.autoFocus && this.input.current) {
      this.input.current.focus()
      this.open()
    }
  }

  // Districts to search: the page's district, or every enabled district.
  scope = () =>
    this.state.all || !this.props.district
      ? this.props.districts.map(d => d.slug)
      : [this.props.district.slug]

  ensureIndexes = () =>
    Promise.all(
      this.scope().map(slug =>
        this.indexes[slug]
          ? this.indexes[slug]
          : this.props.loadIndex(slug).then(json => (this.indexes[slug] = Index.load(json)))
      )
    )

  districtLabel = slug => {
    const d = this.props.districts.find(x => x.slug === slug)
    return d ? (this.props.intl.locale === "bn" ? d.bn : d.en) : slug
  }

  open = () => {
    this.setState({ show: true, recent: readRecentDoctors() })
    this.ensureIndexes().catch(() => {})
  }

  close = () => this.setState({ show: false })

  t = id => this.props.intl.formatMessage({ id })

  scopeToggle() {
    if (!this.props.district) return null
    return (
      <li className="search-panel__scope">
        <label className="search-scope search-all">
          <input
            type="checkbox"
            checked={this.state.all}
            onChange={e => this.setState({ all: e.target.checked }, () => this.runSearch(this.state.query))}
          />
          {this.t("district.searchAll")}
        </label>
      </li>
    )
  }

  renderPanel() {
    const { show, query, results, specialties, recent } = this.state
    if (!show) return null
    const base = this.props.linkDistrict ? `/${this.props.linkDistrict.slug}` : null
    if (!query && recent.length > 0) {
      return (
        <ul className="search-panel">
          {this.scopeToggle()}
          <li className="search-panel__head">
            <MdHistory aria-hidden="true" /> {this.t("nav.recent")}
          </li>
          {recent.map(d => (
            <li key={d.path} className="search-panel__item">
              <Link to={d.path}>
                <span className="search-panel__name">{d.name}</span>
                <span className="search-panel__meta">{d.specialty}</span>
              </Link>
            </li>
          ))}
        </ul>
      )
    }
    if (!query || (results.length === 0 && specialties.length === 0)) {
      const toggle = this.scopeToggle()
      return toggle && <ul className="search-panel">{toggle}</ul>
    }
    return (
      <ul className="search-panel">
        {this.scopeToggle()}
        {base && specialties.length > 0 && (
          <li className="search-panel__specs">
            <span className="search-panel__label">{this.t("nav.specialties")}:</span>
            {specialties.map(s => (
              <Link key={s} to={`${base}/speciality/${s.toLowerCase()}/`} className="dp-chip">
                {this.t(s)}
              </Link>
            ))}
          </li>
        )}
        {results.length > 0 && (
          <li className="search-panel__head d-flex justify-content-between">
            <span className="">
              Total matched doctors ** {results.length} **
            </span>
            <button
              type="button"
              className="search-panel__close"
              aria-label={this.t("nav.dismiss")}
              onClick={() => {
                this.setState({ show: false, query: "", results: [], specialties: [] })
              }}
            >
              <FaTimes />
            </button>
          </li>
        )}
        {results.map((doctor, index) => (
          <li key={doctor.id || index} className="search-panel__item">
            <Link to={`/${doctor.district}/doctor/${doctor.slug}/`}>
              <span className="search-panel__name">
                {index + 1 + ". "}
                {doctor.name}
              </span>
              <span className="search-panel__meta">{doctor.specialty} Specialist</span>
              {this.scope().length > 1 && (
                <span className="search-panel__district">{this.districtLabel(doctor.district)}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div
        ref={this.wrapper}
        className={`search-inner-wrapper${this.props.overlay ? " search-inner-wrapper--overlay" : ""}`}
        onMouseLeave={() => {
          if (!this.props.overlay && document.activeElement !== this.input.current) this.close()
        }}
        onBlur={e => {
          if (!this.props.overlay && !this.wrapper.current.contains(e.relatedTarget)) this.close()
        }}
        onKeyDown={e => {
          if (e.key === "Escape" && this.state.show && !this.props.overlay) {
            e.stopPropagation()
            e.preventDefault() // keep the query (type=search would clear it)
            this.close()
          }
        }}
      >
        <div className="search" role="search">
          <MdSearch className="search-icon" aria-hidden="true" />
          <input
            ref={this.input}
            type="search"
            className="search-input"
            value={this.state.query}
            placeholder={this.t("search")}
            aria-label={this.t("search")}
            autoComplete="off"
            data-autofocus={this.props.autoFocus ? "" : undefined}
            onChange={this.search}
            onFocus={this.open}
            onClick={() => !this.state.show && this.open()}
          />
        </div>
        {this.renderPanel()}
      </div>
    )
  }

  search = evt => this.runSearch(evt.target.value)

  runSearch = query => {
    const specialties = matchSpecialties(query)
    this.setState({ query, specialties, show: true })
    if (!query) return this.setState({ results: [], recent: readRecentDoctors() })
    // synonym hits widen the query: "heart" also searches "Cardiology"
    const expanded = [query, ...specialties].join(" ")
    this.ensureIndexes()
      .then(() => {
        if (this.state.query !== query) return // a newer query is running
        const results = this.scope().flatMap(slug => {
          const index = this.indexes[slug]
          return index
            .search(expanded, {})
            .map(({ ref, score }) => ({ score, doc: index.documentStore.getDoc(ref) }))
        })
        results.sort((a, b) => b.score - a.score)
        this.setState({ results: results.map(r => r.doc) })
      })
      .catch(() => this.setState({ results: [] }))
  }
}

export default injectIntl(Search)
