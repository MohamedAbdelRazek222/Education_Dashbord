import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsCalendarMinus } from "react-icons/bs";
import { RiBook2Line } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";
import { TbSpeakerphone } from "react-icons/tb";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  const [isLogin,setIsLogin]=useState(true)
  const navLinks = [
    {
      icon: <FaHome />,
      text: "Dashboard",
    },
    {
      icon: <BsCalendarMinus />,
      text: "Schedule",
    },
    {
      icon: <RiBook2Line />,
      text: "Quizes",
    },
    {
      icon: <FaGraduationCap />,
      text: "Gradebook",
    },
    {
      icon: <BiLineChart />,
      text: "Performance",
    },
    {
      icon: <TbSpeakerphone />,
      text: "Announcement",
    },
  ];
const changeState=()=>{

  if(isLogin){
    setIsLogin(false)

  }else{

    setIsLogin(true)
  }


}
  return (
    <div className="coligo">
      <div className="coligo-panner">Coligo</div>
      <div className="coligo-content">
        <ul>
          {navLinks.map(({ icon, text }, indx) => {
            return (
              <li key={indx} className="single-nav-link" style={{ textAlign:'cecnter' }}>
              <div style={{ display:'flex',width:'100%',justifyContent: 'start',alignItems: 'center',paddingLeft:'10px'}}>   {icon} <NavLink to={`${text.toLowerCase()}`} className="nav-link-text">{text}</NavLink></div>
              </li>
              
            );
          })}
        </ul>
      </div>
      <NavLink to={isLogin ?  '/loginlogout' :'/' } className="login" onClick={changeState}>{isLogin ? 'Log Out' : 'Login'}</NavLink>

    </div>
  );
}
