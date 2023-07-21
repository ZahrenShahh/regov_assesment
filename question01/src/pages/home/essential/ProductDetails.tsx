import React, { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Link } from "react-router-dom";
import Icons from "../../../components/Icons";
import { Routes, Route, useParams } from "react-router-dom";
import Exit from "../../../components/Exit";
import { Product, products } from "../../../dummyData/ProductsData";
import Carousel from "react-material-ui-carousel";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>(); 
  const currentProduct = products.find(
    (product) => product.id.toString() === productId
  );

  if (!currentProduct) return <div>Product not found</div>;

  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500 h-screen">
      <Exit />

      <div>
        <div className=" h-14 flex justify-evenly gap-5" />

        <Carousel animation="slide" swipe navButtonsAlwaysInvisible>
          {currentProduct.images.map((image) => (
            <div className="h-[25vh] overflow-hidden">
              <div className="relative">
                <img src={image} alt="" className="object-cover h-full" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      
        <div className=" m-3 h-14 flex justify-evenly gap-5 rounded-lg overflow-hidden">
        {currentProduct.images.map((image) => (
          <div className="bg-white h-16 w-28  object-cover">
            <img src={image} alt="" />
          </div>
           ))}
        </div>
     

      <div className="bg-gray-700 h-14 mt-5 rounded-b-lg p-3 text-2xl">
        <p className="ml-5 font-mPlus text-white">{currentProduct?.title}</p>
      </div>
      <div className="bg-gray-700 mt-2 h-2/5  rounded-b-lg p-3 text-2xl">
        <p className=" font-exo text-white text-lg text-justify">{currentProduct?.infor}</p>
      </div>

      <div className="bg-red-500 absolute w-full bottom-0  ">
        <div className="grid grid-cols-3 divide-x p-3">
          <p className="">Chat</p>
          <p className="pl-5 ">Add Card</p>
          <Link to="https://shopee.com.my/">
            <p className="pl-5 ">Continue</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
