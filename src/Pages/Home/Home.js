import "./Home.css"

export const Home = () => {
  return (
    <section className="container" id="homeContainer">
      <div className="jumbotron jumbotron-fluid" id="homeJumbotron">
        <div className="container">
          <h1 id="homeGreeting">Hi!</h1>
          <br />
          <h1 id="homeHeader">I'm Fahad Hai, a Full Stack Web Developer and UX Designer.</h1>
          <br />
          <h1 id="homeHeader">My work makes working hard looks good!</h1>
          <br />
          <h1 id="homeText">Welcome to My Portfolio.</h1>
        </div>
      </div>
    </section>
  )
}