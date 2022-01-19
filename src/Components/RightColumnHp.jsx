import "../App.css";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";
import Ad from './Ad'

export default function Homepage() {
  return (
    <>
      <div className="mt-4 pt-1" id="rightCol_Home">
        <div className=" innerDiv mx-3 mt-2 mb-2">
          <h5 className="mr-2" style={{ fontWeight: "bold", fontSize: "18px" }}>
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
        <div className="inner_footer">
          <a href="">About</a>
          <a href="">Accesibiility</a>
          <a href="">Help Center</a>
        </div>
        <div className="inner_footer">
          <a href="">Impressum</a>
          <a href="">Privacy & Terms</a>
        </div>
        <div className="inner_footer">
          <a href="">Ad choices</a>
          <a href="">Advertisement</a>
        </div>
        <div className="inner_footer">
          <a href="">Business Services</a>
          <a href="">Get LinkedIn app</a>
        </div>
        <div className="inner_footer">
          <a href="">more</a>
        </div>
      </div>
    </>
  );
}
