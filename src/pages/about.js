import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"
import { SiCodechef } from "react-icons/si"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h3>
              WITAJ! <br /> JESTEM JAROSŁAW CHEF <SiCodechef />{" "}
            </h3>
            <p>
              Uwielbiam JEŚĆ. Jednak żeby coś zjeść najpierw trzeba sobie coś
              ugotować/upiec.
            </p>
            <p>
              Chce podzielić się z wami tutaj moimi ulubionymi przepisami :)
            </p>
            <Link to="/contact" className="btn">
              kontakt
            </Link>
          </article>
          <StaticImage
            src="../assets/images/main.jpg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Obczaj nasze przepyszne przepisy!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTIme
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
