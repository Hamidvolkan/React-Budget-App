import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//dashboard import
import Dashbord, {
  dashboardAction,
  dashboardLoader,
} from "./assets/pages/dashboard";

import Error from "./assets/pages/Error";
import Main, { mainLoader } from "./layouts/main";
// Tost library import

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//actions
import { logoutAction } from "./action/Logout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashbord />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
