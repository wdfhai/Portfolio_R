import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames"
import "./Nav.css"

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          <img src="/assets/images/logoW.png" alt="brand" id="logo"/>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navToggler" 
          aria-controls="navToggler" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{marginLeft: "auto"}}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={
            cn(["collapse", "navbar-collapse"],{
              show: isOpen
            })
            }
            id="navToggler"> 
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/wdportfolio" className="nav-link btn" id="wdProjectsBtn" onClick={()=> setIsOpen(false)}>Web Development Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/uxportfolio" className="nav-link btn" id="uxProjectsBtn" onClick={()=> setIsOpen(false)}>UX Design Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link btn" id="aboutBtn" onClick={()=> setIsOpen(false)}>Get to Know Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link btn" id="blogBtn" onClick={()=> setIsOpen(false)}>My Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
};