import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import PostList from "../components/PostList"

const skills = [
  'TypeScript',
  'JavaScript',
  'Node',
  'GraphQL',
  'React',
  'Express',
  'Vue',
  'MySQL',
  'Sequelize',
  'HTML5',
  'CSS3',
  'Git',
  'PostgreSQL',
  'Jest',
  'React Native',
  'Docker',
  'Kubernetes',
  'Redux',
  'Perl',
  'Knex',
  'SEO',
  'WordPress',
  'Figma',
  'Bootstrap',
  'jQuery',
  'C#',
  'PHP',
  'Unity',
  'Angular',
  'Sass',
  'Mercurial',
  'MongoDB',
  'AWS',
];

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

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
                    <a href="/assets/img/about/preston-wallace-software-engineer.pdf"><i className="icon-paper-clip"></i> Download Resume</a>
                  </button>
                  <button className="button button-danger button-medium hover-grow">
                    <a href="#contact" ><i className="icon-speech"></i> Contact Me</a>
                  </button>
                  
                </div>
              </div>   
            </div>
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




        {/* resume section */}
        <section id="experience" className="section-padding">
          <div className="content-container">
            <div className="timeline-row">
              <div className="timeline-col">
                <div className="experience wow fadeInRight" data-wow-delay="0.6s">
                  <ul className="timeline">
                    <li>
                      <i className="icon-briefcase"></i>
                      <h2 className="timelin-title">Experience</h2>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Software Engineer (Node/React/GraphQL)</h3>
                        <span><b>MNTN</b> | Jul 2021 - Present</span>
                        <p className="line-text">Integrating user-facing elements developed by front-end developers with server side logic.
                          Writing reusable, testable, and efficient code.
                          Designing and implementing low-latency, high-availability, and performant applications.
                          Implementing security and data protection.
                          Collaborating with Product Designers, Product Managers, and Software Engineers to deliver performant server side applications.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Lead Software Engineering Curriculum Writer</h3>
                        <span><b>Multiverse</b> | Dec 2021 - Present</span>
                        <p className="line-text">Created intensive Admissions Assessment from the ground up, including automated testing challenges to evaluate candidates to determine readiness for our bootcamp. Writing part-time technical SWE apprenticeship program for companies like Google, Facebook and Verizon. Leading team of Curriculum Writers, reviewing & editing lessons. Adding lessons on advanced topics like Docker, AWS and React</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Lead Software Engineering Instructor</h3>
                        <span><b>Fullstack Academy</b> | Apr 2019 - Nov 2021</span>
                        <p className="line-text">Lead remote cohorts for a remote software engineering course as a part of Cal Poly's Extended Education Program.  Instruct on topics such as CSS/HTML, DOM, Object Oriented Programming, React, Node, REST, Express, and PostgreSQL. Teach students to design web applications that solve user needs as professional developers. Lecture on complex CS concepts, including design and theory. Perform live demos, and impart practical skills, such as Node/React demo (3x/week), respond to student questions, complete on-demand demonstrations.  Develop and build out curriculums. Invest in students' lives, helping highly-talented people reach higher levels of excellence.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Software Engineer (Node/Vue/REST)</h3>
                        <span><b>Liquidity Services</b> | Apr 2019 - Jul 2021</span>
                        <p className="line-text">Created automated data-collection tool to populate inventory data for thousands of records at a time, increasing efficiency of warehouse associate receive-and-sort time by 50%. Bootstrapped integration testing solution for Rest and GraphQL API endpoints, increasing backend code coverage from 0% to over 70%. Increased Google Lighthouse Best Practices score over 5% by upgrading dependencies site-wide, patching security vulnerabilities. Spearheaded use of Docker in development to test and debug application performance, using artillery to mock high throughput and user traffic. Increased QA effectiveness by describing test procedures for 100% of new front-end tickets. Implemented multi-launch tool used by hundreds of enterprise users, drastically reducing internal customer service hours spent on repetitive tasks. Developed internal software solutions for warehouse management of dataset on order of millions. Leveraged Node.js, Express.js, MySQL, and Vue.js to enable user interaction with complex Schemas and logical automated decision making for internal routing of inventory in a reverse supply chain process. Communicated with DevOps and Business Managers to determine business goals and develop timely, efficient solutions accordingly. Engineered solutions in a team, while working largely independent on a daily basis, planning and executing unique solutions to problems presented.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Network Admin, Assistant Manager</h3>
                        <span><b>K.Jons Diamonds & Gems</b> | Feb 2010 - Oct 2018</span>
                        <p className="line-text">Designed and Managed major version of company e-commerce site, with 1000+ items, and total inventory value of $800K. Oversaw Migration from local database to continuous updates of Third Party data via API. Managed network of 8 PCs. Managed permissions. Resolved workstation issues, fax connection to server, Network  devices. Assisted 3-person team in managing assets of $1.5M.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Web Developer</h3>
                        <span><b>K.Jons Diamonds & Gems</b> | Feb 2008 - Feb 2010</span>
                        <p className="line-text">Transitioned website from static HTML to Dynamic WordPress site with blog, automatic database backups, and scheduled automatic deployment. Increased traffic to website by estimated 100% over 2 years (mostly local).  Landed site first-position worldwide in Google SERP listings for keywords. Managed $50K marketing budget. Edited via Photoshop, Illustrator, and Flash. Created digital/print ads and approximately 10 billboards displayed on Hwy 101.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Web Developer</h3>
                        <span><b>Preston's Creations</b> | Sep 2008 - Jul 2011</span>
                        <p className="line-text">Developed website plan, from Intake to Wire Frames. Designed using Photoshop. Sliced Photoshop file. Created and coded HTML/CSS files sitewide. Secured hosting and domain name for client. Uploaded via FTP and deployed. Tracked site traffic via Google Analytics and reported to client.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* education section */}
              <div className="timeline-col">
                <div className="education wow fadeInRight" data-wow-delay="0.3s">
                  <ul className="timeline">
                    <li>
                      <i className="icon-graduation"></i>
                      <h2 className="timelin-title">Education</h2>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>LinkedIn Learning</h3>
                        <span>Jun 2022 - Present</span>
                        <p className="line-text">Studying topics like Cybersecurity, Authentication, Deployment, AWS, and more.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>binsec academy</h3>
                        <span>Sep 2020</span>
                        <p className="line-text">Performed a comprehensive secure coding review of an ExpressJS server running on NodeJS. Dove into the depths of the most common security risks for web applications (OWASP Top 10). This course included identifying and fixing multiple vulnerabilities in the web application's source code.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Fullstack Academy</h3>
                        <span>2018-2019</span>
                        <p className="line-text">Leveled-up my Javascript skills, diving deep into Node, Express, React, and PostgreSQL. Computer Science topics included data structures, closure, prototypal inheritance, and recursion. Fullstack Academy is a top-ranked school with campuses in New York City, Chicago, and remote campuses.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>GIA (Gemological Institute of America</h3>
                        <span>2004 - 2011</span>
                        <p className="line-text">Developed in-depth, hands-on experience with Diamond Grading and the 4Cs (color, clarity, cut and carat weight). Used the GIA Colored Stone Grading System to evaluate gemstone quality. Successfully identified colored gemstones at random, including simulants and treatments. Learned how quality, rarity and color affect value. Determined how market factors affect gem value.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Cuesta College</h3>
                        <span>2002 - 2008</span>
                        <p className="line-text">Associate of Arts (A.A.), General Studies, 3.83 GPA w/ High Honors</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* skills section */}
        <section id="skills" className="skills section-padding content-container">
          <h2 className="section-title  wow flipInX" data-wow-delay="0.4s">Skills</h2>
          <h4 className="section-subtitle">
            These are just a few!
          </h4>
          <div class="skills-container">
            {
              skills.map((skill, index) => {
                return (
                  <div className="skills-row">
                    <div className="skills-item hover-grow">
                      {skill}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
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
