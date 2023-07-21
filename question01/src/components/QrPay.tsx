import React from "react";

type PaymentIndicatorProp = {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};

function QrPay(props: PaymentIndicatorProp) {
  return (
    <div>
      <div className="bg-black p-2 flex justify-evenly m-auto mt-auto w-2/4 rounded-full">
        <p
          onClick={() => props.setCurrentTab("Payment")}
          className={`text-white ${
            props.currentTab == "Payment" ? "bg-green-500" : ""
          } rounded-3xl p-1 font-mPlus`}
        >
          Payment
        </p>
        <p
          onClick={() => props.setCurrentTab("Receive")}
          className={`text-white ${
            props.currentTab == "Receive" ? "bg-green-500" : ""
          } rounded-3xl p-1 font-mPlus`}
        >
          Receive
        </p>
      </div>
    </div>
  );
}

export default QrPay;
