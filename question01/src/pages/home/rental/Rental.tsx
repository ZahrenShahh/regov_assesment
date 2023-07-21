import React from "react";
import Card from "../../../components/Card";
import Icons from "../../../components/Icons";
import { Link } from "react-router-dom";
import Exit from "../../../components/Exit";
import img1 from "../../../assets/images/menara_u2_seksyen_13_.jpg";
import Carousel from "react-material-ui-carousel";
import { Product } from "../../../dummyData/ProductsData";

const Rental = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500 ">
      <Exit />

      <div
        className="pt-5 flex flex-col 
       p-5 gap-3 "
      >
        
          {rentalProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              path={product.path}
              title={product.tittle}
              price={product.price}
              discriptions={product.discription}
              img={product.image}
              Location={product.location}
              url={`/rental/${product.id}`}
            />
          ))}
       
      </div>
      <Carousel animation="slide" swipe navButtonsAlwaysInvisible>
        {rentalProducts.map((product) => (
          <div className="bg-blue-400  sticky bottom-0  w-full h-40 overflow-hidden ">
            <img
              className="object-cover "
              src={product.image.toString()}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Rental;

export const rentalProducts = [
  //object literal
  {
    id: 1,
    tittle: "Rumah Sewa Menara U",
    price: 300,
    location: "menara U",
    image: img1,
    discription: "",
    path: "/rentaldiscription",
  },
  {
    id: 2,
    tittle: "Rumah Sewa Menara U2",
    price: 250,
    location: "menara U2",
    image:
      "https://photos.spareroom.com/images/flatshare/listings/large/20/03/200397919.jpg",
    discription: "",
    path: "",
  },
  {
    id: 3,
    tittle: "Rumah Sewa Menara U",
    price: 300,
    location: "menara U",
    image:
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/c1/3a/c3.jpg",
    discription: "",
    path: "",
  },
  {
    id: 4,
    tittle: "SS2 Room for Rent",
    price: 210,
    location: "Syeksen 2",
    image: "https://s3.ap-southeast-1.amazonaws.com/gfg-origin-dsc.ibilik.com/production/images/rooms/7795091/7795091_1_ori.jpg",
    discription: "",
    path: "",
  },
  {
    id: 5,
    tittle: "Fully Furnish RITZE Perdana 1",
    price: 220,
    location: "Damansara Perdana",
    image: "https://media.karousell.com/media/photos/products/2021/11/9/rm1050_fully_furnish_ritze_per_1636467028_e710ab51",
    discription: "",
    path: "",
  },
];
