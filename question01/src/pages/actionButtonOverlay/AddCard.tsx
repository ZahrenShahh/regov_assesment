import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";
import { products } from "../../dummyData/ProductsData";

const AddCard = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500 h-screen">
      <div className="bg-gradient-to-b from-orange-100 to-slate-500  rounded-b-lg p-12">
        <Carousel animation="slide" swipe navButtonsAlwaysInvisible>
          {creditCard.map((image) => (
            <div className="bg-red-400 h-40 m-auto rounded-lg ">
              <img src={image.toString()} alt=""  />
            </div>
          ))}
        </Carousel>
        
      </div>
      <div className="m-10 ">
        <p className=" font-mPlus ">ADD CARD</p>
        <p className=" flex pt-5 font-mPlus text-xs">
          Card number : <p className="ml-2  font-Unica">0000 0000 0000 0000</p>
        </p>
        <p className="m-2 flex pt-5 font-mPlus text-xs">
          Date : <p className="ml-2 font-Unica">00 00 </p>
          <p className="ml-20 flex pl-10">
            CVV : <p className="ml-2 font-Unica">00 00 </p>
          </p>
        </p>
        <div>
          <p className="flex pt-10 font-mPlus text-xs">
            Card holder : <p className="pl-16 font-">Muhd Zahrenshahh </p>
          </p>
          <p className=" flex pt-5 font-mPlus text-xs">
            Email : <p className="pl-16 text-left">zahrenshahhx@gmail.com </p>
          </p>
        </div>

        <div className=" flex justify-between pt-10 pb-20 font-mPlus text-sm">
          Save card for future payments
          <div className="bg-green-400 h-5 w-10 ml-2 rounded-lg ">
            <div className="bg-white h-5 w-5 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default AddCard;

type bankAcc = {
  id: number;
  images: string[];
};
////////////////////////////
const creditCard: bankAcc[] = [
  {
    id: 1,
    images: [
     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maybank2u.com.my%2Fmaybank2u%2Fmalaysia%2Fen%2Fpersonal%2Fcards%2Fdebit_cards_listing.page&psig=AOvVaw3IwWvSHGeYZjwT_dFke2YZ&ust=1687142813931000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIiim_Lmy_8CFQAAAAAdAAAAABAJ" ,
    ],
  },
  {
    id: 2,
    images: [
     "https://100comments.com/wp-content/uploads/2018/06/19.-CIMB-Debit-MasterCard.jpg",
    ],
  },
  {
    id: 3,
    images: [
     "https://100comments.com/wp-content/uploads/2018/06/19.-CIMB-Debit-MasterCard.jpg",
    ],
  },
];
