import React from "react";
import Exit from "../components/Exit";
import NameOfRestaurant from "../components/NameOfRestaurant";
import img1 from "../assets/images/mufid-majnun-PHOf-72Iw-A-unsplash.jpg";
import img2 from "../assets/images/iosi-pratama-g0dBbrGmMe0-unsplash.jpg";
import img3 from "../assets/images/yosuke-ota-kK-ARrS8ieo-unsplash.jpg";
import img4 from "../assets/images/advocator-sy-LP-pxV06FJs-unsplash.jpg";
import img5 from "../assets/images/eriks-irmejs-Prtmg56zIX0-unsplash.jpg";
import img6 from "../assets/images/roti kawin.jpg";
import { motion } from "framer-motion";

const Restaurant = () => {
  // const { restaurantId } = useParams<{ restaurantId: string}>()
  // const restaurant = restaurantList.find(
  //   restaurant => restaurant.id.toString() === restaurantId
  // )

  // if (!restaurant) return <div>Restaurant not found</div>

  return (
    <>
      <Exit />
      <div className="p-2 bg-gradient-to-b from-blue-200 to-slate-500 " >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          className="text-center text-white text-lg font-semibold m-10 font-mPlus"
        >
          Name Of Restaurant
        </motion.div>
        {restaurantList.map((restaurant) => (
          <NameOfRestaurant
            id={restaurant.id}
            title={restaurant.title}
            description={restaurant.description}
            images={restaurant.images}
            price={restaurant.price}
          />
        ))}
      </div>
    </>
  );
};

export default Restaurant;

type Restaurant = {
  id: number;
  title: string;
  description: string;
  images: string[];
  location: number[];
  price: number;
};

export const restaurantList: Restaurant[] = [
  {
    id: 1,
    title: "Nasi Ayam",
    description: "Fine Dining Experience",
    images: [img1,img2,img5],
    location: [3.0761249644640776, 101.54954779551716],
    price:6.05,
  },
  {
    id: 2,
    title: "Nasi Goreng",
    description: "The name itself is self explanatory.",
    images: [img2],
    location: [3.077978175879948, 101.54970856569366],
    price:5.15,
  },
  {
    id: 3,
    title: "Queteow Basah",
    description: "Family-friendly Restaurant",
    images: [img3],
    location: [3.076604256386936, 101.55084282493497],
    price:7.25,
  },
  {
    id: 4,
    title: "Laksa Johor",
    description: "Vegan Delights",
    images: [img4],
    location: [3.0758364246506233, 101.55196763246306],
    price:7.25,
  },
  {
    id: 5,
    title: "Laksa Peneng",
    description: "Vegan Delights",
    images: [img5],
    location: [3.0758364246506233, 101.55196763246306],
    price:6.79,
  },
  {
    id: 6,
    title: "Roti Kahwin",
    description: "Vegan Delights",
    images: [img6],
    location: [3.0758364246506233, 101.55196763246306],
    price:3.59,
  },
];
