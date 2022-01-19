import adImg from "../assets/linkedin-ad.jpg";
import user from "../assets/user.jfif";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

export default function LeftColumnHP() {
  return (
    <>
      <div className="mt-4 pt-1 card-wrap">
        <div
          style={{
            backgroundColor: "rgb(0,102,153)",
            height: "50px",
            marginTop: "-5px",
            index: "-1",
          }}
        ></div>
        <div
          className="profile-img-md-wrap d-flex mx-auto"
          style={{ marginTop: "-30px" }}
        >
          <img src={user} alt="profile-image" className="profile-img-md" />
        </div>
        <h6 className="mt-3 mb-n1 text-center">Username</h6>
        <div className="small-grey-txt mt-2 text-center">
          CEO @ Strive School
        </div>
        <hr />
        <div className="small-grey-txt d-flex mx-3 justify-content-between">
          <span>Connections</span>
          <span style={{ color: "rgb(47,124,201)" }}>500+</span>
        </div>
        <div className="small-grey-txt mx-3 mt-n1" style={{ color: "black" }}>
          Grow your network
        </div>
        <div className="small-grey-txt d-flex mx-3 mt-1 justify-content-between">
          <span>Who viewed your profile</span>
          <span style={{ color: "rgb(47,124,201)" }}>153</span>
        </div>
        <hr />
        <div className="small-grey-txt mx-3">
          Access exclusive tools & insights
        </div>
        <div className="small-grey-txt mx-3 mt-n1" style={{ color: "black" }}>
          <RiCheckboxBlankFill
            style={{ color: "rgb(231,163,62)" }}
            className="mr-1 mt-n1"
          />
          Try premium for free
        </div>
        <hr />
        <div
          className="small-grey-txt mx-3 mt-n1 pb-3"
          style={{ color: "black" }}
        >
          <BsFillBookmarkFill
            style={{ color: "rgb(102,102,102)" }}
            className="mr-1 mt-n1"
          />
          My items
        </div>
      </div>

      <div className="mt-2 pt-1 card-wrap">
        <div className="small-grey-txt mx-3 mt-2" style={{ color: "black" }}>
          Recent
        </div>
        <div className="small-grey-txt mx-3 mt-1 pb-3">
          <FaUsers
            style={{ color: "rgb(102,102,102)" }}
            className="mr-1 mt-n1"
          />
          Recent one
        </div>
        <div className="small-grey-txt mx-3 mt-n3 pb-3">
          <FaUsers
            style={{ color: "rgb(102,102,102)" }}
            className="mr-1 mt-n1"
          />
          Recent name two
        </div>
        <div className="small-grey-txt mx-3 mt-n3 pb-3">
          <FaUsers
            style={{ color: "rgb(102,102,102)" }}
            className="mr-1 mt-n1"
          />
          Recent name three
        </div>
        <div
          className="small-grey-txt mx-3"
          style={{ color: "rgb(47,124,201)" }}
        >
          Groups
        </div>
        <div className="small-grey-txt mx-3 mt-1 pb-3">
          <FaUsers
            style={{ color: "rgb(102,102,102)" }}
            className="mr-1 mt-n1"
          />
          Group name one
        </div>
        <div className="small-grey-txt mx-3 mt-n3 pb-3">
          <FaUsers
            style={{ color: "rgb(102,102,102)" }}
            className="mr-1 mt-n1"
          />
          Group name two
        </div>
        <div className="small-grey-txt mx-3 mt-n3 pb-3">
          <FaUsers
            style={{ color: "rgb(102,102,102)" }}
            className="mr-1 mt-n1"
          />
          Group name three
        </div>
        <div className="small-grey-txt mx-3 mt-n3 pb-3">See all</div>
        <div
          className="small-grey-txt d-flex mx-3 justify-content-between"
          style={{ color: "rgb(47,124,201)" }}
        >
          <span>Events</span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
              marginTop: "-11px",
              color: "rgb(102,102,102)",
            }}
          >
            +
          </span>
        </div>
        <div
          className="small-grey-txt mx-3 mb-3"
          style={{ color: "rgb(47,124,201)" }}
        >
          Followed hashtags
        </div>
        <hr className="mt-n1" />
        <h5 className="see-more mb-0" style={{ fontSize: "16px" }}>
          Discover more
        </h5>
      </div>
    </>
  );
}
