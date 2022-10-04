import React from "react"
import { image } from "../../../../../assets/images"
import { TestimonialCardWrapp } from "./TestimonialCard.style"

const TestimonialCard = ({name, role, desc}) => {
  return (
    <TestimonialCardWrapp>
      <div className="testimonial-card">
        <div className="profile">
          <div className="image-profile">
            <img src={image.profie} alt="" />
          </div>
          <div className="profile-name">
            <h1 className="name">{name}</h1>
            <p className="role">{role}</p>
          </div>
        </div>
        <p className="desc">{desc}</p>
      </div>
    </TestimonialCardWrapp>
  )
}

export default TestimonialCard