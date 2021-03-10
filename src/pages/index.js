import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components"
import SEO from "../components/seo"
const HomePage = ({data}) => {
  console.log(data);
  const{
    allAirtable:{nodes:projects},
  } = data
  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} title="Fights"/>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Fights"}}) {
      nodes {
        id
        data {
          Description
          fights
          images {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
