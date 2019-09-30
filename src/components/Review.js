import React from "react"
import { MARKS } from "@contentful/rich-text-types"
import RichTextToReact from "rich-text-to-react"
import styled from "styled-components"
import { FaStar } from "react-icons/fa"
const ReviewComponent = styled.section`
  padding-bottom: 20px;
  .clientName {
    color: #f4623a;
    float: right;
  }
`
const Review = ({ review }) => {
  const { json } = review.review
  const starTotal = 5
  return (
    <>
      <ReviewComponent className="col-md-4 col-sm-6 col-xs-12 my-2 ">
        <div className="clientNameStars">
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          {/*   <h6 className="px-4 my-3">
          </h6> */}
          <cite className="clientName px-3 "> - {review.clientName}</cite>
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
