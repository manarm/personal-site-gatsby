import React from "react";
import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
<div className="nav-banner">
  <div className="container">
    <div className="navbar">  
      <span class="brand"><Link to="/">mitchell m</Link></span>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/tech">tech</Link></li>
        <li><Link to="/art">art</Link></li>
      </ul>
      <div className="nav-icons">
        <a href="https://github.com/manarm" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon className="icon" icon={faGithubAlt} />
        </a>
        <a href="https://twitter.com/itsmatchell" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  </div>
</div>
  )
}
