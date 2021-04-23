import "./UXProjects.css"
import { Card } from "../../Components/Card/Card";
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
        <div id="gifDiv">
          <iframe id="gif" src="https://giphy.com/embed/3owyp2SViuDIGh8YoM" frameBorder="0" className="giphy-embed" title="workingHard" allowFullScreen></iframe>
        </div>
        <p><a id="giphyCredit" href="https://giphy.com/gifs/illustration-work-freelancer-3owyp2SViuDIGh8YoM">via GIPHY</a></p>
      </section>
    </>
  )
}