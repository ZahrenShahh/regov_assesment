import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import ReportIcon from "@mui/icons-material/Report";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import RoofingIcon from "@mui/icons-material/Roofing";
import Icons from "./Icons";
import { Link, useNavigate } from "react-router-dom";
import { Variants, motion } from "framer-motion";

const Exit = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial={false}
      animate={menu ? "open" : "closed"}
      className="menu"
    >
      <div
        onClick={() => {
          setMenu(true);
        }}
        className={`bg-blue-400 h-1/5 w-2/5 absolute  right-2 rounded-lg mt-2 p-3 pt-10 text-white grid  ${
          menu == true ? "" : "hidden"
        } `}
      >
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: menu ? "auto" : "none" }}
        >
          
          <Link to="/home">
            <motion.li className="pb-4" variants={itemVariants}>
              <Icons title="Back to Home" ikon={<RoofingIcon />} />
            </motion.li>
          </Link>
          <motion.li className="pb-4" variants={itemVariants}>
            <Icons title="Report" ikon={<ReportIcon />} />
          </motion.li>
          <motion.li className="pb-2" variants={itemVariants}>
            <Icons title="Need Help?" ikon={<HelpCenterIcon />} />
          </motion.li>
        </motion.ul>
      </div>

      <div className="absolute w-full bg-transparent flex  justify-between  p-3 text-white ">
        <Link to="" onClick={() => navigate(-1)}>
          <Icons title="" ikon={<KeyboardBackspaceIcon />} />
        </Link>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            setMenu(!menu);
          }}
          className={menu == true ? "text-orange-300" : "text-white"}
        >
          <motion.div
            variants={{
              open: { rotate: 90 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <Icons title="" ikon={<DensityMediumRoundedIcon />} />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Exit;
