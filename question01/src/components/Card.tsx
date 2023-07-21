import React from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import { Link } from "react-router-dom";
import PrintingShop from '../pages/home/printing/PrintingShop';

export type Rental = {
  title: String;
  img: string;
  path: string;
  price?: number;
  Location: string;
  id: number,
  discriptions:string,
  url: string,
};

const Card = (prop: Rental) => {
  return (
    <>
      <Link to={prop.url}>
        <div className="pt-10">
          <div className="h-32 w-full flex  border border-slate-600 rounded-lg gap-2 overflow-hidden">
            <img
              className="h-full w-2/5 row-span-2  bg-red-400 rounded-lg object-cover "
              src={prop.img}
              alt=""
            />
            <div className="flex flex-col justify-between p-2 font-mPlus text-sm">
              <div className="flex">
                <PersonPinIcon />
                <p>{prop.title}</p>
              </div>
              <div className="flex">
                <LocationOnIcon />
                <p>{prop.Location}</p>
              </div>
              {
                prop.price ? (<div className="flex ">
                <SellRoundedIcon />
                <p>RM{prop.price}/Monthly</p>
              </div>) : null
              }
              
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
