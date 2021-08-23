import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Jarosław Gotuje</span>. Built
        with <a href="https://gatsbyjs.com/"></a> <span>Gatsby</span>
      </p>
    </footer>
  )
}

export default Footer
