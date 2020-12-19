import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"


const IndexPage = ({ data }) => (
  <Layout>
    <h1>Conductores</h1>
    <table>
      <tr>
        <td>Name</td><td>Genre</td><td>Website</td></tr>
        { data.allBand.edges.map(({ node, index }) => (
          <tr>
            <td>
              {node.name}
            </td>
            <td>
              {node.genre}
            </td>
            <td>
              {node.website}
            </td>
          </tr>
        ))}
    </table>
  </Layout>
)

export default IndexPage


export const query = graphql `
  {
    allBand {
      edges {
        node {
          name
          genre
          website
        }
      }
    }
  }
`