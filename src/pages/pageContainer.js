import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import { TopButton } from "../components/topButton/topButton";

export const PageContainer = () => {
  return (
    <>
      <Nav />
      <TopButton />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}