import "./WDProjects.css";
import { Card } from "../../components/Card/Card"
import projects from "../../wdProjects.json";

export function WDProjects () {
  return (
    <>
      <section className="container" id="wdTitleContainer">
        <div className="row m-auto">
          <h1 className="mx-auto">{projects.length} Projects Available</h1>
        </div>
      </section>
        <br></br>
      <section className="container" id="wdContainer">
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
    </>
  );
};

