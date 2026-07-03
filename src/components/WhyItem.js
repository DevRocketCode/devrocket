import * as React from "react"

const WhyItem = ({ borderRadius, title,
  subtitle,
  description, icon }) => {
    
  return (
    <article className="why-item hover-grow" data-wow-delay="0.3s">
      <div className="icon" style={{borderRadius}}>
        <i className={`icon-${icon}`}></i>
      </div>
      <div className="why-content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default WhyItem;
