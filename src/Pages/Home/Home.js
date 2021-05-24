import "./Home.css"

export const Home = () => {
  return (
    <>
      <section className="container" id="homeContainer">
        <div className="container" id="greetingContainer">
          <div className="innerDiv">
            <h1 id="homeGreeting">Hi!</h1>
          </div>
          <div className="innerDiv">
            <h1 id="homeHeader">I'm Fahad Hai, a Full Stack Web Developer and UX Designer.</h1>
          </div>
          <div className="innerDiv">
            <h1 id="homeHeader2">My work prioritizes user experience, and a simple and intuitive design.</h1>
          </div>
          <div className="innerDiv">
            <h1 id="homeText">Welcome to My Portfolio.</h1>
          </div>
        </div>
      </section>
      <footer id="cFooter" className="text-center">
        <div className="container-fluid p-4 pb-0">
          <section className="mx-auto">
            <a href="https://twitter.com/wdfhai" id="cTwitterFooterBtn" target="_blank" rel="noreferrer" className="btn btn-lg" title="Twitter"><i
                className="fab fa-twitter"></i></a>
            <a href="https://github.com/wdfhai" id="cGitHubFooterBtn" target="_blank" rel="noreferrer" className="btn btn-lg"  title="GitHub"><i
                className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/fahadhai/" id="cLinkedInFooterBtn" target="_blank" rel="noreferrer" className="btn btn-lg"
              title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://docs.google.com/document/d/1fOminBXUXq6uDrt6WL-xqS93pafk3wpflrxIUtuSx2k/edit?usp=sharing"
              id="cCvFooterBtn" target="_blank" rel="noreferrer" className="btn btn-lg" title="CV">Resumé</a>
            <a href="mailto: wd.fhai@gmail.com" target="_blank" rel="noreferrer" id="cEmailFooterBtn" className="btn btn-lg" title="Email"><i
                className="fas fa-envelope-square"></i></a>
            <a href="tel:+1-224-830-3565" target="_blank" rel="noreferrer" id="cPhoneFooterBtn" className="btn btn-lg" title="Phone"><i
                className="fas fa-phone"></i></a>
          </section>
          <section className="" style={{float: "right"}}>
          <p id="cCreditText">Background Unsplash image credit: <a href="https://unsplash.com/@quincoetzee" target="_blank" rel="noreferrer">@quincoetzee</a></p>
          </section>
        </div>
      </footer>
    </>
  )
}