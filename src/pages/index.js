import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import PostList from "../components/PostList"
import Testimonial from "../components/Testimonial"
import WhyItem from "../components/WhyItem"
import GetFree from "../components/GetFree"

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
  },
  {
    name: 'Riley Smith',
    image: 'https://media.licdn.com/dms/image/C5603AQHmlM_z2WQweQ/profile-displayphoto-shrink_200_200/0/1560034191068?e=1681948800&v=beta&t=sprncOx7Qh9kvl75sBXhs340Z2iMvp-olt8721Dn2ZM',
    social: 'rileysheldonsmith',
    quote: "Preston is a thoughtful instructor who strives to see his students succeed. He is always happy to work with students at their pace, and help them gain thorough understanding of the curriculum."
  },
  {
    name: 'Tilly Wright',
    image: 'https://media.licdn.com/dms/image/C5603AQG6G_vE0Hc8-g/profile-displayphoto-shrink_200_200/0/1608654958930?e=1681948800&v=beta&t=rg4jdOcBZieFHXIeAk37VBLVxtwehz05kW8-nPZroug',
    social: 'tillywright',
    quote: "Preston's instruction and lessons were really easy to follow as I was building JS projects."
  },
];


// icons come from simple-line-icons https://simplelineicons.github.io/
const whyItems = [
  {
    title: 'Easy to Follow',
    subtitle: 'All of the learning. None of the angst.',  
    description: "Say goodbye to confusing lessons and hello to a simple and beginner-friendly experience with Preston's online coding courses.",
    icon: 'directions',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ',
  },
  {
    borderRadius: '60% 40% 34% 66% / 30% 56% 44% 70%',
    title: 'Fast-track lessons',
    subtitle: 'Accelerate Your Learning',
    description: "Join the Coding Revolution!  Get ahead of the game with Preston's clear and concise lessons that leave out the fluff and get straight to the point.",
    icon: 'rocket',
  },
  {
    title: 'Compassionate Teacher',
    subtitle: "Learn coding with a passion, don't hate it with one.",
    description: "Get inspired and motivated with Preston's passionate teaching style and fun, friendly voice that makes coding a fun and engaging experience.",
    icon: 'heart',
    borderRadius: '30% 70% 43% 57% / 81% 30% 70% 19%',
  },
  {
    title: 'Master the Mindset',
    subtitle: 'Unlock Your Inner Coding Genius',
    description: "Learn from a true expert with Preston's years of experience in the industry and gain valuable tips and tricks that will help you code with confidence.",
    icon: 'bulb',
    borderRadius: '64% 36% 43% 57% / 53% 30% 70% 47%',
  },
  {
    title: 'World-Class Quality Videos',
    subtitle: 'Exciting lessons that are fun and Engaging',
    description: "Get the best quality education with Preston's attention to detail and obsession with the quality of his videos, complete with beautiful graphics, slides, and animations.",
    icon: 'camrecorder',
    borderRadius: '36% 64% 43% 57% / 53% 79% 21% 47%',
  },
  {
    title: 'Prepare for Coding Interviews',
    subtitle: 'Boost Your Career Options with a Job-Ready Education',
    description: "Get ahead of the competition with Preston's in-depth and comprehensive courses that are packed with real-world examples and exercises to prepare you for the job.",
    icon: 'briefcase',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
  },
];

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

        {/* free download section */}
        <GetFree />

        {/* about section */}
        <section id="about" className="section-padding">
          <div id="hello-area" className="content-container">
            <div className="text-3xl font-extrabold text-gray-600">Hello! I'm Preston</div>
            <p className="section-padding text-xl">I empower new and seasoned engineers to level-up their skills, <br/> get that promotion, and ultimately crush it in life.</p>
            <div className="card wow fadeInLeft video-container" data-wow-delay="0.3s">
              <iframe className="youtube-video" src="https://www.youtube.com/embed/4SiqWAvIjaw?&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </section>

        {/* testimonials section */}
        <section id="testimonials" className="section-padding">
          <div className="content-container">

            <div className="testimonials-container">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* why section */}
        <section id="why" className="section-padding">
          <div className="content-container">
            <h2 className="section-title  wow flipInX" data-wow-delay="0.4s">why code with me</h2>
            <div className="why-container">
              {whyItems.map((why, index) => (
                <WhyItem key={index} {...why} />
              ))}
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
export const Head = () => <Seo title="Software Engineering Made Simple" />

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
