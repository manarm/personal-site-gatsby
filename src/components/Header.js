import React from "react";
import {Link} from "gatsby";
import Navbar from "react-bootstrap/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
<div className="nav-banner">
  <a className="skip-to-content-link" href="#main-content">Skip to Content.</a>

  <div className="container">
    <Navbar expand="md"> 
    <Navbar.Toggle className="mr-3" aria-controls="basic-navbar-nav" />
    <Navbar.Brand>mitchell m</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Link className="nav-link" activeClassName="nav-active" to="/">home</Link>
      <Link className="nav-link" activeClassName="nav-active" to="/tech">tech</Link>
      <Link className="nav-link" activeClassName="nav-active" to="/art">art</Link>
      <Link className="nav-link" activeClassName="nav-active" to="/contact">contact</Link>
    </Navbar.Collapse>
    <div className="nav-icons">
      <a href="https://github.com/manarm" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon className="icon" icon={faGithubAlt} />
      </a>
      <a href="https://twitter.com/itsmatchell" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon className="icon" icon={faTwitter} />
      </a>
      <a href="https://www.linkedin.com/in/mitchell-manar-9a3a0b207/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
      </a>
    </div>
    </Navbar>
  </div>
</div>
  )
}