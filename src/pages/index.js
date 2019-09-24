import React, { Component } from "react"
import About from "../components/Sections/About"
import Reviews from "../components/Sections/Reviews"
import Contact from "../components/Sections/Contact"
import Services from "../components/Sections/Services"
import Layout from "../components/layout"
import SEO from "../components/util/seo"
import Images from "../components/Sections/Images"

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <About />
        <Services />
        <Images />
        <Reviews />
        <Contact />
      </Layout>
    )
  }
}
