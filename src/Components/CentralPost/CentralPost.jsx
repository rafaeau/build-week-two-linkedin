import React, { useEffect, useState } from "react";
import "./CentralPost.css";
import { IoMdCreate } from "react-icons/io";
import user from "../../assets/user.jfif";
import InputOptions from "./InputOptions";
import { BiCalendar, BiImage, BiWorld } from "react-icons/bi";
import { RiArrowDownSFill, RiArticleFill, RiVideoFill } from "react-icons/ri";
import Posts from "./Posts";
import { fetchPosts, postNewPost } from "../../apicalls";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

function CentralPost() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((res) => setPosts(res));
  }, []);

  const [postText, setPostText] = useState("");
  const whatever = { text: postText };

  const sendFetch = async () => {
    try {
      console.log("FIRST CONSOLE LOG--------", postText);
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2NDI0NDE3ODksImV4cCI6MTY0MzY1MTM4OX0.c8a_yy-ROyiriWmK5LnQYY8Gmrz8smjTnxvGxtDu-24",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(whatever),
        }
      );
      if (resp.ok) {
        const postedText = await resp.json();
        return postedText;
      } else {
        console.log("your fetch did not go well!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="centralPost">
      {/* START CENTRAL INPUT CONTAINER */}
      <div className="Central-input-container">
        <div className="d-flex">
          <div>
            <img
              src={user}
              alt="profile-image"
              className="profile-pic-posts mt-2 ml-2"
            />
          </div>
          <div className="Central-input">
            <IoMdCreate />
            <form action="">
              <input value={input} onClick={handleShow} type="text" />

              {/* START MODAL TO SHOW INPUT ONCLICK */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>Create a post</Modal.Title>
                  <AiOutlineClose onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex">
                    <img
                      src={user}
                      alt="profile-image"
                      className="profile-pic-posts mt-2 ml-2"
                    />
                    <div className="d-flex flex-column mt-n2">
                      <h6 className="mt-3 my-2 mb-n1 text-center">Username</h6>
                      <button className="button-modal">
                        <BiWorld /> Anyone <RiArrowDownSFill />
                      </button>
                    </div>
                  </div>
                  <input
                    placeholder="What do you want to talk about?"
                    onChange={(e) => setPostText(e.currentTarget.value)}
                    type="text"
                    className="input-modal"
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={sendFetch} type="submit">
                    Post
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* END MODAL TO SHOW INPUT ONCLICK */}
            </form>
          </div>
        </div>
        <div className="Central-inputOptions">
          <InputOptions Icon={BiImage} title="Photo" color="#70B5F9" />
          <InputOptions Icon={RiVideoFill} title="Videos" color="#7FC15E" />
          <InputOptions Icon={BiCalendar} title="Event" color="#E7A33E" />
          <InputOptions
            Icon={RiArticleFill}
            title="Write article"
            color="#FC9295"
          />
        </div>
      </div>
      {/* END CENTRAL INPUT CONTAINER */}

      {/* START POSTS */}

      {/* MAP THE POSTS AFTER POSTING THEM IN FETCH */}
      {posts &&
        posts
          .slice(1828, 1836)
          .map((post) => (
            <Posts
              key={post._id}
              id={post.user._id}
              username={post.username}
              title={post.user.title}
              text={post.text}
              createdAt={post.createdAt}
            />
          ))}

      {posts &&
        posts
          .slice(0, 20)
          .map((post) => (
            <Posts
              key={post._id}
              id={post.user._id}
              username={post.username}
              title={post.user.title}
              text={post.text}
              createdAt={post.createdAt}
            />
          ))}

      {/* END POSTS */}
    </div>
  );
}

export default CentralPost;
