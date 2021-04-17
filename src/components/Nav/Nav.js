import "./Nav.css"

export const Nav = () => {
  return(
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="">
          <img src="/assets/images/logoW.png" alt="brand"/>
        </a>
        <div className="collapse navbar-collapse" id="navToggler"> 
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <button className="btn btn-lg" id="wdProjectsBtn">Web Development Projects</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-lg" id="uxProjectsBtn">UX Design Projects</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-lg" id="aboutBtn">Get to Know Me</button>
            </li>
          </ul>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggler" aria-controls="navToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
  )
};