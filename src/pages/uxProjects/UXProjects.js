import "./UXProjects.css"
import { Card } from "../../components/Card/Card";

export function UXProjects() {
  return (
    <>
      <section className="container" id="uxTitleContainer">
        <div className="row m-auto">
          <h1 className="mx-auto"> No Projects Yet. Come Back Soon! </h1>
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