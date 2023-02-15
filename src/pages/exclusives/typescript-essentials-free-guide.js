import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import resumePDF from '../../exclusives/typescript-essentials-5-critical-keys-to-using-typescript-effectively.pdf'


const TypeScriptEssentialsExclusiveDownload = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} addMargin={false} hideTitle>
      <div className="home-container">

        {/* hero section */}
        <div id="signup-area" className="signup-area-bg">
          <div className="content-container">
            <div className="row">
              <div className="hero-content">
                <div>
                  <br/>
                  <br/>
                  <h2 className="hero-title">Congrats!</h2>
                  <div className="script-font">here is your</div>
                  <div className="script-font with-rules">EXCLUSIVE GUIDE:</div>

                  <br/>
                  <br/>

                  <button className="button button-info button-medium hover-grow text-4xl font-extrabold">
                    <a href={resumePDF}><i className="icon-paper-clip"></i> Download Free Guide</a>
                  </button>

                  <div className="hero-tagline">TypeScript Essentials: 5 Critical Keys<br/> to Using TypeScript <b>Effectively</b></div>
                  
                  <div><em><small>When you signup, we'll be sending you weekly emails with additional free content.</small></em></div>
                  <br/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TypeScriptEssentialsExclusiveDownload

export const Head = () => <Seo title="FREE TypeScript Essentials Guide" />

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
