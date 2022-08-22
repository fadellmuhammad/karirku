import React from "react"
import TestimonialCard from "./components/TestimonialCard"
import { TestimonialWrapp } from "./Testimonial.style"

const Testimonial = () => {
  return (
    <TestimonialWrapp>
      <div className="container">
        <div className="testimonial">
          <h1 className="title">Testimonial</h1>
          <div data-aos="fade-up" data-aos-offset="50" className="testimonial-card-container">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </TestimonialWrapp>
  )
}

export default Testimonial
