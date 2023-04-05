import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} addMargin={false} hideTitle>
      <div className="home-container">


        {/* about section */}
        <section id="about" className="section-padding">
          <div className="flex flex-column content-container">
            <div className="sm:flex section-padding">
              <div className="basis-1/2 m-2">
                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                  <StaticImage
                    className="profile-image"
                    formats={["auto", "webp", "avif"]}
                    src='../img/about/headshot.jpg'
                    quality={95}
                    alt="Preston Wallace"
                    style={{zIndex:'10'}}
                  />
                </div>
              </div> 
              <div className="basis-1/2 m-2">
                <div className="profile-wrapper section-padding wow fadeInRight" data-wow-delay="0.3s">
                  <div className="text-3xl font-extrabold text-gray-600">Hey there!</div>
                  <p className="section-padding">I'm Preston Wallace. I am a Full Stack Software Engineer with a longstanding love for everything tech. I currently work as a Software Engineer at <a href="https://mountain.com/">MNTN</a> in what I absolutely love: Node.js and GraphQL on the backend and React on the front end. I build backend solutions that work with SQL databases (PostgreSQL, Sequelize) to efficiently manage large datasets. On the frontend, I create reusable components that can efficiently display and interact with this data. At night, I teach React, Node, Express, and many other things CS-related.</p>
                  <div className="about-profile">
                    <ul className="admin-profile">
                      <li><span className="pro-title"> Name </span> <span className="pro-detail">Preston Wallace</span></li>
                      <li><span className="pro-title"> Location </span> <span className="pro-detail">San Luis Obispo, CA</span></li>
                      <li><span className="pro-title"> e-mail </span> <span className="pro-detail">wallace.preston@gmail.com</span></li>
                      
                    </ul>
                  </div>
                  <button className="button button-info button-medium hover-grow">
                    <a href="https://prestonwallace.com/" >Personal Site</a>
                  </button>
                  
                </div>
              </div>   
            </div>
          </div>
        </section>
        
        <section id="about" className="section-padding">
          <div id="hello-area" className="content-container">
            <div className="text-3xl font-extrabold text-gray-600">But Wait! There's More!</div>
            <p className="section-padding text-xl">To learn more about me and what I do as a Software Engineer, visit my personal site</p>
              <button className="button button-info button-medium hover-grow">
                <a href="https://prestonwallace.com/" >More About Me</a>
              </button>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Software Developer" />

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
