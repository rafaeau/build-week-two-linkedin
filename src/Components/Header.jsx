import React from "react";
import {
  Navbar,
  FormControl,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import "./Header.css";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

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
          className="mr-sm-2"
          style={{ height: "34px" }}
        />
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" ml-5 mr-auto d-flex justify-content-center">
          <div className="work d-flex flex-column align-content-center">
            <img src="https://raw.githubusercontent.com/CleverProgrammers/cp-linkedin-clone/f014d361d787029f15ea0f0f78c053d8c214f138/public/images/nav-home.svg" alt="" srcset="" />
            <Nav.Link href="#home">Home</Nav.Link>
          </div>

          <div className="work d-flex flex-column align-content-center">
            <Nav.Link href="#link">My Network</Nav.Link>
          </div>
          <div className="work d-flex flex-column align-content-center">
            <Nav.Link href="#link">Jobs</Nav.Link>
          </div>
          <div className="work d-flex flex-column align-content-center">
            <Nav.Link href="#link">Messaging</Nav.Link>
          </div>
          <div className="work d-flex flex-column align-content-center">
            {" "}
            <Nav.Link href="#link">Notifications</Nav.Link>{" "}
          </div>
          <div className="work d-flex flex-column align-content-center">
            <Nav.Link href="#link">Me</Nav.Link>{" "}
          </div>
        </Nav>
        <div className="right">
          <div className="work d-flex flex-column align-content-center">
            <BsGrid3X3GapFill className="align-self-center mt-3"></BsGrid3X3GapFill>
            <Nav.Link href="#link" className="">
              work
            </Nav.Link>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
