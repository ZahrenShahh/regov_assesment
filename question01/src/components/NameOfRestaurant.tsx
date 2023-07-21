import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type restaurant = {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
};

const NameOfRestaurant = (prop: restaurant) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    >
      <Link to={`/gps/${prop.id}`} className="flex gap-4  m-4 p-2 rounded-2xl border-2 ">
        <div className="w-2/5 h-28  bg-red-400  rounded-lg overflow-hidden">
          <img
            className=" h-full w-full object-cover"
            src={prop.images[0]}
            alt=""
          />
        </div>
        <div className="w-3/5">
          <p className="pt-2  text-white font-bold h-2/5 font-mPlus">
            <p className="text-center">{prop.title}</p>
          </p>
          <div className="text-white  h-3/5 text-xs font-semibold font-exo">
            <p className="text-left ">{prop.description}</p>
            <p className="text-left mt-2">RM {prop.price}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NameOfRestaurant;
