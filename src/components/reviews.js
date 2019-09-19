import React from "react"
import { StaticQuery, graphql } from "gatsby"
import RichTextToReact from "rich-text-to-react"
import styled from "styled-components"

const ReviewComponent = styled.section`
  padding-bottom: 20px;
  .clientName {
    color: #f4623a;
    float: right;
  }
`
const ReviewDiv = styled.section`
  width: 100%;
  padding: 20px 20px;
  margin: 0 auto;
`
const getReviews = graphql`
  {
    clientReview: allContentfulOsornoReview {
      edges {
        node {
          clientName
          review {
            json
          }
        }
      }
    }
  }
`
const Reviews = () => {
  return (
    <StaticQuery
      query={getReviews}
      render={data => {
        const { json: review } = data.clientReview.edges[0].node.review
        const { clientName } = data.clientReview.edges[0].node

        return (
          <ReviewDiv>
            <h2 className="text-center mt-4">Reviews</h2>
            <hr className="divider my-4" />
            <div className="row">
              <ReviewComponent className="col-md-4 col-sm-6 col-xs-12">
                <div className="clientNameStars">
                  <h6 className="px-4">
                    stars go here
                    <cite className="clientName">{clientName}</cite>
                  </h6>
                </div>
                <RichTextToReact document={review} />
              </ReviewComponent>
              <ReviewComponent className="col-md-4 col-sm-6 col-xs-12">
                <h6 className="px-4">
                  stars go here
                  <cite className="clientName">{clientName}</cite>
                </h6>
                <RichTextToReact document={review} className="text-center" />
              </ReviewComponent>
              <ReviewComponent className="col-md-4 col-sm-6 col-xs-12">
                <h6 className="px-4">
                  stars go here
                  <cite className="clientName">{clientName}</cite>
                </h6>
                <RichTextToReact document={review} />
              </ReviewComponent>
              <ReviewComponent className="col-md-4 col-sm-6 col-xs-12">
                <h6 className="px-4">
                  stars go here
                  <cite className="clientName">{clientName}</cite>
                </h6>
                <RichTextToReact document={review} />
              </ReviewComponent>
            </div>
          </ReviewDiv>
        )
      }}
    />
  )
}

export default Reviews
