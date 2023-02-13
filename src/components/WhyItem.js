import * as React from "react"

const WhyItem = ({ borderRadius, title,
  subtitle,
  description, icon }) => {
    
  return (
    <div className="why-item hover-grow" data-wow-delay="0.3s">
      <div>
        <div className="icon" style={{borderRadius}}>
          <i className={`icon-${icon}`}></i>
        </div>
      </div>
      <div className="why-content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default WhyItem;
