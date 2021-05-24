import { Footer } from "../../Components/Footer/Footer";
import { Nav } from "../../Components/Nav/Nav";
import "./Blog.css"
import BlogsList from "../../blogs.json";

export function Blogs() {
  return (
    <>
    <Nav />
      <section className="container" id="blogTitleContainer">
        <div className="row m-auto">
          <p className="mx-auto" id="blogHeader">{BlogsList.length || "No"} Blogs Currently Available.</p>
        </div>
        <div className="row m-auto">
          <p className="mx-auto" id="blogHeader2">Major Brainstorming Under Way!</p>
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
      <Footer />
    </>
  )
}