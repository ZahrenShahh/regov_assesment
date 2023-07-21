import React from 'react'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Link } from 'react-router-dom';
import Icons from '../../../components/Icons';


const PrintingDetails = () => {
  return (
    <div className="bg-red-400 h-screen">
    <div className="bg-red-500  flex justify-between p-2 ">
      <Link to="/home">
        <Icons title="" ikon={<KeyboardBackspaceIcon />} />
      </Link>
      <Icons title="" ikon={<DensityMediumIcon />} />
    </div>
    <div className=" h-52 flex justify-evenly mt-10 ">
      <div className="bg-white h-52 w-52 rounded-lg"></div>
      <div className="bg-white h-52 w-28 rounded-lg"></div>
    </div>
    <div className="bg-white h-2/5 mt-5 flex m-auto w-4/5 rounded-lg"></div>
    <div className="bg-black h-10 w-32 m-auto
     mt-10 rounded-lg text-white text-center  text-2xl">Next</div>
  </div>
  )
}

export default PrintingDetails