import React, { useEffect, useState } from "react";
import QrPay from "../../../components/QrPay";
import { Html5QrcodeScanner } from "html5-qrcode";
import ReceivePay from "./ReceivePay";

const Pay = () => {
  const [currentTab, setCurrentTab] = useState("Payment");
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 4 / 5,
        showZoomSliderIfSupported: true,
        rememberLastUsedCamera: false,
      },
      false
    );

    const success = (result: any) => {
      scanner.clear();
      setScanResult(result);
    };

    const error = (err: any) => {
      console.warn(err);
    };

    const handleQrPayment = () => {
      if (scanResult) return console.log(parseInt(scanResult, 10) + 20);
    };

    scanner.render(success, error);
    handleQrPayment();
  }, []);

  

  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500 h-screen">
      <div className=" h-1/5 ">
        <div className="pt-10">
          <QrPay currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
      </div>
      {scanResult ? (
        <div>
          <a>{scanResult}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
     
    </div>
  );
};

export default Pay;
