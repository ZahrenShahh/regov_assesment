import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/g01.png";
import img2 from "../../assets/images/g02.png";
import img3 from "../../assets/images/g03.png";
import InvestIndicator from "../../components/InvestIndicator";
import { motion } from "framer-motion";

const Graph = () => {
  const [currentMode, setCurrentMode] = useState("conservative");
  const [currentTab, setCurrentTab] = useState("past");

  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const checkBgColor = (currentMode: string) => {
    if (currentMode == "conservative") {
      return "bg-gradient-to-b from-blue-200 to-slate-500";
    }
    if (currentMode == "moderate") {
      return "bg-gradient-to-b from-yellow-200 to-slate-500";
    }
    if (currentMode == "extreme") {
      return "bg-gradient-to-b from-red-200 to-slate-500";
    }

    return "bg-gradient-to-b from-blue-200 to-slate-500";
  };
  const profit = () => {
    if (currentTab == "past") {
      return "100.00";
    }
    if (currentTab == "today") {
      return "8.90";
    }
    if (currentTab == "future") {
      return "108.90";
    }

    return "1000";
  };

  const graph = () => {
    if (currentMode == "conservative") {
      return  img1 ;
    }
    if (currentMode == "moderate") {
      return  img2 ;
    }
    if (currentMode == "extreme") {
      return  img3 ;
    }

    return  img1 ;
  };

  const generateDummyInvestmentData = (numDataPoints: number): any[] => {
    const data = [];
    const startDate = new Date();

    for (let i = 0; i < numDataPoints; i++) {
      const date = new Date(startDate.getTime() - i * 24 * 60 * 60 * 1000);
      const value = Math.random() * 1000; // Generate a random value for the investment

      data.push({ date, value });
    }

    return data;
  };

  useEffect(() => {
    const data = generateDummyInvestmentData(30);
    setChartData(data);
    setLoading(false);
  }, []);

  return (
    <div className={`${checkBgColor(currentMode)} h-screen`}>
      <div className="h-1/5 flex flex-col">
        <div className="mb-5">
          <InvestIndicator
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>
        <div className="bg-black p-5  flex justify-between m-auto  w-4/5 rounded-lg text-white ">
          <p>Amount:</p>
          <p className="font-bold ">RM :{profit()}</p>
        </div>
      </div>

      <div className="bg-white h-1/2  mt-14 flex m-auto w-4/5 rounded-lg overflow-hidden">
        <img className="object-bottom" src={graph()}></img>
      </div>

      <div className="p-2 flex justify-evenly  mt-8 rounded-lg">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentMode("conservative")}
          className={`text-black  p-2 ${
            currentMode == "conservative" ? "bg-green-500" : "bg-white"
          }  rounded-l-3xl text-center w-1/3  text-sm font-bold`}
        >
          <p className="font-mPlus ">Conservative</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentMode("moderate")}
          className={`text-black  p-2 ${
            currentMode == "moderate" ? "bg-green-500" : "bg-white"
          }  text-center w-1/3  text-sm font-bold`}
        >
          <p className="font-mPlus text-center">Moderate</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentMode("extreme")}
          className={`text-black  p-2 ${
            currentMode == "extreme" ? "bg-green-500" : "bg-white"
          } rounded-r-3xl text-center w-1/3  text-sm font-bold`}
        >
          <p className="font-mPlus">Extreme</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Graph;
