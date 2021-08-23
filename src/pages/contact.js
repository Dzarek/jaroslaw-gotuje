import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h4>Masz pytania odnośnie przepisu?</h4>
            <p>
              Napisz do nas! Chef Jarosław na pewno udzieli Ci cennych rad :)
            </p>
            <h4>Może chcesz podzielić się z nami swoimi przepisami?</h4>
            <p>
              Będzie nam bardzo miło zjeść inne potrawy niż te co mamy tutaj :D.
              Zapraszamy do Kontaktu!
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mbjqpzkn"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Imię:</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Wiadomość:</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Wyśli
              </button>
            </form>
          </article>
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

export default Contact
