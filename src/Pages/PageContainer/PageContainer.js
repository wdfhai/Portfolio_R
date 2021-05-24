import { Outlet } from "react-router-dom";
import { Nav } from "../../Components/Nav/Nav";
import { TopButton } from "../../Components/TopButton/TopButton";
import "./PageContainer.css"

export const PageContainer = () => {
  return (
    <>
      <section className="container-fluid" id="pageContainer">
        <Nav />
        <TopButton />
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  )
}