import React, { useState } from "react";
import { Link } from "react-router-dom";

//type declaration 
type EssentialCardProps = {
  id: number,
  title: String;
  thumbnail: string;
  price: number;
};

const EssentialCard = (prop: EssentialCardProps) => {
  
  return (
    <Link to={`/essential/products/${prop.id}`}>
      <div className="bg-slate-500  w-40  rounded-2xl">
        <div className="bg-white h-40 w-40 overflow-hidden rounded-2xl drop-shadow-lg">
          <img className="object-scale-down" src={prop.thumbnail} alt="" />
        </div>
        <p className="text-center">{prop.title}</p>
        <p className="text-center">RM {prop.price}</p>
      </div>
    </Link>
  );
};

export default EssentialCard;
