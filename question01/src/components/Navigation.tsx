import React, { useState, useEffect } from "react";
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import HomeIcon from "@mui/icons-material/Home";
import WalletIcon from "@mui/icons-material/Wallet";
import BookIcon from "@mui/icons-material/Book";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import DoorbellRoundedIcon from '@mui/icons-material/DoorbellRounded';
import { Link } from "react-router-dom";
import { Variants, motion } from "framer-motion";

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [actionButton, setActionButton] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
  };

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <motion.div
        initial={false}
        animate={actionButton ? "open" : "closed"}
        className={`fixed  bottom-0 w-full p-5 items-center flex justify-evenly gap-5 text-zinc-100 rounded-t-2xl ${
          scrollPosition ? "bg-zinc-700" : ""
        } `}
      >
        <Link to="/home">
          <DoorbellRoundedIcon
            onClick={() => {
              setCurrentPage("/home");
              setActionButton(false);
              setScrollPosition(false);
            }}
            className={currentPage == "/home" ? "text-sky-300" : "text-white"}
          />
        </Link>
        <Link to="/graph">
          <EqualizerRoundedIcon
            onClick={() => {
              setCurrentPage("/graph");
              setActionButton(false);
            }}
            className={currentPage == "/graph" ? "text-sky-300" : "text-white"}
          />
        </Link>
        {/* THis is action button for dipaly true and false */}

        <motion.button whileTap={{ scale: 0.97 }}>
          <motion.div
            variants={{
              open: { rotate: 90 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <AddRoundedIcon
              onClick={() => setActionButton(!actionButton)}
              className={actionButton == true ? "text-sky-300" : "text-white"}
              fontSize="large"
            />
          </motion.div>
        </motion.button>

        <Link to="/inbox">
          <MailRoundedIcon
            onClick={() => {
              setCurrentPage("/inbox");
              setActionButton(false);
            }}
            className={currentPage == "/inbox" ? "text-sky-300" : "text-white"}
          />
        </Link>
        <Link to="/account">
          <Person2RoundedIcon
            onClick={() => {
              setCurrentPage("/account");
              setActionButton(false);
            }}
            className={
              currentPage == "/account" ? "text-sky-300" : "text-white"
            }
          />
        </Link>
      </motion.div>

      <motion.div
        animate={{ y: -10 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed bottom-16 grid grid-rows-3 gap-3 w-full place-items-center text-zinc-100 ${
          actionButton == false ? "hidden" : ""
        }`}
      >
        <Link
          onClick={() => {
            setActionButton(false);
            setCurrentPage("/payment");
          }}
          to="/payment"
        >
          <QrCodeScannerIcon />
        </Link>
        <Link
          onClick={() => {
            setActionButton(false);
            setCurrentPage("/addcard");
          }}
          to="/addcard"
        >
          <WalletIcon />
        </Link>
        <Link
          onClick={() => {
            setActionButton(false);
            setCurrentPage("/freelance");
          }}
          to="/freelance"
        >
          <BookIcon />
        </Link>
      </motion.div>
    </>
  );
};

export default Navigation;
