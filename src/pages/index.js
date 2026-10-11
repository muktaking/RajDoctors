import { graphql } from "gatsby"
import { Link, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Badge, Card, Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from "../components/share"
import { DISTRICTS, DIVISIONS, districtName } from "../utils/district"

// Root page: pick a district (grouped by division). Each enabled district of
// src/data/districts.json links to /<district>/; the rest are "coming soon".
export const query = graphql`
  query {
    doctors: allDoctor {
      group(field: { district: SELECT }) {
        fieldValue
        group(field: { lang: SELECT }) {
          fieldValue
          totalCount
        }
      }
    }
  }
`

const DistrictPicker = ({ data }) => {
  const intl = useIntl()
  // doctors per district = rows of its biggest language (en and bn rows are
  // the same doctors)
  const counts = Object.fromEntries(
    data.doctors.group.map(g => [g.fieldValue, Math.max(...g.group.map(l => l.totalCount))])
  )
  const name = d => (intl.locale === "bn" ? d.bn : d.en)
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "district.pickerTitle" })}
        description={intl.formatMessage({ id: "district.pickerLead" })}
      />
      <Container fluid className="p-0">
        <div className="hero">
          <div className="my-auto">
            <div className="text-center">
              <h1 className="text-uppercase">
                {intl.formatMessage({ id: "siteMetaData.title" })}
              </h1>
              <h2 className="h4">{intl.formatMessage({ id: "district.pickerTitle" })}</h2>
              <p className="text-muted lead px-3 mb-2">
                {intl.formatMessage({ id: "district.pickerLead" })}
              </p>
              <Share />
            </div>
          </div>
        </div>
        <div className="main district-picker px-3">
          <Row>
            {DIVISIONS.map(division => {
              const list = DISTRICTS.filter(d => d.division === division.slug).sort(
                (a, b) => Number(b.enabled) - Number(a.enabled) || a.en.localeCompare(b.en)
              )
              return (
                <Col key={division.slug} xs={12} md={6} lg={4} className="mb-3">
                  <Card className="h-100">
                    <Card.Header className="font-weight-bold">
                      {intl.formatMessage({ id: "district.division" }, { division: name(division) })}
                    </Card.Header>
                    <Card.Body className="d-flex flex-wrap align-items-start align-content-start">
                      {list.map(d =>
                        d.enabled ? (
                          <Link
                            key={d.slug}
                            to={`/${d.slug}/`}
                            className="md-district md-district--on"
                          >
                            {districtName(intl, d)}{" "}
                            <Badge variant="warning">
                              {intl.formatMessage(
                                { id: "district.doctorsCount" },
                                { count: counts[d.slug] || 0 }
                              )}
                            </Badge>
                          </Link>
                        ) : (
                          <span
                            key={d.slug}
                            className="md-district md-district--off"
                            title={intl.formatMessage({ id: "district.comingSoon" })}
                            aria-disabled="true"
                          >
                            {districtName(intl, d)}
                          </span>
                        )
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </div>
      </Container>
    </Layout>
  )
}

export default DistrictPicker
