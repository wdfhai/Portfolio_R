import "./WDProjects.css";
import { Card } from "../Card/Card"
import projects from "../../wdProjects.json";

export function WDProjects () {
  return (
    <section className="container" id="wdContainer">
      <div className="row m-auto">
        <h1 className="mx-auto">Web Development Projects ({projects.length})</h1>
      </div>
      <br></br>
      <div className="row justify-content-center" id="wdRow">
        {projects.map(project => (
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
  );
};

