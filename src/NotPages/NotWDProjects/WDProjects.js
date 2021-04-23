import "./WDProjects.css";
import { Card } from "../../Components/Card/Card"
import wdProjects from "../../wdProjects.json";

export function WDProjects () {
  return (
    <>
      <section className="container" id="wdTitleContainer">
        <div className="row m-auto">
          <h1 className="mx-auto">{wdProjects.length} Projects Available</h1>
        </div>
      </section>
        <br></br>
      <section className="container" id="wdContainer">
        <div className="row justify-content-center" id="wdRow">
          {wdProjects.map(project => (
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

