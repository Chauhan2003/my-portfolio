import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <h1 className="footer__title">Gagan Chauhan</h1>

        <ul className='footer__list'>
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li><a href="#skills" className="footer__link">Skills</a></li>
          <li><a href="#service" className="footer__link">Services</a></li>
        </ul>

        <div className="footer__social">
          <a href='https://www.instagram.com/' className='footer__social-link' target='_blank'>
            <i class='bx bxl-instagram-alt'></i>
          </a>

          <a href='https://www.linkedin.com/' className='footer__social-link' target='_blank'>
            <i class='bx bxl-linkedin-square'></i>
          </a>

          <a href='https://github.com/' className='footer__social-link' target='_blank'>
            <i class='bx bxl-github'></i>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
