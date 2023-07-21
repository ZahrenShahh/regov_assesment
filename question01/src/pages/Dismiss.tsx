import React from "react";
import Navigation from "../components/Navigation";
import { Route } from "react-router-dom";
import FoodBeverages from "./home/foodBeverages/FoodBeverages";

const Dismiss = () => {
  return <div>{location.pathname != "/home" ? <Navigation /> : null}

  <Route>
  <Route path="/food_beverages" element={<FoodBeverages />} />

  </Route>
  
  </div>;
};

export default Dismiss;
