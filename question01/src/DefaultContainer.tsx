import { Outlet, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

const DefaultContainer = () => {
  return (
    <main>
      <Outlet />
      <Navigation />
    </main>
  );
};

export default DefaultContainer;
