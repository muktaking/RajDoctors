import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import Ad from "../../components/ad"
//importing components
import Doctors from "../../components/doctors/doctors"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardSquare from "../../components/cards/cardSquare"

//uid: { eq: $uid }, lang: { eq: $lang }
//$uid: String!, $lang: String!
export const query = graphql`
  query($uid: String!, $lang: String!) {
    doc: doctorListsCsv(uid: { eq: $uid }, lang: { eq: $lang }) {
      uid
      Degree
      Name
      Rating
      Designation
      Institute
      Speciality
      contact1
      contact2
      loc1
      loc2
      locDetail1
      locDetail2
      visitTime1
      visitTime2
      OpenTime1
      fields {
        slug
      }
      Protocol
      Fee
      Badges
    }
    docCopy: doctorListsCopyCsv(uid: { eq: $uid }, lang: { eq: $lang }) {
      uid
      Degree
      Name
      Rating
      Designation
      Institute
      Speciality
      contact1
      contact2
      loc1
      loc2
      locDetail1
      locDetail2
      visitTime1
      visitTime2
      OpenTime1
      fields {
        slug
      }
      Protocol
      Fee
      Badges
    }
    docs: allDoctorListsCsv(sort: { fields: Rating, order: DESC }) {
      nodes {
        id
        uid
        Name
        Rating
        Degree
        Speciality
        contact1
        loc1
        visitTime1
        OpenTime1
        fields {
          slug
        }
        Protocol
        lang
        Badges
      }
    }

    docsCopy: allDoctorListsCopyCsv(sort: { fields: Rating, order: DESC }) {
      nodes {
        id
        uid
        Name
        Rating
        Degree
        Speciality
        contact1
        loc1
        visitTime1
        OpenTime1
        fields {
          slug
        }
        Protocol
        lang
        Badges
      }
    }

    img: file(relativePath: { eq: "pakhighorAd02.png" }) {
      childImageSharp {
        fluid(maxWidth: 350, maxHeight: 210) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
// img: file(relativePath: { eq: "pakhighorAd02.png" }) {
//   childImageSharp {
//     # Specify the image processing specifications right in the query.
//     # Makes it trivial to update as your page's design changes.
//     fixed(width: 350, height: 210) {
//       ...GatsbyImageSharpFixed
//     }
//   }
// }

const Doctor = ({ intl, pageContext, ...props }) => {
  // Internationalization
  //const intl = useIntl()
  //const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  props.data.doc =  props.data.doc ?  props.data.doc :  props.data.docCopy
  props.data.docs.nodes.push(...props.data.docsCopy.nodes)
  const {
    uid,
    Name,
    Rating,
    Degree,
    Speciality,
    Designation,
    Institute,
    contact1,
    contact2,
    loc1,
    locDetail1,
    locDetail2,
    visitTime1,
    visitTime2,
    OpenTime1,
    fields,
    Protocol,
    Fee,
    Badges
  } = props.data.doc

  const docs = props.data.docs.nodes
    .filter(e => e.Speciality === props.data.doc.Speciality)
    .slice(0, 6)
  const schema = `
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "${Name.replace(/\*/, ",")}",
  "url": "${"https://rajdoctors.com" + `/doctor/` + fields.slug}",
  "image": "${"https://rajdoctors.com" + pageContext.imgSrc}",
  "jobTitle": "${Designation.replace(/\*/, ",")}",
  "worksFor": {
    "@type": "Organization",
    "name": "${Institute.replace(/\*/, ",")}"
  },
  "telephone": "${
    contact1.replace(/\*/, ",") + ", " + contact2.replace(/\*/, ",")
  }"  
}
`
  return (
    <Layout>
      <SEO
        title={`${Name.replace(/\*/, ",")} | ${Designation.replace(
          /\*/,
          ","
        )} ${intl.formatMessage({
          id: "at",
        })} ${Institute.replace(/\*/, ",")}`}
        useDefault={false}
        description={` ${Speciality.replace(/\*/, ",")} ${intl.formatMessage({
          id: "Specialist",
        })}. ${intl.formatMessage({
          id: "chamber.contact-info",
        })}: ${contact1.replace(/\*/g, ",")}, ${
          contact2 ? contact2.replace(/\*/g, ",") : ""
        }, ${intl.formatMessage({
          id: "chamber.location",
        })}: ${locDetail1.replace(/\*/g, ",")} ${intl.formatMessage({
          id: "chamber.time",
        })}: ${visitTime1.replace(/\*/g, ",")} ${intl.formatMessage({
          id: `arcib.${process.env.GATSBY_DISTRICT}`,
        })}`}
        schema={schema}
      />
      <CardSquare data={props.data.doc} />
        <div className="main">
          <div className="med-section">
            <h3 className="text-center">{"You may find helpful"}</h3>
            <div className="divider"></div>
            <div className="med-card">
              <Doctors data={docs} index={true} />
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default injectIntl(Doctor)
