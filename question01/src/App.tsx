import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PrintingShop, {
  printingProducts,
} from "../src/pages/home/printing/PrintingShop";
import DefaultContainer from "./DefaultContainer";
import Account from "./pages/account/Account";
import AddCard from "./pages/actionButtonOverlay/AddCard";
import Freelance from "./pages/freelance/Freelance";
import { Gps } from "./pages/Gps";
import Graph from "./pages/graph/Graph";
import Inbox from "./pages/inbox/Inbox";
import Login from "./pages/login/Login";
import Pay from "./pages/actionButtonOverlay/Payment/Pay";
import ReceivePay from "./pages/actionButtonOverlay/Payment/ReceivePay";
import GeneralProductDetails from "./pages/home/rental/RentalDiscription";
import Restaurant from "./pages/Restaurant";
import Submission from "./pages/Submission";
import Home from "./pages/home/Home";
import Essential from "./pages/home/essential/Essential";
import ProductDetails from "./pages/home/essential/ProductDetails";
import FoodBeverages from "./pages/home/foodBeverages/FoodBeverages";
import PrintingDetails from "./pages/home/printing/PrintingDetails";
import Rental, { rentalProducts } from "./pages/home/rental/Rental";
import React from "react";


function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState(true);

  return (
    <div>
      {loggedIn ? (
        <Routes>
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} setUser={setUser} />}
          />
          <Route path="/food_beverages" element={<FoodBeverages />} />
          {/* Essential */}
          <Route path="/essential" element={<Essential />} />
          <Route
            path="/essential/products/:productId"
            element={<ProductDetails />}
          />
          {/* Rental */}
          <Route path="/rental" element={<Rental />} />
          <Route
            path="/rental/:productId"
            element={<GeneralProductDetails database={rentalProducts} />}
          />
          {/* Printing */}
          <Route path="/printing_shop" element={<PrintingShop />} />
          <Route
            path="/printing_shop/:productId"
            element={<GeneralProductDetails database={printingProducts} />}
          />

          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/gps/:restaurantId" element={<Gps />} />

          <Route path="/submission" element={<Submission />} />
          <Route path="/printingdetail" element={<PrintingDetails />} />
          <Route path="/purchase" element={<ProductDetails />} />
          <Route path="/" element={<DefaultContainer />}>
            <Route path="/home" element={<Home />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route
              path="/account"
              element={<Account setLoggedIn={setLoggedIn} />}
            />
            <Route path="/addcard" element={<AddCard />} />
            <Route path="/payment" element={<Pay />} />
            <Route path="/receivepay" element={<ReceivePay />} />
            <Route path="/freelance" element={<Freelance />} />
          </Route>
        </Routes>
      ) : (
        <Login setLoggedIn={setLoggedIn} setUser={setUser} />
      )}
    </div>
  );
}

export default App;

//1. baca Link
//2. Conditional(klau link bukan kat log in bukan display nav bar)
