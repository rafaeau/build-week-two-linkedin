import React, { useEffect, useState } from "react";
import "./CentralPost.css";
import { IoMdCreate } from "react-icons/io";
import user from "../../assets/user.jfif";
import InputOptions from "./InputOptions";
import { BiCalendar, BiImage, BiWorld } from "react-icons/bi";
import { RiArrowDownSFill, RiArticleFill, RiVideoFill } from "react-icons/ri";
import Posts from "./Posts";
import { fetchPosts, fetchProfiles } from "../../apicalls";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";

function CentralPost(props) {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [image, setImage] = useState({});

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((res) => setPosts(res));
  }, []);

  const [profiles, setProfiles] = useState();
  const params = useParams();

  useEffect(() => {
    fetchProfiles().then((res) => setProfiles(res));
  }, [params]);

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
        const post = await resp.json();
        if (image) {
          imgUpload(post._id);
        }
      } else {
        console.log("your fetch did not go well!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmission = (e) => {
    if (e.target && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const imgUpload = async (postId) => {
    try {
      const formData = new FormData();
      formData.append("post", image);
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2NDI0NDE3ODksImV4cCI6MTY0MzY1MTM4OX0.c8a_yy-ROyiriWmK5LnQYY8Gmrz8smjTnxvGxtDu-24",
          },
          method: "POST",
          body: formData,
        }
      );
      if (resp.ok) {
        const image = await resp.json();
        return image;
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
                  <AiOutlineClose
                    className="cursor-pointer"
                    onClick={handleClose}
                  />
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex">
                    {profiles &&
                      profiles.slice(301, 302).map((profile) => (
                        <>
                          <img
                            src={user}
                            alt="profile-image"
                            className="profile-pic-posts mt-2 ml-2"
                          />
                          <div className="d-flex flex-column mt-n2 ml-2">
                            <h6 className="mt-3 my-2 mb-n1 text-center">
                              {profile.name} {profile.surname}
                            </h6>
                            <button className="button-modal mt-3">
                              <BiWorld /> Anyone <RiArrowDownSFill />
                            </button>
                          </div>
                        </>
                      ))}
                  </div>
                  <input
                    placeholder="What do you want to talk about?"
                    onChange={(e) => setPostText(e.currentTarget.value)}
                    type="text"
                    className="input-modal"
                  />
                  <input type="file" name="file" onChange={handleSubmission} />
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

      {/* DISPLAY OUR POST */}
      {posts &&
        posts
          .slice(307, 325)
          .filter((post) => post.image)
          .map((post) => <Posts key={post._id} {...post} />)}

      {/* END POSTS */}
    </div>
  );
}
export default CentralPost;
