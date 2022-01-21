import React from "react";
import "./Header.css";
import {
  BsGrid3X3GapFill,
  BsFillBriefcaseFill,
  BsSearch,
  BsLinkedin,
} from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import HeaderOption from "./HeaderOption";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "white",
        borderBottom: "0.1px solid lightgrey",
      }}
    >
      <div className="header">
        <div className="header__left">
          <img
            src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png"
            alt=""
            srcset=""
          />
          <div className="header__search">
            <BsSearch />
            <input className="ml-1" type="text" placeholder="Search" />
          </div>
        </div>

        <div className="header__right">
          <p className="d-sm-block d-lg-none">
            <HeaderOption
              Icon={BsSearch}
              title="Search"
              style={{ marginLeft: "-11px" }}
              id="search_icon"
            />
          </p>
          <HeaderOption Icon={AiFillHome} title="Home" />
          <HeaderOption Icon={HiUsers} title="My Network" />
          <HeaderOption Icon={BsFillBriefcaseFill} title="Jobs" />
          <HeaderOption Icon={AiFillMessage} title="Messaging" />
          <HeaderOption Icon={IoNotificationsSharp} title="Notifications" />
          <HeaderOption Icon={BiUserCircle} title="Me" />

          <MdArrowDropDown
            className="mr-2"
            style={{
              position: "relative",
              marginLeft: "-42px",
              float: "right",
              marginTop: "2.9%",
              width: "30px",
              height: "30px",
              color: "grey",
            }}
          />
        </div>

        <div className="header__right2 mr-sm-0 mr-md-5">
          <span>
            <HeaderOption
              className="ml-2"
              Icon={BsGrid3X3GapFill}
              title="Work"
            />
            <MdArrowDropDown
              style={{
                position: "relative",
                marginLeft: "-42px",
                float: "right",
                marginTop: "-50%",
                width: "30px",
                height: "30px",
                color: "grey",
              }}
            />
          </span>
          <div className="try_premium">
            <a href="" style={{ color: "rgb(206, 163, 103)" }}>
              Try Premium for free
            </a>
          </div>{" "}
        </div>
      </div>
    </Container>
  );
}

export default Header;
