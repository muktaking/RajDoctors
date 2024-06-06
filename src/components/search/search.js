import React, { Component } from "react"
import { Link } from "gatsby"
import { FaSearch, FaTimes } from "react-icons/fa"
import { Index } from "elasticlunr"
import { injectIntl } from "gatsby-plugin-intl"

// Search component
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      show: false,
    }
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
              <li key={doctor.uid} className="my-2 ml-2">
                <Link
                  to={
                    doctor.Lang === "en"
                      ? "/doctor/" + doctor.Slug
                      : this.props.intl.locale + "/doctor/" + doctor.Slug
                  }
                >
                  <p>
                    <span className="mr-2 " style={{ fontSize: "1rem" }}>
                      {index + 1 + ". "}
                      {doctor.Name}
                    </span>

                    <span className="">{doctor.Speciality} Specialist</span>
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
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}

export default injectIntl(Search)
