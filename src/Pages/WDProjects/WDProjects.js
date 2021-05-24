import "./WDProjects.css";
import { Card } from "../../Components/Card/Card";
import { Footer } from "../../Components/Footer/Footer";
import wdProjects from "../../wdProjects.json";

export function WDProjects () {
  return (
    <>
      <section className="container" id="wdTitleContainer">
        <div className="row m-auto">
          <p id="wdHeader" className="mx-auto">{wdProjects.length || "No"} Projects Available. Have Fun Exploring!</p>
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
      <Footer />
    </>
  );
};

