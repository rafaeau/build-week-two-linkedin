import React from "react";
import {
  Navbar,
  FormControl,
  Nav,
  Form,
  
} from "react-bootstrap";
import "./Header.css";
import { BsGrid3X3GapFill, BsFillBriefcaseFill ,BsSearch} from "react-icons/bs";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import {MdArrowDropDown } from "react-icons/md";


export default function Header() {
  return (


    <Navbar className="mainDiv">
      <Navbar.Brand href="#home" id="logo">
        <img src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png"></img>
      </Navbar.Brand>
      <Form inline>
        
        <FormControl
          type="text"
          placeholder="Search"
          className=" search mr-sm-2"
          style={{ height: "34px",}}
        />
        
      </Form>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
        
      <div className="px-4">
        <Nav className=" innerDiv ml-5 mr-auto d-flex justify-content-center px-5">
          <div className="work d-flex flex-column align-content-center pl-3">
            <AiFillHome className="nav_icon align-self-center mt-3 "/>
            <Nav.Link href="#home">Home</Nav.Link>
          </div>

          <div className="work d-flex flex-column align-content-center pl-3 ml-2">
            <img  className="nav_icon align-self-center mt-3 " style={{ width: '24px', height:"24px"}} src="https://raw.githubusercontent.com/CleverProgrammers/cp-linkedin-clone/f014d361d787029f15ea0f0f78c053d8c214f138/public/images/nav-network.svg"></img>

            <Nav.Link href="#link">My Network</Nav.Link>
          </div>
          <div className="work d-flex flex-column align-content-center pl-3 ml-2">
            <BsFillBriefcaseFill className="nav_icon align-self-center mt-3"/>
            <Nav.Link href="#link">Jobs</Nav.Link>
          </div>

          <div className="work d-flex flex-column align-content-center pl-3 ml-2">
            <AiFillMessage className="nav_icon align-self-center mt-3"/>
            <Nav.Link href="#link">Messaging</Nav.Link>
          </div>
          <div className="work d-flex flex-column align-content-center pl-3 ml-2">
            <IoNotificationsSharp className="nav_icon align-self-center mt-3"/>
            <Nav.Link href="#link">Notifications</Nav.Link>{" "}
          </div>
          <div className="work d-flex flex-column align-content-center pl-1">
            <BiUserCircle className="nav_icon align-self-center mt-3 ml-3"></BiUserCircle>
            <Nav.Link href="#link" className="ml-4">Me<MdArrowDropDown style={{position:"relative", marginLeft:"-5px",float: 'right', marginTop:"-12%", width:"30px", height:"30px" }}/></Nav.Link>
          </div>
        </Nav></div>

        <div className="right ">
          <Nav>
          <div className="work d-flex flex-column  mt-1">
            <BsGrid3X3GapFill className="nav_icon align-self-center mt-3" style={{marginLeft: "-30px"}}></BsGrid3X3GapFill>
            <Nav.Link href="#link"  style={{marginLeft: "-20px"}} className="">
              work <MdArrowDropDown style={{position:"relative", marginLeft:"-3px",float: 'right', marginTop:"-12%", width:"30px", height:"30px" }}/>
            </Nav.Link>
          </div></Nav>
        </div>
      
    </Navbar>
  );
}
