import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames"
import "./Nav.css"

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          <img src="/assets/images/logoW.png" alt="brand"/>
        </Link>
        <div className={
            cn(["collapse", "navbar-collapse"],{
              show: isOpen
            })
            }
            id="navToggler"> 
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/wdportfolio" className="nav-link btn" id="wdProjectsBtn">Web Development Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/uxportfolio" className="nav-link btn" id="uxProjectsBtn">UX Design Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link btn" id="aboutBtn">Get to Know Me</Link>
            </li>
          </ul>
        </div>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navToggler" 
          aria-controls="navToggler" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
  )
};