import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import RecipesList from "../components/RecipesList"
import TagsList from "../components/TagsList"
import { useStaticQuery, graphql } from "gatsby"

import videoBg from "../assets/images/intro.mp4"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTIme
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default function Home() {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Strona Główna" />

      <header className="hero">
        <div className="hero-container">
          <div className="hero-img">
            <video
              src={videoBg}
              autoPlay
              muted
              loop
              playsInline
              type="video/mp4"
            ></video>
            <div className="hero-text">
              <h1>jarosław gotuje</h1>
            </div>
          </div>
        </div>
        <div className="tagsList">
          <TagsList recipes={recipes} />
        </div>
      </header>
      <main className="page">
        <RecipesList recipes={recipes} />
      </main>
    </Layout>
  )
}
