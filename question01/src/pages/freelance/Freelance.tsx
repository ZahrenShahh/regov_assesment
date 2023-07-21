import FreelanceLayout from "./FreelanceLayout";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SearchBar from "../../components/SearchBar";
const Freelance = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-slate-500  ">
      <div className=" h-20 ">
        <div className=" sticky top-10 ">
          <SearchBar />
        </div>
      </div>
      <div className="bg-blue-900  h-40 p-2 pt-10 pb-10  text-center text-w flex justify-between gap-3">
        <div className="bg-sky-700 h-30 w-20 rounded-xl">
          <p className="bg-slate-400 h-2/5 w-full rounded-xl text-xs font-mPlus pt-2">
            Programmer
          </p>
          <TerminalRoundedIcon className="text-white pt-2" fontSize="large" />
        </div>
        <div className="bg-sky-700 h-30 w-20 rounded-xl">
          <p className="bg-slate-400 h-2/5 w-full rounded-xl text-xs font-mPlus">
            Graphic Design
          </p>
          <DesignServicesRoundedIcon
            className="text-white pt-2"
            fontSize="large"
          />
        </div>
        <div className="bg-sky-700 h-30 w-20 rounded-xl">
          <p className="bg-slate-400 h-2/5 w-full rounded-xl text-xs font-mPlus pt-2">
            3D Artist
          </p>
          <ViewInArRoundedIcon className="text-white pt-2" fontSize="large" />
        </div>
        <div className="bg-sky-700 h-30 w-20 rounded-xl">
          <p className="bg-slate-400 h-2/5 w-full rounded-xl text-xs font-mPlus pt-2">
            Accountant
          </p>
          <AccountBalanceRoundedIcon
            className="text-white pt-2"
            fontSize="large"
          />
        </div>
      </div>
      <div className="bg-gray-500 h-3/5  ">
        {jobLists.map((list) => (
          <FreelanceLayout
            key={list.id}
            title={list.title}
            defination={list.defination}
          />
        ))}
      </div>
    </div>
  );
};

export default Freelance;

const jobLists = [
  { id: 1, title: "Megah Holder", defination: "Searching frealncer" },

  { id: 2, title: "adas", defination: "dad" },
  { id: 2, title: "adas", defination: "dad" },
  { id: 2, title: "adas", defination: "dad" },
];
