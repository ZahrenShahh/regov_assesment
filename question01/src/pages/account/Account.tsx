import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import Icons from "../../components/Icons";
import imgp from "../../assets/images/Zahren.jpeg";
import { motion } from 'framer-motion';


type AccountProps = {
  setLoggedIn: any
}

const Account = (props:AccountProps) => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-200 to-slate-500 h-screen">
        <div className="h-2/6">
          <div className="bg-orange-50 absolute top-0 h-1/4 w-full rounded-b-3xl"></div>
          <div className="w-3/4 shadow-2xl rounded-2xl bg-zinc-300 absolute top-24 left-11 ">
            <div className="grid grid-rows-2 grid-flow-col gap-2 text-right font-smplus p-10 ">
              <p>Name: Muahammad Zahrenshahh</p>

              <p>ID: ****-**-5117</p>
            </div>
          </div>
          <div className="bg-neutral-50 shadow-xl  rounded-2xl h-28 w-2/6 absolute top-16 left-7 overflow-hidden">
            <img className=" h-full w-full object-cover" src={imgp} alt="" />
          </div>
        </div>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
         className="mt-auto pb-10">
          <div className="p-10 font-bold text-2xl text-white font-mPlus ">
            <Icons
              title="Account"
              ikon={<AccountCircleIcon fontSize="large" />}
            />
            <div>
              <p className="flex justify-between font-bold font-exo text-lg mt-2 ">
                Personal Info
                <Icons title="" ikon={<KeyboardArrowRightIcon />} />
              </p>
              <p className="flex justify-between font-bold font-exo text-lg mt-2">
                Security
                <Icons title="" ikon={<KeyboardArrowRightIcon />} />
              </p>
              <p className="flex justify-between font-bold font-exo text-lg mt-2">
                Payment Method
                <Icons title="" ikon={<KeyboardArrowRightIcon />} />
              </p>
            </div>
            <div
              className="mt-10
          "
            >
              <Icons
                title="Setting"
                ikon={<CircleNotificationsIcon fontSize="large" />}
              />
            </div>
            <div className="mt-5">
              <p className="flex justify-between font-bold font-exo text-lg mt-2 ">
                Payment
                <Icons title="" ikon={<KeyboardArrowRightIcon />} />
              </p>
              <p className="flex justify-between font-bold font-exo text-lg mt-2">
                Security Payment
                <Icons title="" ikon={<KeyboardArrowRightIcon />} />
              </p>
              <p className="flex justify-between font-bold font-exo text-lg mt-2">
                Report
                <Icons title="" ikon={<KeyboardArrowRightIcon />} />
              </p>
              <button
                onClick={() => props.setLoggedIn(false)}
                className="flex justify-between font-bold font-exo text-lg mt-2"
              >
                Log Out
                <Icons title="" ikon={<KeyboardArrowRightIcon />} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Account;
