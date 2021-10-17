import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames"
import "./Home.css"

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [doesAnimate, setDoesAnimate] = useState(true);

  // function toggleAnimation(){
  //   let animateableEl = document.querySelectorAll(".animateable");

  //   if (doesAnimate === true){
  //     setDoesAnimate(false);
  //     animateableEl.map((el)=>{
  //       el.classList.remove('animated')
  //     })
  //   } else {
  //     setDoesAnimate(true)
  //     animateableEl.map((el)=>{
  //       el.classList.add('animated')
  //     })
  //   }
  // };

  useEffect(()=>{
    const storedAnimateState = localStorage.getItem('doesAnimate' || true);
    setDoesAnimate(storedAnimateState);
  },[])

  useEffect(() => {
    localStorage.setItem('doesAnimate', doesAnimate);
  },[doesAnimate])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark animateable" id="navbarHome">
        <Link className="navbar-brand" to="/">
          <img className="animateable" src="/assets/images/logoW.png" alt="brand" id="logoHome"/>
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
              <Link to="/wdportfolio" className="nav-link btn animateable" id="wdProjectsBtnHome" onClick={()=> setIsOpen(false)}>Web Development Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/uxportfolio" className="nav-link btn animateable" id="uxProjectsBtnHome" onClick={()=> setIsOpen(false)}>UX Design Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link btn animateable" id="aboutBtnHome" onClick={()=> setIsOpen(false)}>Get to Know Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link btn animateable" id="blogBtnHome" onClick={()=> setIsOpen(false)}>My Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="custom-control custom-switch" id="toggleAnimationButton">
        <input type="checkbox" class="custom-control-input" id="customSwitch1" checked />
        <label class="custom-control-label" style={{color: "white", margin: "auto"}} for="customSwitch1">Animations</label>
      </div>
      <div className="container">
      <section className="container" id="homeContainer">
        <div className="container" id="greetingContainer">
          <div className="innerDiv">
            <h1 className="animateable" id="homeGreeting">Hi!</h1>
          </div>
          <div className="innerDiv">
            <h1 className="animateable" id="homeHeader">I'm Fahad Hai, a Full Stack Web Developer.</h1>
          </div>
          <div className="innerDiv">
            <h1 className="animateable" id="homeHeader2">My work prioritizes user experience, and a simple and intuitive design.</h1>
          </div>
          <div className="innerDiv">
            <h1 className="animateable" id="homeText">Welcome to My Portfolio.</h1>
          </div>
        </div>
      </section>
      <footer id="cFooter" className="text-center animateable">
        <div className="container-fluid p-4 pb-0">
          <section className="mx-auto">
            <a href="https://twitter.com/wdfhai" id="cTwitterFooterBtn" target="_blank" rel="noreferrer" className="btn btn-lg animateable" title="Twitter"><i
                className="fab fa-twitter"></i></a>
            <a href="https://github.com/wdfhai" id="cGitHubFooterBtn" target="_blank" rel="noreferrer" className="btn btn-lg animateable"  title="GitHub"><i
                className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/fahadhai/" id="cLinkedInFooterBtn" target="_blank" rel="noreferrer" className="btn btn-lg animateable"
              title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://docs.google.com/document/d/1fOminBXUXq6uDrt6WL-xqS93pafk3wpflrxIUtuSx2k/edit?usp=sharing"
              id="cCvFooterBtn" target="_blank" rel="noreferrer" className="btn btn-lg animateable" title="CV">Resumé</a>
            <a href="mailto: wd.fhai@gmail.com" target="_blank" rel="noreferrer" id="cEmailFooterBtn" className="btn btn-lg animateable" title="Email"><i
                className="fas fa-envelope-square"></i></a>
            <a href="tel:+1-224-830-3565" target="_blank" rel="noreferrer" id="cPhoneFooterBtn" className="btn btn-lg animateable" title="Phone"><i
                className="fas fa-phone"></i></a>
          </section>
          <section className="" style={{float: "right"}}>
          <p id="cCreditText">Background Unsplash image credit: <a href="https://unsplash.com/@quincoetzee" target="_blank" rel="noreferrer">@quincoetzee</a></p>
          </section>
        </div>
      </footer>
      </div>
    </>
  )
}