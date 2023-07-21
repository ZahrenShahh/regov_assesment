import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";

type inforFrelance = {
  title: String;
  defination: string;
};

const FreelanceLayout = ({ title, defination }: inforFrelance) => {
  return (
    <div className="pb-5">
      <div className="bottom-0 bg-gradient-to-b from-amber-50 to-slate-500 h-60 w-full rounded-t-lg p-5 ">
        <motion.div
          animate={{ fontSize: 50 }}
          className="h-1/5 w-1/3 bg-green-500 rounded-lg text-white text-center p-2 font-mPlus text-lg "
        >
          JOB
        </motion.div>
        <div className="m-5 flex gap-4 ">
          <PersonIcon fontSize="large" />
          <p>{title}</p>
         
        </div>
        <div className="m-5 flex gap-4 ">
          
          <WorkIcon fontSize="large" />
          <p>{defination}</p>
        </div>
      </div>
    </div>
  );
};

export default FreelanceLayout;
