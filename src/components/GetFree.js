import * as React from "react"
import { Link } from "gatsby"

const GetFree = () => {

  return (
    <section className="section-padding get-free section--accent">
      <div className="content-container">
        <div className="guide-callout">
          <p className="label">Free field guide</p>
          <h2 className="section-title">Want to boost your TypeScript knowledge, fast?</h2>
          <p className="text--secondary">
            Get the concise Dev Rocket guide for using TypeScript effectively in real projects.
          </p>
          <h3>TypeScript Essentials: 5 Critical Keys to Using TypeScript Effectively</h3>

          <div className="guide-callout__action">
            <Link className="button button-info button-medium hover-grow" to="/typescript-essentials-free-guide">
              Get your free guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetFree;
