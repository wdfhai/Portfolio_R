import "./Footer.css"

export const Footer = () => {
  return(
    <footer id="footer" className="text-center text-white" style={{backgroundColor: "black", opacity: "0.8", width: "100%", bottom: "0px", left: "0px", position: "fixed"}}>
      <div className="container-fluid p-4 pb-0">
        <section className="mx-auto">
          <a href="https://twitter.com/wdfhai" id="twitterFooterBtn" target="_blank" rel="noreferrer" className="btn btn-lg" title="Twitter"><i
              className="fab fa-twitter"></i></a>
          <a href="https://github.com/wdfhai" id="gitHubFooterBtn" target="_blank" rel="noreferrer" className="btn btn-lg"  title="GitHub"><i
              className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/fahadhai/" id="linkedInFooterBtn" target="_blank" rel="noreferrer" className="btn btn-lg"
            title="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="https://docs.google.com/document/d/1fOminBXUXq6uDrt6WL-xqS93pafk3wpflrxIUtuSx2k/edit?usp=sharing"
            id="cvBtn" target="_blank" rel="noreferrer" className="btn btn-lg" title="CV">Resumé</a>
          <a href="mailto: wd.fhai@gmail.com" target="_blank" rel="noreferrer" id="emailFooterBtn" className="btn btn-lg" title="Email"><i
              className="fas fa-envelope-square"></i></a>
          <a href="tel:+1-224-830-3565" target="_blank" rel="noreferrer" id="phoneFooterBtn" className="btn btn-lg" title="Phone"><i
              className="fas fa-phone"></i></a>
        </section>
        <section className="" style={{float: "right"}}>
        <p id="creditText">background image credit: https://unsplash.com/@quincoetzee</p>
        </section>
      </div>
    </footer>
  )
}