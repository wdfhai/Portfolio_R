import { Outlet } from "react-router-dom";
import { Nav } from "../Components/Nav/Nav";
import { TopButton } from "../Components/TopButton/TopButton";
import { Footer } from "../Components/Footer";

export const PageContainer = () => {
  return (
    <>
      <Nav />
      <TopButton />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}