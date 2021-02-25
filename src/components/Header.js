import React from "react";
import {Link} from "gatsby";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
<div className="nav-banner">
  <div className="container">
    <Navbar className="justify-content-start" expand="lg"> 
    <Navbar.Toggle className="mr-3" aria-controls="basic-navbar-nav" />
    <Navbar.Brand><Link to="/">mitchell m</Link></Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav.Link><Link activeClassName="nav-active" to="/">home</Link></Nav.Link>
      <Nav.Link><Link activeClassName="nav-active" to="/tech">tech</Link></Nav.Link>
      <Nav.Link><Link activeClassName="nav-active" to="/art">art</Link></Nav.Link>
      <Nav.Link><Link activeClassName="nav-active" to="/contact">contact</Link></Nav.Link>
      <div className="nav-icons d-none d-md-inline">
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
    </Navbar.Collapse>
    </Navbar>
  </div>
</div>
  )
}