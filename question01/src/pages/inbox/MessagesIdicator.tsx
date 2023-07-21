import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Messages from "./Messages";

type MessageIndicatorProp = {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};

const MessageIndicator = (props: MessageIndicatorProp) => {
  return (
    <div className="bg-black  p-2 flex justify-evenly m-auto mt-auto w-2/4 rounded-full">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => props.setCurrentTab("message")}
        className={`text-white  ${
          props.currentTab == "message" ? "bg-green-500" : ""
        } rounded-3xl p-1 font-mPlus`}
      >
        Message
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => props.setCurrentTab("guideline")}
        className={`text-white ${
          props.currentTab == "guideline" ? "bg-green-500" : ""
        } rounded-3xl p-1 font-mPlus`}
      >
        Guideline
      </motion.button>
    </div>
  );
};

export default MessageIndicator;
