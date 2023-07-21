import { useState } from "react";
import MessageIndicator from "./MessagesIdicator";
import { motion } from "framer-motion";

const Inbox = () => {
  const [currentTab, setCurrentTab] = useState("message");

  const messageContent = messages.map((message, index) => (
    <motion.div
      animate={{ y: 15 }}
      transition={{ type: "spring", stiffness: 100 }}
      key={index}
      className="m-4 text-justify pt-4  grid grid-cols-1 divide-y"
    >
      <p className="text-lg font-bold font-mPlus ">{message.name}</p>
      <p className="font-bold font-exo">{message.message}</p>
      <div className="grid grid-cols-1 divide-y " />
    </motion.div>
  ));

  const guidelinesContent = guidelines.map((guideline, index) => (
    <div
      key={index}
      className="m-4 text-justify pt-4 grid grid-cols-1 divide-y "
    >
      <p className="text-lg font-bold font-mPlus">{guideline.name}</p>
      <p className="font-bold font-exo ">{guideline.message}</p>
      <div className="grid grid-cols-1 divide-y" />
    </div>
  ));

  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500 h-screen ">
      <div className="h-1/4 flex pt-10">
        <MessageIndicator
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>
      <motion.div
        animate={{ y: -40 }}
        transition={{ type: "spring", stiffness: 100 }}
        className=" bg-gradient-to-b from-amber-50 to-slate-500 rounded-t-2xl pb-20"
      >
        {currentTab == "message" ? messageContent : guidelinesContent}
      </motion.div>
    </div>
  );
};

export default Inbox;

const messages = [
  {
    id: 1,
    name: "MrRain",
    message: "Hi there,You are the ceo of the ecomonei company.How ever you will be receive an invitation from us for your celebration",
  },

  {
    id: 2,
    name: "Ammar",
    message:
      "Freelance jobs in finance offer flexibility and independence. As a creator for a finance application, you can develop intuitive user interfaces, design interactive dashboards, and build robust financial models. Your expertise in financial analysis, data visualization, and programming will ensure a seamless user experience. Embrace the digital era and excel in the realm of finance.",
  },

  {
    id: 3,
    name: "Hasif",
    message: "Creative industry has hired you for creating digital marketing.",
  },

  {
    id: 4,
    name: "Yasir",
    message:
      "Hi, we are from Takaful. I would like to invite you in google meet for explaining why is important for having takaful. thaml you",
  },
  {
    id: 5,
    name: "Sarvage",
    message:
      "Searching someone who good knowledge in chemistry and good mix up colour.",
  },
];

const guidelines = [
  {
    id: 1,
    name: "Finance",
    message:
      "Taking care of our finances is crucial for long-term stability and security. First and foremost, we should create a budget that outlines our income, expenses, and savings goals. Tracking our expenses diligently helps us identify areas where we can cut back and save more. It's important to prioritize essential needs over wants to avoid unnecessary expenses. Building an emergency fund is essential to handle unforeseen circumstances. We should also aim to reduce debts by paying off high-interest loans first. Regularly reviewing our financial goals and adjusting our strategies keeps us on track. Finally, investing wisely and diversifying our portfolio can help grow our wealth over time.",
  },

  {
    id: 2,
    name: "Best way to spend",
    message:
      "Spending money wisely within the constraints of our budget is key to achieving financial success. First and foremost, we should prioritize essential needs such as housing, food, and healthcare. Allocating a portion of our budget towards savings is crucial for future financial security. It's important to set specific financial goals and allocate funds accordingly. When it comes to discretionary spending, it's wise to focus on experiences rather than material possessions, as they tend to provide more long-lasting satisfaction. Researching and comparing prices before making purchases helps us find the best deals and avoid unnecessary expenses. Additionally, practicing mindful spending and distinguishing between wants and needs can prevent impulse purchases and save money in the long run. Lastly, regularly reviewing and adjusting our budget ensures that we are making the most of our available resources.",
  },
];
