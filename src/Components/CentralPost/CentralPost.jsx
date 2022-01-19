import React, { useEffect, useState } from "react";
import "./CentralPost.css";
import { IoMdCreate } from "react-icons/io";
import InputOptions from "./InputOptions";
import { BiCalendar, BiImage } from "react-icons/bi";
import { RiArticleFill, RiVideoFill } from "react-icons/ri";
import Posts from "./Posts";
import { fetchPosts, postNewPost } from "../../apicalls";

function CentralPost() {
  const [posts, setPosts] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    fetchPosts();
    // sendPost();
  }, []);

  /* const sendPost = (e) => {
    //e.preventDefault();
    postNewPost();
    setPosts(posts);
  }; */

  return (
    <div className="centralPost">
      {/* START CENTRAL INPUT CONTAINER */}
      <div className="Central-input-container">
        <div className="Central-input">
          <IoMdCreate />
          <form action="">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button /* onClick={sendPost}  */ type="submit">Send</button>
          </form>
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
      {posts.map((post) => (
        <Posts
        /* name={}
          description={}
          message={} */
        />
      ))}

      <Posts
        name="Name Username"
        description="test description default"
        message="Look at this right now!"
      />
      <Posts
        name="Name Username"
        description="test description default"
        message="Look at this right now!"
      />
      <Posts
        name="Name Username"
        description="test description default"
        message="Look at this right now!"
      />
      <Posts
        name="Name Username"
        description="test description default"
        message="Look at this right now!"
      />
      {/* END POSTS */}
    </div>
  );
}

export default CentralPost;
