import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const projects = [
  {
    title: 'liquidation.com',
    description: 'Ecommerce auction platform for Liquidity Services.  Data interacts with above WMS and other admin-facing applications.',
    link: 'https://liquidation.com/',
    image: 'liquidity.jpg'
  },
  {
    title: 'CDROC.org',
    description: 'React Gatsby site consuming Headless Wordpress backend via GraphQL. Custom CSS styling.',
    link: 'https://cdroc.org/',
  },
  {
    title: 'AI Facial Tracker',
    description: 'An Artificial Intelligence application with trained models to detect emotion in the user’s face.',
    link: 'https://deveq.herokuapp.com/',
    image: 'dev-eq.jpg'
  },
  {
    title: 'AR Tower Defense',
    description: 'An Augmented Reality 2-player game implementation of Tower Defense. Built in Unity, with C#. Created using Node.js with Socket.io for the back-end.',
    link: 'https://play.google.com/store/apps/details?id=com.badbots.towardefense'
  },
  {
    title: 'Ecommerce App',
    description: 'Personal team project e-commerce app. Hand-coded from scratch, using Node, Express, React, PostgreSQL.',
    link: 'http://bug-stops-here.herokuapp.com/'
  },
  {
    title: 'React SEO Demo',
    description: 'SSR Single Page Application demonstrating how Isomorphic Apps are set up in React. Used React-Helmet and Google Fetch.',
    link: 'https://react-seo-demo-ssr.herokuapp.com/'
  },
  {
    title: 'K.Jons Store',
    description: 'Third major version of company e-commerce site, managing approx. 1000 jewelry items. I headed up planning and management.',
    link: 'https://kjons.com/'
  },
  {
    title: 'Tic Tac Toe', 
    description: 'A simple Tic Tac Toe game built with jQuery and JavaScript. Fun to play with friends.',
    link: 'https://wallacepreston.github.io/arcade/tic_tac_toe/'
  },
  {
    title: 'Snake',
    description: 'A simple Snake game built with JavaScript, HTML5 and CSS3. See if you can beat your top score!',
    link: 'https://wallacepreston.github.io/arcade/snake/'
  },
  {
    title: 'WMS',
    description: 'Warehouse Management System. Node/SPA app, enabling concurrent inventory management in warehouses nationwide for LSI (reverse supply chain).  Operations deal with millions of records in the database. (private deploy/repo)',
  },
  {
    title: 'Air Suspension Controller',
    description: 'React Native app, controlling vehicle air suspension via 2-way, real-time bluetooth communication with vehicle ECU.',
  },
]

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} addMargin={false} hideTitle>

    <div className="section-padding blog-post">
      <div className="content-container">
          <h1 className="section-title">Projects</h1>
          <div className="services-row">
          {
            projects.map((project, i) => (
              <div className="services-item projects-item hover-grow" data-wow-delay="0.6s">
                <div className="services-content">
                  <h3>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {project.title}

                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Projects" />

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
        }
      }
    }
  }
`
