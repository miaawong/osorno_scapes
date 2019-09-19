import React from "react"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import Review from "./Review"

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

        // console.log(clientNames)
        return (
          <ReviewDiv>
            <h2 className="text-center mt-4">Reviews</h2>
            <hr className="divider my-4" />
            <div className="row">
              {data.clientReview.edges.map(reviewObj => {
                const { node: review } = reviewObj
                return <Review review={review} key={reviewObj.node.id} />
              })}
            </div>
          </ReviewDiv>
        )
      }}
    />
  )
}

export default Reviews
