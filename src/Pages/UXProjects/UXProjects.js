import "./UXProjects.css"
import { Card } from "../../Components/Card/Card";
import { Footer } from "../../Components/Footer/Footer";
import { Nav } from "../../Components/Nav/Nav";
import uxProjects from "../../uxProjects.json";

export function UXProjects() {
  return (
    <>
      <Nav />
        <div className="container">
        <section className="container" id="uxTitleContainer">
          <div className="row m-auto">
            <p id="uxHeader" className="mx-auto"> {uxProjects.length || "No"} Projects Currently Available.</p>
          </div>
          <div className="row m-auto">
            <p id="uxHeader2" className="mx-auto">Google Certification Ongoing... </p>
          </div>
        </section>
        <section className="container" id="uxContainer">
          <div className="row justify-content-center" id="wdRow">
            {uxProjects.map(project => (
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
        </section>
        <Footer />
      </div>
    </>
  )
}