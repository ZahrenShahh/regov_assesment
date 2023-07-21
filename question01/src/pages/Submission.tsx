import Exit from "../components/Exit";

const Submission = () => {
  return (
    <div className="bg-gray-500 h-screen">
     <Exit />
      <div className="bg-black mt-10 h-1/4 rounded-lg  grid grid-rows-3 grid-flow-col gap-4 text-white">
        <div className="m-auto mt-5">
            <p className="flex justify-between m-2">
              Name
              <input type="text" placeholder="Full Name" className="bg-white ml-5  h-10 w-60  rounded-lg text-black"/>
            </p>
            <p className="flex justify-between m-2">
              Contact
              <input type="number" placeholder="01x-xxx-xxx" className="bg-white ml-5  h-10 w-60  rounded-lg text-black"/>
            </p>
            <p className="flex justify-between m-2">
              Email
              <input type="text" placeholder="Email@" className="bg-white  ml-5 h-10 w-60  rounded-lg text-black"/>
            </p>
        </div>
      </div>
      <textarea className="bg-white m-10  mt-10 h-1/2 w-4/5 rounded-lg"></textarea>
    </div>
  );
};

export default Submission;
