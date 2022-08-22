import React from "react"
import { image } from "../../../../../assets/images"
import { TestimonialCardWrapp } from "./TestimonialCard.style"

const TestimonialCard = () => {
  return (
    <TestimonialCardWrapp>
      <div className="testimonial-card">
        <div className="profile">
          <div className="image-profile">
            <img src={image.dummy_profile_image} alt="" />
          </div>
          <div className="profile-name">
            <h1 className="name">Fadel Muhammad</h1>
            <p className="role">Frontend Developer</p>
          </div>
        </div>
        <div className="desc">
          <p>publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface </p>
        </div>

      </div>
    </TestimonialCardWrapp>
  )
}

export default TestimonialCard