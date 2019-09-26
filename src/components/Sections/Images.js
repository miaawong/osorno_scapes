import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PortfolioModal from "../portfolio/modal"
import PortfolioCarousel from "../portfolio/carousel"
export const getImg = graphql`
  {
    images: allContentfulOsornoImg {
      edges {
        node {
          title
          pictures {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default class Images extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    return (
      <StaticQuery
        query={getImg}
        render={data => {
          const projectName = data.images.edges[0].node.title

          return (
            <section id="portfolio">
              <div className="container-fluid p-0">
                <div className="row no-gutters">
                  {data.images.edges.map(imgObj => {
                    const img = imgObj.node
                    console.log(img)
                    const { fluid } = img.pictures[0]
                    console.log(fluid)

                    return (
                      <div className="col-lg-4 col-sm-6">
                        <a
                          className="portfolio-box"
                          href="img/portfolio/fullsize/1.jpg"
                          onClick={this.handlePortfolioClick.bind(this, 0)}
                        >
                          {" "}
                          <Img className="thumbnails" fluid={fluid} />
                          <div className="portfolio-box-caption">
                            <div className="project-category text-white-50">
                              {/* Category */}
                            </div>
                            <div className="project-name">{projectName}</div>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
              <PortfolioModal
                show={this.state.modalShow}
                onHide={() => this.setModal(false, 0)}
              >
                <PortfolioCarousel
                  images={data.images.edges}
                  current={this.state.modalCurrent}
                />
              </PortfolioModal>
            </section>
          )
        }}
      />
    )
  }
}