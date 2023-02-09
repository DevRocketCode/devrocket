import * as React from 'react';

export const Footer = () => {
  return <footer class="footer-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="footer-text text-center wow fadeInDown" data-wow-delay="0.3s">
          <ul class="social-icon wow fadeInUp" data-wow-delay="0.8s">
            <li>
              <a class="linkedin" href="https://www.linkedin.com/in/prestonwallace/"><i class="icon-social-linkedin"></i></a>
            </li>
            <li>
              <a class="linkedin" href="https://www.youtube.com/channel/UCoiCi3NyMZ98Rj5K3vZfExw"><i class="icon-social-youtube"></i></a>
            </li>
            <li>
              <a class="linkedin" href="https://github.com/wallacepreston"><i class="icon-social-github"></i></a>
            </li>
          </ul>
          © {new Date().getFullYear()}, Built by Preston Wallace with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
}
