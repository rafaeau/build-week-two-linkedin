import React from "react";
import "./CentralPost.css";
import userImg from "../../assets/user.jfif";
import InputOptions from "./InputOptions";
import { GoThumbsup } from "react-icons/go";
import { FaRegCommentDots } from "react-icons/fa";
import { RiShareForwardLine, RiSendPlaneLine } from "react-icons/ri";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { BiWorld } from "react-icons/bi";

function Posts(props) {
  const { text, createdAt, image, user } = props;
  return (
    <div className="post">
      <div className="d-flex">
        <img src={userImg} alt="profile-image" className="profile-pic-posts" />

        <div className="post-header">
          <div className="post-info">
            <Link to={"/profile/" + user._id + "/experiences"}>
              <h6 className="username-Central">
                {" "}
                {user.name} {user.surname}
              </h6>
            </Link>
            <div className="small-grey-txt mt-n2 text-center">{user.title}</div>

            <p className="d-flex align-items-center justify-content-start">
              {format(parseISO(createdAt), "dd/mm/yyyy")}{" "}
              <BiWorld className="ml-1 cursor-pointer" />
            </p>
          </div>
        </div>
      </div>
      <div className="post-body">
        <p>{text}</p>
      </div>

      <img
        src={image}
        alt="Post-Image"
        style={{ width: "100%", height: 300, objectFit: "cover" }}
      />
      <div className="post-buttons">
        <InputOptions Icon={GoThumbsup} title="Like" color="gray" />
        <InputOptions Icon={FaRegCommentDots} title="Comment" color="gray" />
        <InputOptions Icon={RiShareForwardLine} title="Share" color="gray" />
        <InputOptions Icon={RiSendPlaneLine} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Posts;
