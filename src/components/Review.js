import React from "react"
import RichTextToReact from "rich-text-to-react"
import styled from "styled-components"
const ReviewComponent = styled.section`
  padding-bottom: 20px;
  .clientName {
    color: #f4623a;
    float: right;
  }
`
const Review = ({ review }) => {
  return (
    <>
      <ReviewComponent className="col-md-4 col-sm-6 col-xs-12">
        <div className="clientNameStars">
          <h6 className="px-4">
            stars go here
            <cite className="clientName">{review.clientName}</cite>
          </h6>
        </div>
        {/* json for review */}
        {/* <RichTextToReact document={review.review} /> */}
      </ReviewComponent>
    </>
  )
}

export default Review
