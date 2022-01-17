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
       <HeaderOption Icon={BsSearch}  title="Search" style={{marginLeft:"-11px" }} id="search_icon"/>
       <HeaderOption Icon={AiFillHome} title="Home" style={{marginTop:"-3px  "}}/>
        <HeaderOption Icon={HiUsers} title="My Network" />
        <HeaderOption Icon={BsFillBriefcaseFill} title="Jobs" />
        <HeaderOption Icon={AiFillMessage} title="Messaging" />
        <HeaderOption Icon={IoNotificationsSharp} title="Notifications" />
        <HeaderOption Icon={BiUserCircle} title="Me" style={{marginLeft:"-11px"}}/>

        <MdArrowDropDown className="mr-3" style={{position:"relative",
       marginLeft:"-44px",float: 'right', marginTop:"3.5%",
        width:"30px", height:"30px", color:"grey" }}/>

      </div>

      <div className="header__right2">
      <HeaderOption Icon={BsGrid3X3GapFill} title="work" style={{paddingLeft:"-10%"}}/>
      <MdArrowDropDown style={{position:"relative",
       marginLeft:"-40px",float: 'right', marginTop:"36%",
        width:"30px", height:"30px", color:"grey" }}/>  
      </div>
      <div >
       <a href="" style={{color:" rgb(191, 146, 80)"}}>Try Premium for <br /> free</a>
      </div>
    </div>
  );
}

export default Header;