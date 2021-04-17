import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";

export const PageContainer = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}