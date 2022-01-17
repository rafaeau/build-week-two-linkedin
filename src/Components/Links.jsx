import React from "react";
import "./Footer.css";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

export default function Links() {
  return (
    <div className="links_wrapper">
      <div className="links md-4 ml-3">
        <a href="">About</a>
        <a href="">Community Guidelines</a>
        <a href="">Privacy and Terms</a>
        <a href="">Sales Solutions</a>
        <a href="">Safety Center</a>
      </div>
      <div className="links">
        <a href="">Accesibility</a>
        <a href="">Carrers</a>
        <a href="">Ad Choices</a>
        <a href="">Mobile</a>
      </div>
      <div className="links">
        <a href="">Talent Solutions</a>
        <a href="">Marketing Solutions</a>
        <a href="">Advertising</a>
        <a href="">Small Business</a>
      </div>
      <div className="links">
        <div className="d-flex">
          <BsQuestionCircleFill className=" footer_icon mr-2 mt-1"  />
          <a style={{color:"#696865"}} href="">Questions?</a>
        </div>
        <a href="#" className="manage">Visit our Help Center.</a>

        <div className="d-flex">
          <IoSettingsSharp className=" footer_icon mr-2 mt-1" />
          <a href="" style={{color:"#696865"}} >Manage your account and privacy</a>
        </div>
        <a href="" className="manage">Manage your account and privacy Go to your Settings.</a>
      </div>
      <div className="footer__search">
          <h6 className="text">Select Language</h6>
          <input type="text"  placeholder="Language"/>
          
        </div>
    </div>

    
  );
}
