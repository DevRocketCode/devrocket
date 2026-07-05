import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby";

const Testimonial = ({ testimonial }) => {

  const data = useStaticQuery(graphql`
    query allImages {
      allFile {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 300
                quality: 75
              )
            }
            relativePath
          }
        }
      }
    }
  `); 

  // useStaticQuery does not support arguments, so we filter on the name each time
  const image = data.allFile.edges.filter(edge => edge.node.relativePath === `testimonials/${testimonial.social}.jpeg`)
  console.log('>>>>>>>>> image', image);
  const src = getImage(image[0].node.childImageSharp.gatsbyImageData)
  
  // const src = getImage(image[0].node.childImageSharp.gatsbyImageData)
   

  return (
    <div className="testimonials-item hover-grow wow fadeInUp" data-wow-delay="0.3s">
      <div className="testimonials-meta">
        <div className="testimonials-image">
          <GatsbyImage
            image={src}
            alt="your-pic-alt-img"
            style={{
              borderRadius: `100%`,
            }}
          />
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
