import "./Card.css";

export const Card = ({
  id,
  name,
  image,
  description,
  gitHub,
  deployed
  })=> (

    <div className="card text-white mb-3" id="projectCard">
      <img className="card-img-top" 
        src={image} 
        alt={name}
      />
      <div className="card-body">
        <p id="cardTitle" className="card-title">{id}. {name}</p>
        <p id="cardDesc" className="card-text">{description}</p>
      </div>
      <div className="card-footer mx-auto">
        <a className="btn btn-primary" id="activeBtn" type="button" href={gitHub} target="_blank" rel="noreferrer">Repo</a>
        {
          {
            "#": <a className="btn btn-danger disabled" id="inactiveBtn" type="button" href={deployed} rel="noreferrer" target="_blank"><s>Deployed</s></a>            
          }[deployed] || <a className="btn btn-primary" id="activeBtn" type="button" href={deployed} rel="noreferrer" target="_blank">Deployed</a>
        }
      </div>
    </div>
)