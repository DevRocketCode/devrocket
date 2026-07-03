import React from "react"
import { Link } from "gatsby"

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "./Logo"

const navigation = [
  { name: 'About', href: '/#about' },
  { name: 'Why', href: '/#why' },
  { name: 'Proof', href: '/#testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Experience', href: '/about/#experience' },
]

export const Nav = () => {

  return <Disclosure as="header" id="navbar" className="site-header">
  {({ open }) => (
    <>
      <div className="site-header__inner">
        <Link to="/" className="site-logo-link" aria-label="Dev Rocket home">
          <Logo width={168} height={44} tagline={false} />
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>

        <div className="site-nav-actions">
          <a
            className="site-social-link"
            href="https://www.youtube.com/channel/UCoiCi3NyMZ98Rj5K3vZfExw"
            aria-label="Dev Rocket on YouTube"
          >
            <i className="icon-social-youtube"></i>
          </a>
          <a
            className="site-social-link"
            href="https://github.com/wallacepreston"
            aria-label="Preston Wallace on GitHub"
          >
            <i className="icon-social-github"></i>
          </a>
          <a className="nav-cta" href="/typescript-essentials-free-guide">
            Free guide
          </a>
          <Disclosure.Button className="site-menu-button">
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XMarkIcon className="site-menu-icon" aria-hidden="true" />
            ) : (
              <Bars3Icon className="site-menu-icon" aria-hidden="true" />
            )}
          </Disclosure.Button>
        </div>
      </div>

      <Disclosure.Panel className="mobile-menu">
        <div className="mobile-menu__inner">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="mobile-menu__link"
            >
              {item.name}
            </Disclosure.Button>
          ))}
          <Disclosure.Button
            as="a"
            href="/typescript-essentials-free-guide"
            className="mobile-menu__link mobile-menu__link--accent"
          >
            Free guide
          </Disclosure.Button>
          <div className="mobile-menu__socials">
            <a
              href="https://www.youtube.com/channel/UCoiCi3NyMZ98Rj5K3vZfExw"
              aria-label="Dev Rocket on YouTube"
            >
              <i className="icon-social-youtube"></i>
            </a>
            <a
              href="https://github.com/wallacepreston"
              aria-label="Preston Wallace on GitHub"
            >
              <i className="icon-social-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/prestonwallace/"
              aria-label="Preston Wallace on LinkedIn"
            >
              <i className="icon-social-linkedin"></i>
            </a>
            </div>
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
};
