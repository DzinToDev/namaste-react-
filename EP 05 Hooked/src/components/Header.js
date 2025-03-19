import { useEffect, useState } from "react";

const Header = () => {

  // let btnName = "Login"
  const [btnName, setBtnName] = useState("Login");

  console.log("Header render");

  useEffect(()=> {
    // when this useEffect is called ? - if no dependency array then every time component rendered useEffect is called. 
    console.log("useEffect called from header");
  }) // here dependency array is not mendetary and if the dependency array is empty then useEffect is called on only initial render just onece. 

  return (
    <nav className=" flex justify-between items-center py-6 ">
      <div className="logo">
        <h1 className="text-[#b28670]">Coffee</h1>
      </div>
      <div className="nav-right flex gap-10 items-center">
        <ul className="menu flex gap-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <button className="login px-4 py-2 text-white bg-zinc-400 cursor-pointer"
        onClick={()=> {
          // btnName= "LogOut"
          // setBtnName = "LogOut"; we cant directly modify this for that we have 2nd argument fun 
          btnName === "Login" ? setBtnName("Log Out") : setBtnName("Login"); // react updated this btn comp and also refresh the header component. it trigger the reconsiliation cycle.
          // console.log(btnName);

        }}
        >{btnName}</button>
      </div>
    </nav>
  );
};

export default Header;
