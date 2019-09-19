import React, { Component } from "react"
import Scroller from "../components/scroller"

export default class About extends Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  }

  render() {
    return (
      <section className="page-section bg-primary" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h2 className="text-white mt-0">About Us</h2>
              <hr className="divider light my-4" />
              <p className="text-white mb-4 aboutUs">
                Orsorno Scapes provides residential and commercial landscaping
                services for clients in YOUR CITY and the communities north of
                YOUR STATE. Founded by President, OWNER NAME, Orsorno Scapes was
                built on trust and value with our clients. We want you to be
                satisfied and we are committed to your landscaping and property
                maintenance needs.
              </p>
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#services"
                onClick={Scroller.handleAnchorScroll}
              >
                Our Services!
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
