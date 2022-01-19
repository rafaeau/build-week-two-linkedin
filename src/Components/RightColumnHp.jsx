import "../App.css";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";
import Ad from './Ad'

export default function Homepage() {
  return (
    <>
      <div className="mt-4 pt-1" id="rightCol_Home">
        <div className=" innerDiv mx-3 mt-2 mb-2">
          <h5 className="mr-2" style={{ fontWeight: "bold", fontSize: "16px" }}>
            <span>LinkedIn News</span>
          </h5>
          <BsFillInfoSquareFill />
        </div>
        <div className="below mx-3">
          <div className="below_innerDiv">
            <FaDotCircle
              className="mr-2 mt-1"
              style={{ color: "#454545", width: "8px" }}
            />
            <p>
              <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                Something here
              </span>
            </p>
          </div>

          <h6 className="ml-3" style={{ marginTop: "-14px" }}>
            <span style={{ color: "#5E5E5E" }}>2d ago • 1867, readers</span>
          </h6>
        </div>
      </div>

      <Ad/>

      <div className="right_footer">
        <div className="inner_footer" style={{paddingLeft:"22%", paddingRight:"22%"}}>
          <a href="">About</a>
          <a href="">Accesibiility</a>
          <a href="">Help Center</a>
        </div>
        <div className="inner_footer" style={{paddingLeft:"25%", paddingRight:"25%"}}>
          <a href="">Impressum</a>
          <a href="">Privacy & Terms</a>
        </div>
        <div className="inner_footer" style={{paddingLeft:"27%", paddingRight:"27%"}}>
          <a href="">Ad choices</a>
          <a href="">Advertising</a>
        </div>
        <div className="inner_footer"  style={{paddingLeft:"10%", paddingRight:"10%"}}>
          <a href="">Business Services</a>
          <a href="">Get the LinkedIn app</a>
        </div>
        <div className="inner_footer"  style={{paddingLeft:"45%", paddingRight:"40%"}}>
          <a href="">More</a>
        </div>
      </div>

      <div style={{ width:"320px", marginLeft:"30%", marginTop:"-10%"}}>
      <img  src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" alt="" srcset="" style={{width:"80px"}}/>
      <span style={{color:"grey", fontSize:"12px", fontWeight:"400"}}>LinkedIn Corporation © 2022</span>
           
      </div>
    </>
  );
}
