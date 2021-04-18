import "./Home.css"

export const Home = () => {
  return (
    <section className="container" id="homeContainer">
      <div className="jumbotron jumbotron-fluid" id="homeJumbotron">
        <div className="container">
          <h1 className="display-4" id="homeHeader">Welcome to My Portfolio</h1>
          <br/>
          <h3 id="homeText">Hi. I'm Fahad Hai, a Full Stack Web Developer and UX Designer based in Houston, Texas.</h3>
        </div>
      </div>
    </section>
  )
}