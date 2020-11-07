import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Speciality from "./speciality"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const query = graphql`
  query($Speciality: String!) {
    allDoctorListsCsv(filter: { Speciality: { eq: $Speciality } }) {
      nodes {
        Degree
        Name
        contact1
        loc1
        visitTime1
        id
        uid

        fields {
          slug
        }
      }
    }
  }
`

const SpecialityWrapper = ({ location, data }) => {
  const top3 = data.allDoctorListsCsv.nodes
    .slice(0, 3)
    .reduce(
      (accumulator, currentValue) =>
        accumulator +
        `${currentValue.Name}, Contact: ${currentValue.contact1.replace(
          /\*/g,
          ","
        )}; `,
      ""
    )

  return (
    <Layout>
      <SEO
        title={`${capitalizeFirstLetter(
          location.pathname.split("/").reverse()[0].replace(/%20/g, " ")
        )}`}
        description={`List Of Doctors in
              ${capitalizeFirstLetter(
                location.pathname.split("/").reverse()[0].replace(/%20/g, " ")
              )}
              Speciality. Top Doctors: ${top3} at rajshahi city in bangladesh`}
      />
      <Speciality location={location} data={data} />
    </Layout>
  )
}

export default React.memo(SpecialityWrapper)
