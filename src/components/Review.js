import React from "react"
import { MARKS } from "@contentful/rich-text-types"
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
  const { json } = review.review
  return (
    <>
      <ReviewComponent className="col-md-4 col-sm-6 col-xs-12 my-2">
        <div className="clientNameStars">
          <h6 className="px-4">
            stars go here
            <cite className="clientName">{review.clientName}</cite>
          </h6>
        </div>
        {/* json for review */}
        <RichTextToReact document={json} options={RichTextOptions} />
      </ReviewComponent>
    </>
  )
}

const RichTextOptions = {
  renderMark: {
    // define styling for BOLD text here. See rich-text-to-react docs for others
    [MARKS.BOLD]: (text, key) => (
      <strong key={key} style={{ fontWeight: "bold" }}>
        {text}
      </strong>
    ),
  },
}

export default Review
