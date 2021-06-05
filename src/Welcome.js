import React, { useState, useEffect } from "react";
import Logo from "./asset/logo-white.png";
import "./Welcome.css";

export default function Welcome() {
  const [validData, setValidData] = useState({
    fname: "",
    lname: "",
  });

  useEffect(() => {
    const SignUpData = localStorage.getItem("myData");
    const data = JSON.parse(SignUpData);
    setValidData({
      fname: data?.firstName,
      lname: data?.lastName,
    });
  }, []);

  return (
    <div className='welcome'>
      <header className='welcome__Body'>
        <div className='welcome__logBbox'>
          <img src={Logo} alt='logo' className='logo' />
        </div>
        <div className='welcome__textBox'>
          <h1 className='welcome__primary'>
            <span className='welcome__primary-main'>Welcome</span>
            <span className='welcome__primary-sub'>
              {validData.fname} {validData.lname}
            </span>
          </h1>
        </div>
      </header>
    </div>
  );
}
