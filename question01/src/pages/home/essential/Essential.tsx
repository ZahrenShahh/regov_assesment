import SearchBar from "../../../components/SearchBar";
import Exit from "../../../components/Exit";
import EssentialCard from "../../../components/EssentialCard";
import { products } from "../../../dummyData/ProductsData";
import img1 from "../../../assets/images/zahren02.jpeg";
import { motion } from "framer-motion";

const Essential = () => {
  //dummy server

  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500  ">
      <Exit />

      {/* Advertise bar */}

      <div className="bg-blue-400 h-60 rounded-tr-3xl rounded-bl-3xl overflow-hidden">
        <img className=" h-full w-full object-cover" src={img1} alt="" />
      </div>

      <div className="m-2 sticky top-12 ">
        <SearchBar />
      </div>

      {/* selection items */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-wrap justify-evenly pb-4"
      >
        {products.map((product) => (
          <EssentialCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.images[0]}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Essential;
