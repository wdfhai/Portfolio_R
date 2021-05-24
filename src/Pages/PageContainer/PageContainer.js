import { Outlet } from "react-router-dom";
import { TopButton } from "../../Components/TopButton/TopButton";
import "./PageContainer.css"

export const PageContainer = () => {
  return (
    <>
      <section className="container-fluid" id="pageContainer">
        <TopButton />
        <Outlet />
      </section>
    </>
  )
}