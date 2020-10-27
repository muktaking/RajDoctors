import React, { Component } from "react"
import { FaSearch } from "react-icons/fa"
import { Index } from "elasticlunr"
import { Link } from "gatsby"

// Search component
export default class Search extends Component {
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
            placeholder="Search..."
            onChange={this.search}
            onMouseEnter={() => {
              this.setState({ show: true })
            }}
          />
          <div className="search-icon">
            <FaSearch className="fa-search" />
          </div>
        </div>

        {this.state.show && (
          <ul className="">
            <li
              className="bg-warning text-center py-2"
              style={{ fontSize: "24px" }}
            >
              Total matched doctors{" "}
              <span className="text-danger">{this.state.results.length} </span>
            </li>
            {this.state.results.map((doctor, index) => (
              <li key={doctor.uid} className="my-2 ml-2">
                <Link to={"/doctor/" + doctor.uid}>
                  <p>
                    <span className="mr-2 " style={{ fontSize: "1.3rem" }}>
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
