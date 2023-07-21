import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Link, useParams } from "react-router-dom";
import Icons from "../components/Icons";
import Exit from "../components/Exit";
import RoomIcon from "@mui/icons-material/Room";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { restaurantList } from "./Restaurant";
import { Product, products } from "../dummyData/ProductsData";

export const Gps = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const restaurant = restaurantList.find(
    (restaurant) => restaurant.id.toString() === restaurantId
  );

  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500 h-screen">
      <Exit />

      <div className=" h-40 pt-5 ">
        <div className="bg-blue-500 h-4/5 w-4/5  m-10 rounded-2xl pt-3">
          <div className="flex justify-evenly">
            <Icons title="" ikon={<RoomIcon />} />
            <div className="bg-white   h-10 w-3/5 rounded-lg ">
              Your Location
            </div>
          </div>

          <div className="flex justify-evenly mt-2">
            <Icons title="" ikon={<GpsFixedIcon />} />

            <div className="bg-white   h-10 w-3/5  rounded-lg">
              {restaurant?.title}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-evenly gap-3 m-2 pt-10">
        <div className="bg-red-400 w-1/4 rounded-md text-center p-2">
          <Icons title=" Walk" ikon={<DirectionsWalkIcon />} />
        </div>
        <div className="bg-red-400 w-1/4 rounded-md text-center p-2">
          <Icons title=" Car" ikon={<TimeToLeaveIcon />} />
        </div>
        <div className="bg-red-400 w-1/4 rounded-md text-center p-2">
          <Icons title=" Bike" ikon={<TwoWheelerIcon />} />
        </div>
      </div>
      <div className=" h-960 mt-10 ">
        <div className=" h-80 w-4/5  m-auto rounded-2xl ">
          <iframe
            width="100%"
            height="100%"
            src={`https://maps.google.com/maps?q=${restaurant?.location[0]},${restaurant?.location[1]}&z=15&output=embed`}
          ></iframe>
        </div>
      </div>
      <Link to="https://goo.gl/maps/tQWc9vCYHmgeL12H7">
      <div
        className="bg-black  m-20 absolute -inset-x-0 -bottom-16 p-2
        rounded-lg text-white text-center  text-2xl"
      >
        Next
      </div>
      </Link>
    </div>
  );
};
