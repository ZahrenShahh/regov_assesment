import React from "react";
import { motion } from "framer-motion";


type StudentBarChoiceType = {
  title: String;
  icon: React.ReactElement;
};

const StudentBarChoice = ({ title, icon }: StudentBarChoiceType) => {
  return (
    <motion.div className=" bg-neutral-50 h-20 w-28 rounded-lg">
      
      <div className="h-4/5 flex">
        {icon}</div>
      <div className=" bg-neutral-400 h-5 rounded-b-lg text-orange-50 text-center text-xs">
        {title}
      </div>
    </motion.div>
  );
};

export default StudentBarChoice;