import "./UXProjects.css"
import { Card } from "../../components/Card/Card";
import uxProjects from "../../uxProjects.json";

export function UXProjects() {
  return (
    <>
      <section className="container" id="uxTitleContainer">
        <div className="row m-auto">
          <h1 className="mx-auto"> {uxProjects.length} Projects Available. Come Back Soon! </h1>
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
      <section>
        <br/>
        <div className="row justify-content-center">
          <img className="" src="/assets/images/underConstruction.jpg" id="constructionImg" alt="under construction"/>
        </div>
      </section>
    </>
  )
}