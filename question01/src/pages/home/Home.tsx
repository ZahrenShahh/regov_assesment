import React from "react";
import StudentBarChoice from "../../components/StudentBarChoice";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MedicationRoundedIcon from '@mui/icons-material/MedicationRounded';
import ChairIcon from "@mui/icons-material/Chair";
import PrintIcon from "@mui/icons-material/Print";
import TapasRoundedIcon from '@mui/icons-material/TapasRounded';
import LocalConvenienceStoreRoundedIcon from '@mui/icons-material/LocalConvenienceStoreRounded';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import imgp from "../../assets/images/Zahren.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const className = "flex m-auto";
  const iconSize = "large";
  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500 h-screen">
      <div className="h-1/4 flex m-auto">
        <div className=" m-auto text-center">
          <motion.img
            animate={{ y: 5 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block h-1/4 w-1/4 rounded-full ring-2 ring-white "
            src={imgp}
            alt=""
          />
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="m-auto mt-5 font-mPlus"
          >
            ZAHRENSHAHH
          </motion.p>
        </div>
      </div>

      <motion.div
        animate={{ y: 30 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="h-3/4 bottom-0 bg-gradient-to-b from-amber-50 to-slate-500 rounded-t-3xl shadow-inner"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.20,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="text-center p-5  font-mPlus"
        >
          STUDENT CHOICE
        </motion.p>
        {/* ////////////////////////////////////////// */}

        <div className="flex justify-evenly m-4 gap-2  ">
          <Link className="font-mPlus" to="/food_beverages">
            <StudentBarChoice
              title="Food & Beverage"
              icon={<TapasRoundedIcon fontSize={iconSize} className={className} />}
            />
          </Link>
          <Link className="font-mPlus" to="/essential">
            <StudentBarChoice
              title="Essential"
              icon={
                <LocalConvenienceStoreRoundedIcon fontSize={iconSize} className={className} />
              }
            />
          </Link>
        </div>
        <div className="flex justify-evenly m-4 gap-2 ">
          <Link className="font-mPlus" to="/rental">
            <StudentBarChoice
              title="Rental"
              icon={<ChairIcon fontSize={iconSize} className={className} />}
            />
          </Link>
          <Link className="font-mPlus" to="/printing_shop">
            <StudentBarChoice
              title="Printing Shop"
              icon={<PrintIcon fontSize={iconSize} className={className} />}
            />
          </Link>
        </div>
        <div className="flex justify-evenly m-4 gap-2">
          <Link to="https://jknselangor.moh.gov.my/hsas/" className="font-mPlus">
            <StudentBarChoice
              title="Health Care"
              icon={<MedicationRoundedIcon fontSize={iconSize} className={className} />}
            />
          </Link>
          <Link to="https://bkm.hasil.gov.my/Account/Login" className="font-mPlus">
            <StudentBarChoice
              title="Help Desk"
              icon={<Diversity1RoundedIcon fontSize={iconSize} className={className} />}
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
