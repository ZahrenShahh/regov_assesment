import React from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";

type eyeKon = {
  title: String;
  ikon: React.ReactElement;
};

const Icons = ({ title, ikon }: eyeKon) => {
  return (
    <div>
      <div>
        {ikon}
        {title}
      </div>
    </div>
  );
};

export default Icons;
