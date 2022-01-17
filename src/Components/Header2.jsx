import "./Header.css"
import React from "react";
import "./Header2.css";
import { BsGrid3X3GapFill, BsFillBriefcaseFill ,BsSearch, BsLinkedin} from "react-icons/bs";
import {MdArrowDropDown } from "react-icons/md";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { HiUsers }  from "react-icons/hi";
import HeaderOption from "./HeaderOption"


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png" alt="" srcset="" />
        <div className="header__search">
          <BsSearch />
          <input type="text"  placeholder="Search"/>
        </div>
      </div>

      <div className="header__right">
      <HeaderOption Icon={AiFillHome} title="Home" />
        <HeaderOption Icon={HiUsers} title="My Network" />
        <HeaderOption Icon={BsFillBriefcaseFill} title="Jobs" />
        <HeaderOption Icon={AiFillMessage} title="Messaging" />
        <HeaderOption Icon={IoNotificationsSharp} title="Notifications" />
        <HeaderOption Icon={BiUserCircle} title="Me" />

        <MdArrowDropDown className="mr-5" style={{position:"relative",
       marginLeft:"-27px",float: 'right', marginTop:"4.5%",
        width:"30px", height:"30px", color:"grey" }}/>
      </div>

      <div className="header__right2">
      <HeaderOption Icon={BsGrid3X3GapFill} title="work" />
      <MdArrowDropDown style={{position:"relative",
       marginLeft:"-27px",float: 'right', marginTop:"36%",
        width:"30px", height:"30px", color:"grey" }}/>
      </div>
      <div >
      <a href="">Try Premium for <br /> free</a>
      </div>
    </div>
  );
}

export default Header;