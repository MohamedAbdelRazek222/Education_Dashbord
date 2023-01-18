import React from "react";
import { AiFillBell } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
  <div className="NavBarTaila">
    <div className="NavBarTaila-container">
<div className="NavBarTaila">
<h1>Welcome Talia, </h1>
</div>
<div className="NavBarTaila-content">
  <button className="NavBarTaila-content-btn"><FiSearch /></button>
<input type="text" className="nosubmit" placeholder="Search..." />
<div>

<AiFillBell className="icon" />
</div>
<div>

<BsFillEnvelopeFill className="icon" />
</div>
<div className="right-side-navbar-content-img">

</div>
</div>
</div>


  </div> 
  );
}
