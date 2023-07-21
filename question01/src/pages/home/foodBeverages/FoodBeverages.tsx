import React from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../../../assets/images/Alali.jpg";
import img2 from "../../../assets/images/soru.png";
import img3 from "../../../assets/images/mak-uda.jpg";
import img4 from "../../../assets/images/tealive.jpg";
import img6 from "../../../assets/images/eriks-irmejs-Prtmg56zIX0-unsplash.jpg";
import Exit from "../../../components/Exit";

const FoodBeverages = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500 h-screen">
      <Exit />

      <div className="h-2/5 shadow-2xl rounded-b-3xl overflow-hidden">
        <div className=" ">
          <img className=" object-cover" src={img6} alt="" />
        </div>
      </div>

      <div className="h-1/2">
        <p className="m-10 font-bold font-mPlus">FOOD</p>
        <div className="flex justify-evenly h-1/4 mt-10 ">
          <Link
            to="/restaurant"
            className="rounded-lg ring-2 ring-white w-1/4 overflow-hidden"
          >
            <p className="bg-amber-50  rounded-t-lg text-center font-mPlus  text-xs">
              AL Ali
            </p>
            <img className=" h-full w-full object-cover" src={img1} alt="" />
          </Link>
          <Link
            to="/restaurant"
            className="inline-block rounded-lg ring-2 ring-white w-1/4 overflow-hidden"
          >
            <p className="bg-amber-50 rounded-t-lg text-center font-mPlus  text-xs">
              Soru
            </p>
            <img className="h-full w-full object-cover" src={img2} alt="" />
          </Link>
          <Link
            to="/restaurant"
            className="inline-block  rounded-lg ring-2 ring-white w-1/4 overflow-hidden"
          >
            <p className="bg-amber-50 rounded-t-lg  text-center font-mPlus  text-xs">
              Mak Uda
            </p>
            <img className="h-full w-full object-cover" src={img3} alt="{}" />
          </Link>
        </div>
        <p className="m-10 font-bold font-mPlus">BEVERAGE</p>
        <div className="flex justify-evenly h-1/4 mt-10 ">
          <Link
            to="/restaurant"
            className="rounded-lg ring-2 ring-white w-1/4 overflow-hidden"
          >
            <p className="bg-amber-50 rounded-t-lg text-center font-mPlus  text-xs">
              Tealive
            </p>
            <img className="object-cover h-full w-full" src={img4} alt="" />
          </Link>
          <Link
            to="/restaurant"
            className="inline-block rounded-lg ring-2 ring-white w-1/4 overflow-hidden"
          >
            <p className="bg-amber-50 rounded-t-lg text-center font-mPlus  text-xs">
              Cool Blog
            </p>
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/p/AF1QipNkdRaPRVBJhw4PnJe9Sn7rIRMTAwWLTF_k7HtS=s680-w680-h510"
              alt=""
            />
          </Link>
          <Link
            to="/restaurant"
            className="inline-block rounded-lg ring-2 ring-white w-1/4 overflow-hidden"
          >
            <p className="bg-amber-50 rounded-t-lg text-center font-mPlus  text-xs">
              Ruits Juices
            </p>
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/p/AF1QipPj59eUjWqoyyDHOvd0yiHUjwT9_ELBPa3BYJFq=s680-w680-h510"
              alt="{}"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodBeverages;
