import React, { Component } from "react"
import { FaSearch, FaTimes } from "react-icons/fa"
import { Index } from "elasticlunr"
import { injectIntl, Link } from "gatsby-plugin-intl"

// Search component
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      show: false,
      // per-district by default; global pages (no district) search everywhere
      all: !props.district,
    }
    this.indexes = {}
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

  render() {
    return (
      <div
        className="search-inner-wrapper d-flex justify-content-center px-5"
        onMouseLeave={() => {
          this.setState({ show: false })
        }}
      >
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={this.state.query}
            placeholder={this.props.intl.formatMessage({ id: "search" })}
            onChange={this.search}
            onFocus={() => {
              this.setState({ show: true })
              this.ensureIndexes().catch(() => {})
            }}
            onMouseEnter={() => {
              this.setState({ show: true })
            }}
            // onMouseLeave={() => {
            //   this.setState({ show: false })
            // }}
          />
          <div className="search-icon">
            <FaSearch className="fa-search" />
          </div>
        </div>
        {this.props.district && (
          <label
            className="search-scope text-white small mb-0 ml-2 d-flex align-items-center"
            title={this.props.intl.formatMessage({ id: "district.searchAll" })}
            style={{ whiteSpace: "nowrap" }}
          >
            <input
              type="checkbox"
              className="mr-1"
              checked={this.state.all}
              onChange={e =>
                this.setState({ all: e.target.checked }, () =>
                  this.runSearch(this.state.query)
                )
              }
            />
            {this.props.intl.formatMessage({ id: "district.searchAll" })}
          </label>
        )}

        {this.state.show && this.state.results.length > 0 && (
          <ul className="">
            <li
              className="bg-warning  p-2 d-flex justify-content-between"
              style={{ fontSize: "18px" }}
            >
              <span className="">
                Total matched doctors ** {this.state.results.length} **
              </span>
              <span
                className="mr-1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.setState({ show: false, query: "", results: [] })
                }}
              >
                <FaTimes />
              </span>
            </li>
            {this.state.results.map((doctor, index) => (
              <li key={doctor.id || index} className="my-2 ml-2">
                <Link to={`/${doctor.district}/doctor/${doctor.slug}/`}>
                  <p>
                    <span className="mr-2 " style={{ fontSize: "1rem" }}>
                      {index + 1 + ". "}
                      {doctor.name}
                    </span>

                    <span className="">{doctor.specialty} Specialist</span>
                    {this.scope().length > 1 && (
                      <span className="ml-2 badge badge-secondary">
                        {this.districtLabel(doctor.district)}
                      </span>
                    )}
                  </p>
                </Link>
                {/* {": " + page.tags.join(`,`)} */}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
  search = evt => this.runSearch(evt.target.value)

  runSearch = query => {
    this.setState({ query })
    if (!query) return this.setState({ results: [] })
    this.ensureIndexes()
      .then(() => {
        if (this.state.query !== query) return // a newer query is running
        const results = this.scope().flatMap(slug => {
          const index = this.indexes[slug]
          return index
            .search(query, {})
            .map(({ ref, score }) => ({ score, doc: index.documentStore.getDoc(ref) }))
        })
        results.sort((a, b) => b.score - a.score)
        this.setState({ results: results.map(r => r.doc) })
      })
      .catch(() => this.setState({ results: [] }))
  }
}

export default injectIntl(Search)
