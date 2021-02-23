import React from "react";
import {Link} from "gatsby";

export default function Header() {
  return (
    <div className="navbar">
      <span class="brand"><Link to="/">Mitchell Manar</Link></span>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/tech">tech</Link></li>
        <li><Link to="/art">art</Link></li>
      </ul>
      <div className="nav-icons">icons here</div>
    </div>
  )
}
