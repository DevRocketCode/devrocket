import * as React from "react"
import { Link } from "gatsby"
import { Nav } from "./Nav"
import { Footer } from "./"

// import '../css/about.css';
// import '../css/animate.css';
// import '../css/bootstrap.min.css';
// import '../css/main.css';
// import '../css/nivo-lightbox.css';
// import '../css/owl.carousel.css';
// import '../css/owl.theme.css';
// import '../css/responsive.css';
// import '../css/slicknav.css';
import '../fonts/simple-line-icons.css';
import '../fonts/font-awesome.min.css';

const Layout = ({ location, title, children, prepended, addMargin = true, hideTitle = false }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath;

  // build classes for main
  const classNames = ['global-wrapper'];
  if (addMargin) {
    // horizontal margin
    classNames.push('global-margin');
  }
  if (!prepended) {
    classNames.push('global-not-prepended');
  }

  return (
    <>
      {prepended}
      <div data-is-root-path={isRootPath}>
        <Nav/>
        <main className={classNames.join(' ')}>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
