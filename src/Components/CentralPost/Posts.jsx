import React from "react";
import "./CentralPost.css";
import user from "../../assets/user.jfif";
import InputOptions from "./InputOptions";
import { GoThumbsup } from "react-icons/go";
import { FaRegCommentDots } from "react-icons/fa";
import { RiShareForwardLine, RiSendPlaneLine } from "react-icons/ri";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

function Posts(props) {
  const { username, text, createdAt, id, title, image } = props;

  console.log(Object.keys(props));
  return (
    <div className="post">
      <img
        src={image}
        alt="profile-image"
        style={{ width: "100%", height: 300 }}
      />
      <div className="post-header">
        <div className="post-info">
          <Link to={"/profile/" + id + "/experiences"}>
            <h6 className="username-Central">{username}</h6>
          </Link>
          <div className="small-grey-txt mt-2 text-center">{title}</div>

          <p>{format(parseISO(createdAt), "dd/mm/yyyy - HH:mm")}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{text}</p>
      </div>
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
