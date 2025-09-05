import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './header.scss'

const Header = ({ id }) => {

  return (

    <div className='background-image' id={id}>
      <h1>I&apos;m Shad Azam</h1>
      <h3><span><a href="https://bazaar247.in/">Software Engineer @ Bazaar 247 Mcommerce Pvt Ltd</a></span>
      </h3>
      <hr />
      <ul className="social">
        <li><a href="https://www.facebook.com/shad.azam.94" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
        <li><a href="https://twitter.com/MShad_Azam" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="https://github.com/shadazam08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://www.linkedin.com/in/shad-azam-ab9107244/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      </ul>
    </div>
  )
}

export default Header