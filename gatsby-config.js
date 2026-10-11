const _ = require("lodash")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  // Gatsby 5 defaults to "always" (adds trailing slashes). "ignore" keeps the
  // page paths exactly as created, matching the Gatsby 2 output.
  trailingSlash: "ignore",
  siteMetadata: {
    title: `Online Hub of Doctors List in ${process.env.GATSBY_DISTRICT} city Bangladesh`,
    description: `RajDoctors is an online platform to ease the pain of finding doctors. Doctors are enlisted according to their speciality, degree. Get details location and contact info. Only for doctors at ${process.env.GATSBY_DISTRICT} city`,
    url: `https://rajdoctors.com`,
    siteUrl: `https://rajdoctors.com`,
    apiUrl: "https://api.rajdoctors.com", // It is the backend url for contact, flag info
    author: `@yas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        // src/data/doctors.csv -> `Doctor` nodes (schema in gatsby-node.js);
        // other files keep the default "<FileName>Csv" type name.
        typeName: ({ node }) =>
          node.name === "doctors"
            ? "Doctor"
            : _.upperFirst(_.camelCase(`${node.name} Csv`)),
      },
    },
    {
      resolve: "@gatsby-contrib/gatsby-plugin-elasticlunr-search",
      options: {
        // Index every doctor row (the main list and the isNew rows).
        fields: ["name", "specialty", "slug", "lang"],
        resolvers: {
          Doctor: {
            name: node => node.name,
            specialty: node => node.specialty,
            lang: node => node.lang,
            slug: node => node.fields.slug,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // gatsby-plugin-intl v5 also emits /en/404.html and /bn/404.html;
        // keep them out so the sitemap matches the Gatsby 2 one.
        excludes: [`/en/404.html`, `/bn/404.html`],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // your google analytics tracking id
        trackingIds: [`G-MR1BSKXT3V`],
        gtagConfig: {
          // enable ip anonymization
          anonymize_ip: true,
        },
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "RajDoctors",
        short_name: "RajDoctors",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-offline",

    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // Directory with the strings JSON
        path: `${__dirname}/src/intl`,
        // Supported languages
        languages: [`en`, `bn`],
        // Default site language
        defaultLanguage: `en`,
        // Redirects to `/pt` in the route `/`
        redirect: false,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://rajdoctors.com",
        sitemap: "https://rajdoctors.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
