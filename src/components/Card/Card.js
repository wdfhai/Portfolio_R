import { Project } from "../project";
import "./Card.css";

export const Card = ({
  id,
  name,
  image,
  description,
  gitHub,
  deployed
  })=> (

    <div className="card text-white bg-dark mb-3" id="projectCard">
      <img className="card-img-top" 
        src={image} 
        alt={name}
      />
      <div className="card-body">
        <h4 className="card-title">{id}. {name}</h4>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer mx-auto">
        <a className="btn btn-primary" id="activeBtn" type="button" href={gitHub}>Repo</a>
        {
          {
            "#": <a className="btn btn-danger disabled" id="inactiveBtn" type="button" href={deployed}>Not Deployed</a>            
          }[deployed] || <a className="btn btn-primary" id="activeBtn" type="button" href={deployed}>Deployed</a>
        }
      </div>
    </div>
)