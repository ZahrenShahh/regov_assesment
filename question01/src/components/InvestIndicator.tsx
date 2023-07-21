import React, { useState } from "react";
import { motion } from 'framer-motion';

type MessageIndicatorProp = {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};



const InvestIndicator = (props: MessageIndicatorProp) => {
  return (
    <div className="bg-black p-2 flex justify-evenly m-auto mt-10  w-3/4 rounded-full">
      <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
        onClick={() => props.setCurrentTab("past")}
        className={`text-white px-5 ${
          props.currentTab == "past" ? "bg-green-500" : ""
        } rounded-3xl p-1`}
      >
        PAST
      </motion.button>
      <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
        onClick={() => props.setCurrentTab("today")}
        className={`text-white px-5 ${
          props.currentTab == "today" ? "bg-green-500" : ""
        } rounded-3xl p-1`}
      >
        TODAY
      </motion.button>
      
      <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
        onClick={() => props.setCurrentTab("future")}
        className={`text-white px-5 ${
          props.currentTab == "future" ? "bg-green-500" : ""
        } rounded-3xl p-1`}>FUTURE</motion.button>
    </div>
  );
};

export default InvestIndicator;
