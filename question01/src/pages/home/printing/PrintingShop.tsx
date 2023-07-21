import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import Exit from "../../../components/Exit";
import Carousel from "react-material-ui-carousel";

const PrintingShop = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500 ">
      <Exit />

      <div
        className="pt-5 flex flex-col 
     p-5 gap-3 "
      >
        {printingProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            path={product.path}
            title={product.tittle}
            img={product.image}
            discriptions={product.discription}
            Location={product.location}
            url={`/printing_shop/${product.id}`}
          />
        ))}
      </div>
      <Carousel animation="slide" swipe navButtonsAlwaysInvisible>
        {printingProducts.map((product) => (
          <div className="bg-blue-400  sticky bottom-0  w-full h-40 overflow-hidden ">
            <img
              className="object-cover "
              src={product.image.toString()}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PrintingShop;

export const printingProducts = [
  //object literal
  {
    id: 1,
    tittle: "Print express Seksyen 2(HQ)",
    location:
      "20, Jalan Bunga Tanjung 2/16, Section 2, 40000 Shah Alam, Selangor,",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMMPnFUjX601e6AiTMT4Ipl9nrFAtl1cp3KcnuK",
    discription:
      "Our Store online is operating 24 hours to ensure customers satisfaction  ... ****** ORDER TODAY >>> WE SHIP TOMORROW ******Premium Sticker for your Product and Packaging, Provided for you to complete your brand Presentation to your valued customersOur Service is totally complete from A to Z, You just Have to send us your Artwork and we will do the rest of the job ",
    path: "",
  },
  {
    id: 2,
    tittle: "Rugbi Print Station",
    location: "01-06, 1st Floor, Menara U2, 40100 Shah Alam, Selangor",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipON-GE8tppvDJmeJpuqyJ0g2bktnElDZvaZptiX=w433-h240-k-no",
    discription:
      "stapler with tape from RM1.50 to RM4.5 (pvc cover included)comb binding from RM2.5 to RM6.5 (pvc cover included)pvc coil binding from RM4.5 to RM10.50 (pvc cover included)glue binding from RM3.5 to RM9.50 (plain white / color + laminate)",
    path: "",
  },
  {
    id: 3,
    tittle: "Printstrom",
    location:
      "Brunsfield Riverview, 3, Jalan Yoga 13/42, Seksyen 13, 40100 Shah Alam, Selangor",
    image:
      "https://www.printstorm.com.au/uploads/images/seo-images/Print-Storm-Dubbo-Macquarie-Street.png",
    discription:
      "100% Brand new.For Light Color T-shirt only.No crack, peel of separate from the fabric.Perfect for you to print your own design or favorite picture onto a T-shirt.Suitable for all inkjet printers using dye based or pigmented inks.It is compatible with inkjet printers but it is not compatible with laser printers.Compatible with chemical fiber cloth/cotton cloth/blended cloth (not compatible with silk).",
    path: "",
  },
  {
    id: 4,
    tittle: "ADVANPRESS MARKETING SDN BHD",
    location:
      "17, Jalan Penyelenggara U1/77, Taman Perindustrian Batu 3, 40150 Shah Alam, Selangor",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPOGiidDOzyv-1Fo_w3rYHkEGPBIKmHUIQKlNS7=w681-h240-k-no",
    discription:
      "PLESE SEND YOUR FILE USE Format :- Jpeg file (HIGH RESOLUTION atleast 1MB),tiff file (HIGH RESOLUTION atleast 1MB),PDF file, Adobe Photoshop & Illustrator sahaja.",
    path: "",
  },
  {
    id: 5,
    tittle: "Sifuprint",
    location:
      "27A, Jalan Jubli Perak 22/1, Seksyen 22, 40300 Shah Alam, Selangor",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipP6BArDqdTwSCOe1GxKrJgdXXXAfdZcOGNwEJsm=w425-h240-k-no",
    discription:
      "HIGH QUALITY PRINT:MATERIAL: 128gsm Art PaperPRINT: 4c x 4cSIZE: A3/A4FINISHING: BindinORDER HARI INI, DELIVER HARI KEMUDIAN",
    path: "",
  },
];
