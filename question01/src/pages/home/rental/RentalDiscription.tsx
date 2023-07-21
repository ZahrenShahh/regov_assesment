import React from "react";
import Icons from "../../../components/Icons";
import RememberMeRoundedIcon from '@mui/icons-material/RememberMeRounded';
import { Link, useParams } from "react-router-dom";
import Exit from "../../../components/Exit";
import { rentalProducts } from "../rental/Rental";
import { Rental } from "../../../components/Card";

type RentalDiscriptionProps = {
  database: any
};

const GeneralProductDetails = (props: RentalDiscriptionProps) => {

  const { productId } = useParams<{ productId: string }>();
  const currentProduct = props.database.find(
    (product:any) => product.id.toString() === productId
  );

  if (!currentProduct) return <div>Product not found</div>;

  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500 h-screen">
      <Exit />
      <div className=" h-52 flex justify-evenly pt-20">
        <div className="bg-white h-52 w-52 rounded-lg overflow-hidden">
          <img className="h-full object-cover" src={currentProduct?.image} />
        </div>

        <div className="bg-white h-52 w-28 rounded-lg flex p-2">
          <RememberMeRoundedIcon/>
          <p className="font-mPlus text-xs">{currentProduct?.tittle}</p>
        </div>
      </div>
      <div className="bg-white h-2/5 mt-36 flex m-auto w-4/5 rounded-lg p-2 overflow-hidden flex-col">
        <h1 className="font-mPlus ">Discription:</h1>
        <p className="font-exo font-semibold mt-10 object-cover ">{currentProduct?.discription}</p>
      </div>

      <div
        className="bg-black  m-20 absolute -inset-x-0 -bottom-16 p-2
        rounded-lg text-white text-center  text-2xl"
      >
         <p>Next</p>
      </div>
    </div>
  );
};

export default GeneralProductDetails;
