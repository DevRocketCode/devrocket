import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import PostList from "../components/PostList"
import Testimonial from "../components/Testimonial"
import WhyItem from "../components/WhyItem"
import GetFree from "../components/GetFree"
import YouTubeVideo from "../components/YouTubeVideo"

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
  {
    name: 'Sal Guerrero',
    image: 'https://media.licdn.com/dms/image/C4E03AQHN3zwV__TInA/profile-displayphoto-shrink_400_400/0/1615440348360?e=1683763200&v=beta&t=yelr1-oXtF4llB9jwlNihDiR4z7tgDQz4-2TqQjbsqk',
    social: 'sal-guerrero',
    quote: "Preston helped me understand critical programming concepts and further my programming skills. As a result of his teaching I was able to break into tech and find the career of my dreams.",
  },
  {
    name: 'Bienvenido Rodriguez',
    image: 'https://media.licdn.com/dms/image/D4E03AQEhKHm19c9rrQ/profile-displayphoto-shrink_100_100/0/1669090489392?e=1683763200&v=beta&t=Or8QQfQc-HVMlGYOcZgji_DfaCtQWvByEUqp_Vy1fxA',
    social: 'b17z',
    quote: 'Preston is a gifted Software Engineer and a thought leader in technical education, training, and communication.'
  }
];


// icons come from simple-line-icons https://simplelineicons.github.io/
const whyItems = [
  {
    title: 'Easy to Follow',
    subtitle: 'All of the learning. None of the angst.',  
    description: "Say goodbye to confusing lessons and hello to a simple and beginner-friendly experience with Preston's online coding videos.",
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
    title: 'Fun Videos',
    subtitle: 'Exciting lessons that are fun and Engaging',
    description: "Get excited about coding with Preston's fun and engaging videos that are packed with real-world examples and exercises to help you learn by doing.",
    icon: 'camrecorder',
    borderRadius: '36% 64% 43% 57% / 53% 79% 21% 47%',
  },
  {
    title: 'Prepare for Coding Interviews',
    subtitle: 'Boost Your Career Options with a Job-Ready Education',
    description: "Get ahead of the competition with Preston's in-depth and comprehensive video lessons that are packed with real-world examples and exercises to prepare you for the job.",
    icon: 'briefcase',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
  },
];

const heroStats = [
  { value: '10+', label: 'years teaching engineers' },
  { value: '100s', label: 'students mentored' },
  { value: 'JS', label: 'TypeScript focus' },
];

const expertiseTags = [
  'TypeScript',
  'React',
  'Architecture',
  'Mentorship',
  'Career growth',
  'Interviews',
];

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle} addMargin={false} hideTitle>
      <div className="home-container">

        {/* hero section */}
        <section id="hero-area" className="hero-area-bg">
          <div className="hero-gridlines" aria-hidden="true"></div>
          <svg className="hero-lines" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path className="hero-line" d="M-120,420 Q260,120 600,410 T1320,360" />
            <path className="hero-line hero-line--secondary" d="M-120,540 Q350,230 700,470 T1320,300" />
            <path className="hero-line hero-line--tertiary" d="M-120,260 Q220,520 520,350 T1320,470" />
          </svg>

          <div className="content-container hero-grid">
            <div className="hero-content">
              <p className="hero-label">Code and architecture training</p>
              <h1 className="hero-title">Dev Rocket</h1>
              <p className="hero-tagline">
                Code your future with clear programming lessons, TypeScript guidance, and mentoring built for real engineering work.
              </p>
              <div className="hero-actions">
                <Link className="button button-info button-medium" to="/typescript-essentials-free-guide">
                  Start free guide
                </Link>
                <a className="button button-ghost button-medium" href="#why">
                  See the approach
                </a>
              </div>
            </div>

            <aside className="hero-profile-card" aria-label="Preston Wallace profile">
              <StaticImage
                className="hero-avatar"
                formats={["auto", "webp", "avif"]}
                src='../img/about/headshot.jpg'
                quality={95}
                alt="Preston Wallace"
              />
              <div className="hero-profile-card__body">
                <p className="label">Instructor</p>
                <h2>Preston Wallace</h2>
                <p>Software engineer, mentor, and technical educator helping developers get sharper without the fog.</p>
              </div>
              <div className="hero-stats">
                {heroStats.map(stat => (
                  <div className="hero-stat" key={stat.label}>
                    <span className="hero-stat__value">{stat.value}</span>
                    <span className="hero-stat__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <a className="hero-scroll" href="#about">
            <span>Explore</span>
            <span className="hero-scroll__line"></span>
          </a>
        </section>

        {/* about section */}
        <section id="about" className="section-padding">
          <div id="hello-area" className="content-container about-grid">
            <div className="about-content">
              <p className="label">Hello, I'm Preston</p>
              <h2 className="section-title">Engineering lessons with a human pulse.</h2>
              <p className="text--secondary">
                I empower new and seasoned engineers to level up their skills, get that promotion, and ultimately crush it in life.
              </p>
              <div className="expertise">
                {expertiseTags.map(tag => (
                  <span className="expertise__tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="video-panel">
              <YouTubeVideo videoId="K0Q48l0060I" />
            </div>
          </div>
        </section>

        {/* free download section */}
        <GetFree />

        {/* testimonials section */}
        <section id="testimonials" className="section-padding section--dark">
          <div className="content-container">
            <p className="label">Student proof</p>
            <h2 className="section-title">Mentorship that sticks after the lesson ends.</h2>
            <p className="section-intro text--secondary">
              Developers consistently point to clarity, calm, and technical depth as the reason Dev Rocket works.
            </p>
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
            <div className="approach-header">
              <p className="label">Why code with me</p>
              <h2 className="section-title wow flipInX" data-wow-delay="0.4s">A calmer way to build serious skills.</h2>
              <p className="section-intro text--secondary">
                The lessons are direct, practical, and built to help you keep momentum when programming gets noisy.
              </p>
            </div>
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
export const Head = () => <Seo title="Dev Rocket" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { type: { ne: "exclusive" } } }) {
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
              gatsbyImageData(width: 275, height: 175)
            }
          }
        }
      }
    }
  }
`
