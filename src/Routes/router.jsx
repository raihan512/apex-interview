import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Profile from "../Pages/Profile/Profile";
import Schedule from "../Pages/Schedule/Schedule";
import Activities from "../Pages/Activities/Activities";
import Settings from "../Pages/Settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "schedule",
        element: <Schedule></Schedule>,
      },
      {
        path: "activities",
        element: <Activities></Activities>,
      },
      {
        path: "settings",
        element: <Settings></Settings>,
      },
    ],
  },
]);

export default router;
