import "./Blog.css"
import BlogsList from "../../blogs.json";

export function Blogs() {
  return (
    <>
      <section className="container" id="blogTitleContainer">
        <div className="row m-auto">
          <h1 className="mx-auto"> {BlogsList.length || "No"} Blogs Available. Major Brainstorming Under Way! </h1>
        </div>
      </section>
      {/* <section className="container" id="blogContainer">
        <div className="row justify-content-center" id="blogRow">
          {BlogsList.map(project => (
            <Card
              key={project.id}
              id={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              gitHub={project.gitHub}
              deployed={project.deployed}
            />
          ))}
        </div>
      </section> */}
      <section>
        <br/>
        <div id="gifDiv">
          <iframe id="gif" src="https://giphy.com/embed/xUPGcjUQcWclgK94ti" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
        <p><a id="giphyCredit" href="https://giphy.com/gifs/math-lady-meme-WRQBXSCnEFJIuxktnw">via GIPHY</a></p>
      </section>
    </>
  )
}