import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import PostList from "../components/post-list"
import Testimonial from "../components/Testimonial"

const testimonials = [
  {
    name: 'Stephanie Stampher',
    image: 'https://media.licdn.com/dms/image/C4E03AQG0EjeZTypv9g/profile-displayphoto-shrink_100_100/0/1550461693987?e=1681948800&v=beta&t=wKF4Gfcv78Sqt9o5li28H9iIIhV6LU_OGw-x-SOIpOY',
    social: 'stephaniestampher',
    quote: "I would not be where I am today as a software engineer without Preston's mentorship and guidance."
  },
  {
    name: 'Jean Leconte II',
    image: 'https://media.licdn.com/dms/image/C5603AQGIYUwdaU0_aQ/profile-displayphoto-shrink_400_400/0/1616987166130?e=1681948800&v=beta&t=e73mER1tEOL-MrVLP1YIe90jgu0XJNcWJQCq06uuI6A',
    social: 'jean-leconte-ii',
    quote: "I've learned a ton from Preston and recommend if anyone reading this has the opportunity to work with him in any capacity they should take it!",
  },
  {
    name: 'Hugo Campos',
    image: 'https://media.licdn.com/dms/image/C5603AQGoUpmO8mzxtg/profile-displayphoto-shrink_100_100/0/1550855929642?e=1681948800&v=beta&t=HDOp27ZcrieyXdpngSQE9glyjC7-brmZSF7bZjTt2GQ',
    social: 'o6nh',
    quote: "I am continuously impressed by Preston's ability to convince newer coders to keep soldiering on. He provides a positive energy that tends to boost morale.",
  },
  {
    name: 'Laurence Parmentier-Reeds',
    image: 'https://media.licdn.com/dms/image/C5603AQFdvJXl6lHobw/profile-displayphoto-shrink_100_100/0/1611033386893?e=1681948800&v=beta&t=AfUEB3gkyrvsh5sxbUo-k07Wx8xOl-9zAgUCY1mDPtE',
    social: 'remoteuxproductmanager',
    quote: "Preston's passion for coding and teaching really translate into his instruction method. He is definitely a great teacher and mentor.",
  },
  {
    name: 'Justin Cook',
    image: 'https://media.licdn.com/dms/image/C5603AQHXho5iEHcOMA/profile-displayphoto-shrink_100_100/0/1611858938755?e=1681948800&v=beta&t=bjNlX_5HqmPoCEZtxKZwXLkc1xXhAArw6AgtrpdzcS8',
    social: 'justin-cook-developer',
    quote: 'Preston is always thorough in his explanations and demonstrates great technical competency.'
  },
  {
    name: 'Yahya Hafez',
    image: 'https://media.licdn.com/dms/image/C5603AQHZd2F__7gFVQ/profile-displayphoto-shrink_100_100/0/1593070143668?e=1681948800&v=beta&t=tCqG6t5aQ85QueVwh-mD2iVe8TMDUuqTGUZqQXoYxdc',
    social: 'yahya-hafez',
    quote: "Preston's impressive experience and skill as a developer was consistently highlighted through the deep knowledge of web development he shared."
  }
]

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle} addMargin={false} hideTitle>
      <div className="home-container">

        {/* hero section */}
        <div id="hero-area" className="hero-area-bg">
          <div className="content-container">
            <div className="row">
              <div className="hero-content">
                <div>
                  <h2 className="hero-title">Code</h2>
                  <div className="script-font with-rules">WITH</div>
                  <h2 className="hero-title">Confidence</h2>
                  <div className="hero-tagline">Master the programming skills <br/>that are <b>irresistible</b> to tech companies.</div>

                  <StaticImage
                    className="hero-avatar"
                    formats={["auto", "webp", "avif"]}
                    src='../img/about/headshot.jpg'
                    quality={95}
                    alt="Preston Wallace"
                    style={{zIndex:'10', borderRadius: '50%'}}
                  />
                  <br/>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* about section */}
        <section id="about" className="section-padding">
          <div id="hello-area" className="content-container">
            <div className="text-3xl font-extrabold text-gray-600">Hello! I'm Preston</div>
            <p className="section-padding text-xl">I empower new and seasoned engineers to level-up their skills, <br/> get that promotion, and ultimately crush it in life.</p>
            <div className="card wow fadeInLeft video-container" data-wow-delay="0.3s">
              <iframe className="youtube-video" src="https://www.youtube.com/embed/4SiqWAvIjaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </section>

        {/* testimonials section */}
        <section id="testimonials" className="section-padding content-container">
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* services section */}
        <section id="services" className="services section-padding content-container">
          <h2 className="section-title  wow flipInX" data-wow-delay="0.4s">What I do</h2>
          <div>
            <div className="services-row">
              
                <div className="services-item hover-grow" data-wow-delay="0.3s">
                  <div className="icon">
                    <i className="icon-grid"></i>
                  </div>
                  <div className="services-content">
                    <h3>Front-end Development</h3>
                    <p>I work mainly with TypeScript, React, and Apollo, creating Single Page Applications.</p>
                  </div>
                </div>
              
                <div className="services-item hover-grow" data-wow-delay="0.6s">
                  <div className="icon">
                    <i className="icon-layers"></i>
                  </div>
                  <div className="services-content">
                    <h3>Back-End Development</h3>
                    <p>Using TypeScript, Node.js, Express, and PostgreSQL, I build REST and GraphQL APIs.</p>
                  </div>
                </div>
              
                <div className="services-item hover-grow" data-wow-delay="0.9s">
                  <div className="icon">
                    <i className="icon-briefcase"></i>
                  </div>
                  <div className="services-content">
                    <h3>Design</h3>
                    <p>I create using Figma and Photoshop. I love working with CSS3, SASS, TailwindCSS, and Styled Components.</p>
                  </div>
                </div>
              
                <div className="services-item hover-grow" data-wow-delay="1.2s">
                  <div className="icon">
                    <i className="icon-bubbles"></i>
                  </div>
                  <div className="services-content">
                    <h3>Agile Development</h3>
                    <p>I work iteratively and efficiently. I believe we can achieve so much more as a team.</p>
                  </div>
                </div>
            </div>
          </div>
        </section>


        {/* blog post list */}
        <PostList posts={posts} />
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="TypeScript Architecture" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 150, height: 100)
            }
          }
        }
      }
    }
  }
`
