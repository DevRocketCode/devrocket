import * as React from 'react';

export const Footer = () => {
  return <footer className="footer-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-text text-center wow fadeInDown" data-wow-delay="0.3s">
          <ul className="social-icon wow fadeInUp" data-wow-delay="0.8s">
            <li>
              <a className="linkedin" href="https://www.linkedin.com/in/prestonwallace/"><i className="icon-social-linkedin"></i></a>
            </li>
            <li>
              <a className="linkedin" href="https://www.youtube.com/channel/UCoiCi3NyMZ98Rj5K3vZfExw"><i className="icon-social-youtube"></i></a>
            </li>
            <li>
              <a className="linkedin" href="https://github.com/wallacepreston"><i className="icon-social-github"></i></a>
            </li>
          </ul>
          © {new Date().getFullYear()}, Built by Preston Wallace
          </div>
        </div>
      </div>
    </div>
  </footer>
}
