import * as React from "react"

const Testimonial = ({ testimonial }) => {

  return (
    <div className="testimonials-item hover-grow wow fadeInUp" data-wow-delay="0.3s">
      <div className="testimonials-meta">
        <div className="testimonials-image">
          <img className="testimonials-image" src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className="testimonials-info">
          <h3>{testimonial.name}</h3>
          <a href={`https://www.linkedin.com/in/${testimonial.social}`} target="_blank" rel="noreferrer">{testimonial.social}</a>
        </div>
      </div>
      <div className="testimonials-content">
        <p>{testimonial.quote}</p>
      </div>
    </div>
  )
}

export default Testimonial;
