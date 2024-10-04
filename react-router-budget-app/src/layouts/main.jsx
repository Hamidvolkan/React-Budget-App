//helper functions
import { fetchData } from "../helpers";
//image import
import wave from "../assets/wave.svg";
//rrd imports
import { Outlet, useLoaderData } from "react-router-dom";
//Components
import Nav from "../assets/components/nav";

//loader

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <Outlet />
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
