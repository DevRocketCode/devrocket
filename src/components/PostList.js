import * as React from "react"
import { Link } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostList = ({ posts }) => {

  return (
    <section id="posts" className="section-padding section--dark">
      <div className="content-container">
        <p className="label">Latest writing</p>
        <h2 className="section-title">What's New</h2>
        <p className="section-intro text--secondary">
          Essays, lessons, and practical notes for engineers building better habits.
        </p>
          <ol className="blog-list">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              const featuredImg = getImage(post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)

              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item blog-row"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <Link className="blog-row__link" to={post.fields.slug} itemProp="url">
                      <span className="blog-row__date">{post.frontmatter.date}</span>
                      <span className="blog-row__image">
                        {featuredImg && <GatsbyImage image={featuredImg} className="post-list-item-img" alt="" />}
                      </span>
                      <span className="blog-row__summary">
                        <h3 itemProp="headline">{title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </span>
                      <span className="blog-row__arrow" aria-hidden="true">+</span>
                    </Link>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
    </section>
  )
}

export default PostList;
