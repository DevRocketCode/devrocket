import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GetFree from "../components/GetFree"
import YouTubeVideo from "../components/YouTubeVideo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const featuredImg = getImage(post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)
  const isExclusive = post.frontmatter.type === "exclusive";
  const youTubeVideo = post.frontmatter.youTubeVideo;
  const repository = post.frontmatter.repository;

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post content-container"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <h4 itemProp="headline">{post.frontmatter.description}</h4>
          <p className="date">{post.frontmatter.date}</p>
          {
            featuredImg && <GatsbyImage image={featuredImg} className="my-5" />
          }
          {
            youTubeVideo && <YouTubeVideo src={youTubeVideo} />
          }
          <br/>
        </header>
        {
          repository && <>
            <button class="button button-info button-medium hover-grow">
              <a href={repository}>
                Code on GitHub
              </a>
            </button>  👈 Get the Code on GitHub
          </>
        }
        <br/>
        {
          youTubeVideo && <>
            <button class="button button-info button-medium hover-grow">
              <a href={youTubeVideo}>
                YouTube Video
              </a>
            </button>  👈 Watch the Video on YouTube
          </>
        }
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>

          {/* navigation */}
          {
            !isExclusive && <nav className="blog-post-nav">
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          }

          {/* free download section */}
          <GetFree />

          {/* bio section */}
          <Bio />

        </footer>
      </article>
      
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 900, height: 600)
          }
        }
        type
        youTubeVideo
        repository
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
