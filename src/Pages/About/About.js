import { Footer } from "../../Components/Footer/Footer";
import { Nav } from "../../Components/Nav/Nav";
import "./About.css"

export function About() {
  return (
    <>
      <Nav />
        <div className="container">
        <section className="container" id="aboutContainer">
          <div className="row justify-content-center" id="aboutRow">
            <div className="col-sm-12">
              <img src="/assets/images/portrait.png" alt="portrait" id="portrait"/>
            </div>
          </div>
          <div className="row" id="bioRow">
            <div className="col-sm-12">
              <h1 className="card-title" id="aboutGreeting">
                Hi There!
              </h1>
              <br/>
              <div className="card w-100" id="bioCard">
                <div className="card-header" style={{textAlign: "center"}}>
                  <a href="https://twitter.com/wdfhai" id="twitterBtn" target="_blank" rel="noreferrer" className="btn btn-lg" title="Twitter"><i
                      className="fab fa-twitter"></i></a>
                  <a href="https://github.com/wdfhai" id="gitHubBtn" target="_blank" rel="noreferrer" className="btn btn-lg"  title="GitHub"><i
                      className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/fahadhai/" id="linkedInBtn" target="_blank" rel="noreferrer" className="btn btn-lg"
                    title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="https://docs.google.com/document/d/12maSXFRbQDnXnrWZpQCUn1fdBmfS8vBxmmNaqfbJ6C0/edit?usp=sharing"
                    id="cvBtn" target="_blank" rel="noreferrer" className="btn btn-lg" title="CV">Resumé</a>
                  <a href="mailto: wd.fhai@gmail.com" target="_blank" rel="noreferrer" id="emailBtn" className="btn btn-lg" title="Email"><i
                      className="fas fa-envelope-square"></i> at wd.fhai@outlook.com</a>
                  <a href="tel:+1-224-830-3565" target="_blank" rel="noreferrer" id="phoneBtn" className="btn btn-lg" title="Phone"><i
                      className="fas fa-phone"></i> at 224-830-3565</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="aboutContainer2">
          <div className="row justify-content-center" id="aboutRow">
            <div className="col">
              <div className="card w-100" id="bioCard2">
                <div className="card-body">
                  <h2 style={{fontWeight: "bolder"}}>Introduction</h2>
                  <br />
                  <h4>My name is Fahad Hai, a Full Stack Web Developer in Houston, Texas, with 8 year background in Healthcare administration and customer service.</h4>
                  <br />
                  <h2 style={{fontWeight: "bolder"}}>Design and Programming Philosophy</h2>
                  <br />
                  <h4>I'm a firm believer in a clean and minimalist approach towards both design and programming. Instead of overloading users with sensory stimuli, I want them to feel relaxed and energized when using my products and applications, which in turn promotes interaction, retention and satisfaction. My background in healthcare helps me empathize with my users and keep the bigger picture in mind during the development of any of my projects, and my experience in UX and programming enable me to do just that.</h4>
                  <br />
                  <h2 style={{fontWeight: "bolder"}}>Career goals and interests</h2>
                  <br />
                  <h4>I chose Web Development and UX Design as my career because these
                    two disciplines synergize extremely well, and enable me to conceptualize and build content from the ideation
                    phase all the way to the finished product. Rice University and Google helped me realize my potential
                    and now I welcome new challenges and opportunities to expand my horizons. </h4>
                  <br />
                  <h2 style={{fontWeight: "bolder"}}>Education</h2>
                  <br />
                  <ul>
                    <li>
                      <h4><b>Rice University Full Stack Web Development Certification:</b> An intensive program
                        focused on
                        gaining
                        technical programming skills in HTML5, CSS3, Javascript, JQuery, APIs, Bootstrap, Firebase, Node Js,
                        MySQL, MongoDB, Express, Handlebars.js & ReactJS.</h4>
                    </li>
                    {/* <li>
                      <h4><b>Google UX Design Certification:</b> (Completion in August 2021) </h4>
                    </li> */}
                  </ul>
                  <br />
                  <h2 style={{fontWeight: "bolder"}}>Background</h2>
                  <br />
                  <h4>I was born in Karachi, Pakistan, and I'm
                    a US citizen and a resident of the beautiful city of Houston, Texas. I have a Bachelors degree
                    in Medicine from Pakistan, but after immigrating I decided to change career paths. I worked for 9 years in Healthcare administration in Chicago before moving to Houston in 2019.</h4>
                  <br />
                  <br />
                  <h3 style={{textAlign: "center", fontWeight: "bolder"}}>Let's talk soon. Cheers!</h3>
                  <br />
                  <br />
                  <div className="row">
                    <img className="img-responsive ml-auto mr-auto" src="/assets/images/logoW.png" id="signatureLogo" alt="logo"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer />
      </div>
    </>
  )
}
