import React from "react"
import TestimonialCard from "./components/TestimonialCard"
import { TestimonialWrapp } from "./Testimonial.style"
import { DataUserTestimonial } from "./DataUserTestimonial"

const Testimonial = () => {
  return (
    <TestimonialWrapp>
      <div className="container">
        <div className="testimonial">
          <h1 className="title">Testimonial</h1>
          <div data-aos="fade-up" data-aos-offset="10" className="testimonial-card-container">
            {
              DataUserTestimonial.map(res => (
                <TestimonialCard name={res.name} role={res.role} desc={res.desc} />
              ))
            }
          </div>
        </div>
      </div>
    </TestimonialWrapp>
  )
}

export default Testimonial
