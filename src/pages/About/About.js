import "./About.css"

export function About() {
  return (
    <>
      <section className="container" id="aboutContainer">
        <div className="row justify-content-center" id="aboutRow">
          <div className="col-sm-12 col-md-3">
            <img src="/assets/images/portrait.png" alt="portrait" id="portrait"/>
          </div>
        </div>
        <div className="row" id="bioRow">
          <div className="col-sm-12">
            <h1 className="card-title" style={{textAlign: "center", fontWeight: "bolder"}}>
              Hi There!
            </h1>
            <br/>
            <div className="card w-100" id="bioCard">
              <div className="card-header" style={{textAlign: "center"}}>
              <a href="https://twitter.com/wdfhai" id="twitterBtn" target="_blank" className="btn btn-lg" title="Twitter"><i
                    className="fab fa-twitter"></i></a>
                <a href="https://github.com/wdfhai" id="gitHubBtn" target="_blank" className="btn btn-lg"  title="GitHub"><i
                    className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/fahadhai/" id="linkedInBtn" target="_blank" className="btn btn-lg"
                  title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="https://docs.google.com/document/d/1fOminBXUXq6uDrt6WL-xqS93pafk3wpflrxIUtuSx2k/edit?usp=sharing"
                  id="cvBtn" target="_blank" className="btn btn-lg" title="CV">Resume</a>
                <a href="mailto: wd.fhai@gmail.com" target="_blank" id="emailBtn" className="btn btn-lg" title="Email"><i
                    className="fas fa-envelope-square"></i> at wd.fhai@outlook.com</a>
                <a href="tel:+1-224-830-3565" target="_blank" id="phoneBtn" className="btn btn-lg" title="Phone"><i
                    className="fas fa-phone"></i> at 224-830-3565</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container" id="aboutContainer">
        <div className="row justify-content-center" id="aboutRow">
          <div className="col">
            <div className="card w-100" id="bioCard">
              <div className="card-body">
                <h3 style={{fontWeight: "bolder"}}>Introduction</h3>
                <br />
                <p>My name is Fahad Hai, a Full Stack Web Developer and UX Designer in Houston, Texas, with 9 years of experience in Healthcare administration and customer service.</p>
                <br />
                <h3 style={{fontWeight: "bolder"}}>Design and Programming Philosophy</h3>
                <br />
                <p>I'm a firm believer in a clean and minimalist approach towards both design and programming. Instead of overloading users with sensory stimuli, I want them to feel relaxed and energized when using my products and applications, which in turn promotes interaction, retention and satisfaction. My background in healthcare helps me empathize with my users and keep the bigger picture in mind during the development of any of my projects, and my experience in UX and programming enable me to do just that.</p>
                <br />
                <h3 style={{fontWeight: "bolder"}}>Career goals and interests</h3>
                <br />
                <p>I chose Web Development and UX Design as my career because these
                  two disciplines synergize extremely well, as they enable me to conceptualize and build content from the ideation
                  phase all the way to the finished product. Rice University and Google helped me realize my potential
                  and now I welcome new challenges and opportunities to expand my horizons. </p>
                <br />
                <h3 style={{fontWeight: "bolder"}}>Education</h3>
                <br />
                <ul>
                  <li>
                    <p><b><u>Rice University Full Stack Web Development Bootcamp:</u></b> An intensive program
                      focused on
                      gaining
                      technical programming skills in HTML5, CSS3, Javascript, JQuery, APIs, Bootstrap, Firebase, Node Js,
                      MySQL, MongoDB, Express, Handlebars.js & ReactJS.</p>
                  </li>
                  <li>
                    <p><b><u>Google UX Design Certification:</u></b> (Completion in August 2021) </p>
                  </li>
                </ul>
                <br />
                <h3 style={{fontWeight: "bolder"}}>Background</h3>
                <br />
                <p>I was born in Karachi, Pakistan, and I'm
                  a US citizen and a resident of the beautiful city of Houston, Texas. I have a Bachelors degree
                  in Medicine from Pakistan, but after immigrating I decided to change career paths. I worked for 9 years in Healthcare administration in Chicago before moving to Houston in 2019.</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
