import * as React from 'react';

export const Footer = () => {
  return <footer className="footer-area section-padding">
    <div className="footer-inner">
      <div className="footer-copy">
        © {new Date().getFullYear()} Dev Rocket
        <span className="footer-divider">/</span>
        Built by Preston Wallace
      </div>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/prestonwallace/" aria-label="Preston Wallace on LinkedIn"><i className="icon-social-linkedin"></i></a>
        <a href="https://www.youtube.com/channel/UCoiCi3NyMZ98Rj5K3vZfExw" aria-label="Dev Rocket on YouTube"><i className="icon-social-youtube"></i></a>
        <a href="https://github.com/wallacepreston" aria-label="Preston Wallace on GitHub"><i className="icon-social-github"></i></a>
      </div>
    </div>
  </footer>
}
