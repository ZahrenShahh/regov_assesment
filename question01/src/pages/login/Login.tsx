import { useNavigate } from "react-router-dom";
import imglogo from "../../assets/images/Group 21.png";
import { useState } from "react";
import React from "react";

type LoginProps = {
  setLoggedIn: any;
  setUser: any;
};

type UserInfo = {
  username: string;
  password: string;
};

const Login = (props: LoginProps) => {
  const [credentials, setCredentials] = useState<UserInfo>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (credentials.username == "zahren" && credentials.username == "zahren") {
      props.setLoggedIn(true);
      navigate("/home")
    } else {
      setError("Incorrect credentials")
    }
  };

  return (
    <div className="bg-gradient-to-b from-orange-100 to-slate-500 h-screen">
      <div className="h-1/2 ">
        <img src={imglogo} className="h-5/6  m-auto pb-12" />
      </div>

      <div className=" mt-10 text-center ">
        <input 
          placeholder="USERNAME"
          type="text"
          onChange={(e: any) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="m-auto  rounded-lg p-3 w-3/4 "
        />
        <input
          placeholder="PASSWORD"
          type="password"
          onChange={(e: any) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="m-auto my-10 rounded-lg p-3 w-3/4 "
        />
        <button
          onClick={handleSubmit}
          className="bg-slate-700 h-10 w-40 rounded-full font-mPlus"
        >
          LOGIN
        </button>
        <button className="block m-auto mt-2 h-10 w-40 rounded-full text-white font-mPlus">
          SIGN UP
        </button>
        <p className="text-red-600 text-xl">{error}</p>
      </div>
    </div>
  );
};

export default Login;
