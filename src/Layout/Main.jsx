import { Outlet } from "react-router-dom";
import SideNav from "../Pages/Shared/SideNav/SideNav";

const Main = () => {
  return (
    <div className="container">
      <SideNav></SideNav>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
