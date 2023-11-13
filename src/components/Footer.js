import { pageLinks, socialLinks } from '../data'
import React from 'react'
import SocialLink from './SocialLink'
import PageLinks from './PageLink'
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          //const { id, href, text } = link
          return <PageLinks key={link.id} {...link} itemClass="footer-link" />
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />
        })}

        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </ul>
    </footer>
  )
}

export default Footer
