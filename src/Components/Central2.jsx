import "../App.css";
import { BiPencil } from "react-icons/bi";
import { BsBookmarkFill, BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineDown, AiOutlinePlus } from "react-icons/ai";
import { GiFallingStar } from "react-icons/gi";
import { FaSatelliteDish } from "react-icons/fa";

function Central() {
  return (
    <>
      {/* START CENTRAL COMPONENTS */}

      <div id="Central-Main-Component" className="row my-5 mx-auto">
        {/* 1st div container with avatar img */}
        <div
          id="Central-firstDiv"
          className="col-2 col-md-10 Central-container d-flex justify-content-center align-items-center mt-5 mx-auto"
        >
          <div>
            <img
              id="Central-img1"
              className=""
              src="https://th.bing.com/th/id/OIP.TMDnV7F7Sb0JyEb-LH_PWAHaEW?w=314&h=184&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            <img
              id="Central-avatar"
              src="https://th.bing.com/th/id/OIP.scExuNqSeL_zvoAQbH0gWAHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            <BiPencil id="Central-pencil1" />
            <div id="Central-First" className="ml-4">
              <div className="mx-2 px-2 d-flex flex-column justify-content-start ">
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row mt-5">
                    <h3 className="h3">Name Username</h3>
                    <p className="Central-p1 text-muted ml-1 mt-1">(He/Him)</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                    <img
                      className="Central-Strive-img cursor-pointer"
                      src="https://th.bing.com/th/id/OIP.aYDYDAPxRyTQ9yRbV-ps3wAAAA?w=161&h=180&c=7&r=0&o=5&pid=1.7"
                      alt=""
                    />
                    <div className="mt-3 cursor-pointer">
                      <a className="Central-decoration-none" href="#">
                        <p className="Central-p1 font-bolder ml-2">
                          Strive School
                        </p>
                      </a>
                    </div>
                  </div>

                  <BiPencil id="" className="Central-pencil2" />
                </div>

                <h6 className="text-semibold">Random stuff about this user</h6>

                <a className="Central-p1 my-2 text-muted" href="#">
                  Strive school
                </a>

                <p className="Central-p1 text-muted">
                  Paris, France, Location at: .... - <a href="">Contact Info</a>
                </p>
                <a href="">500+ connections</a>
              </div>
              <div
                id="Central-buttons-container"
                className="d-flex justify-content-start align-items-center my-4"
              >
                <button className="Central-btn-blue mx-2 px-3">Open to</button>
                <button className="Central-btn-grey mx-2 px-3">
                  Add section
                </button>
                <button className="Central-btn-round mx-2 px-3">More</button>
              </div>
            </div>
          </div>
        </div>
        {/* End 1st div container with avatar img */}

        {/* Start 2th Central div container */}
        <div className="col-2 col-md-10 Central-container Border-blue mt-4 mx-auto ml-3 py-4 ">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center mx-2 px-2">
              <img
                className="Central-random-post-img"
                src="https://th.bing.com/th/id/OIP.Nki7V7lfI-FANJdekDi2MwHaLR?w=120&h=183&c=7&r=0&o=5&pid=1.7"
                alt=""
              />
              <h4 className="text-semibold ml-3 mt-2">
                Stand out in recruiter searches
                <br />
                <p className="Central-p1 text-muted mt-2">
                  Candidates who earn a skill badge are 20% more likely to get
                  hired
                </p>
              </h4>
            </div>
            <AiOutlineClose className="Central-cross mr-3" />
          </div>
          <div className="d-flex justify-content-end mr-3">
            <button className="Central-btn-blue">Take skill quiz</button>
          </div>
        </div>
        {/* End 2th Central div container */}

        {/* Start 3th Central div container */}
        <div className="col-2 col-md-10 Central-container Central-BgColor-Grey mt-4 mx-auto py-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center mx-2 px-2 ">
              <h4 className="text-semibold ml-3 mt-2">
                Your Dashboard
                <br />
                <p className="Central-p1 text-muted mt-2">Private to you</p>
              </h4>
            </div>
            <div className="d-flex justify-content-start">
              <GiFallingStar />
              <p className="mx-2">All Star</p>
            </div>
          </div>
          <div className="d-flex flex-column px-3">
            <div className="Central-Common-border d-flex justify-content-between px-3">
              <div className="">
                <a href="#">
                  <h2 className="Central-Numbers">48</h2>
                  <p className="Central-P-Under-Number Central-decoration-none">
                    Who viewed your <br /> profile
                  </p>
                </a>
              </div>
              <div className="Central-left-border px-3 mr-4">
                <a href="#">
                  <h2 className="Central-Numbers">343</h2>
                  <p className="Central-P-Under-Number Central-decoration-none">
                    Post views
                  </p>
                </a>
              </div>
              <div className="Central-left-border px-3">
                <a href="#">
                  <h2 className="Central-Numbers">34</h2>
                  <p className="Central-P-Under-Number Central-decoration-none">
                    Search appearances
                  </p>
                </a>
              </div>
            </div>
            <div className="Central-Common-border d-flex flex-column justify-content-start px-3 my-3">
              <div className="d-flex justify-content-start align-items-baseline">
                <FaSatelliteDish className="mr-3" />
                <a className="Central-decoration-none" href="#">
                  <p>Creator mode: Off</p>
                  <p className="">
                    Get discovered, showcase content on your profile, and get
                    access to creator tools
                  </p>
                </a>
              </div>
              <hr />
              <div className="d-flex justify-content-start align-items-baseline">
                <BsFillPeopleFill className="mr-3" />
                <a className="Central-decoration-none" href="#">
                  <p>My Network</p>
                  <p className="Central-P-Under-Number">
                    My Network Manage your connections, events, and interests.
                    My items
                  </p>
                </a>
              </div>
              <hr />
              <div className="d-flex justify-content-start align-items-baseline">
                <BsBookmarkFill className="mr-3" />
                <a className="Central-decoration-none" href="#">
                  <p>My items</p>
                  <p className="Central-P-Under-Number">
                    Keep track of your jobs, courses and articles.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End 3th Central div container */}

        {/* Start 4th Central div container */}
        <div
          id="Central-Second"
          className="col-2 col-md-10 Central-container mt-4 mx-auto ml-3 py-4 "
        >
          <div className="d-flex flex-row justify-content-between mx-2 px-2 ">
            <h4 className="text-semibold">About</h4>
            <BiPencil id="" className="Central-pencil2" />
          </div>
          <div className="d-flex flex-column justify-content-start mt-4 mx-2 px-2 ">
            <p className="Central-p1 text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
              fugit quae quaerat sint corrupti adipisci ut iure cupiditate ipsam
              id illo non, animi architecto quos, ullam doloremque laudantium
              repellendus consectetur. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Recusandae quasi molestias rerum eaque
              accusantium similique quisquam ducimus voluptates, incidunt
              laboriosam eligendi nemo dolorem sapiente fugit sint iusto ratione
              ad! Consectetur.
            </p>
          </div>
        </div>
        {/* End 4th Central div container */}
        {/* Start 5th Central div container */}
        <div
          id="Central-Second"
          className="col-2 col-md-10 Central-container d-flex flex-column justify-content-start mt-4 mx-auto ml-3 py-4"
        >
          <div className="mx-2 px-2">
            <h4 className="text-semibold">Activity</h4>
            <a href="#">582 followers</a>
          </div>

          <div className="d-flex justify-content-start align-items-center mx-2 px-1">
            <img
              className="Central-random-post-img cursor-pointer"
              src="https://th.bing.com/th/id/OIP.kQIwQPBkDnBn84Ogf2WhpgHaG1?w=196&h=181&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            <a className="Central-decoration-none" href="#">
              <p className="Central-p1 font-bolder mx-2 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur dolorem, ipsam quibusdam accusantium obcaecati.
                <p className="text-muted">Name Username commented</p>
              </p>
            </a>
          </div>
          <div className="d-flex justify-content-start align-items-center mx-2 px-1">
            <img
              className="Central-random-post-img cursor-pointer"
              src="https://th.bing.com/th/id/OIP.kQIwQPBkDnBn84Ogf2WhpgHaG1?w=196&h=181&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            <a className="Central-decoration-none" href="#">
              <p className="Central-p1 font-bolder mx-2 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur dolorem, ipsam quibusdam accusantium obcaecati.
                <p className="text-muted">Name Username commented</p>
              </p>
            </a>
          </div>
          <div className="d-flex justify-content-start align-items-center mx-2 px-1">
            <img
              className="Central-random-post-img cursor-pointer"
              src="https://th.bing.com/th/id/OIP.kQIwQPBkDnBn84Ogf2WhpgHaG1?w=196&h=181&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            <a className="Central-decoration-none" href="#">
              <p className="Central-p1 font-bolder mx-2 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur dolorem, ipsam quibusdam accusantium obcaecati.
                <p className="text-muted">Name Username commented</p>
              </p>
            </a>
          </div>
          <div className="d-flex justify-content-start align-items-center mx-2 px-1">
            <img
              className="Central-random-post-img cursor-pointer"
              src="https://th.bing.com/th/id/OIP.kQIwQPBkDnBn84Ogf2WhpgHaG1?w=196&h=181&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            <a className="Central-decoration-none" href="#">
              <p className="Central-p1 font-bolder mx-2 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur dolorem, ipsam quibusdam accusantium obcaecati.
                <p className="text-muted">Name Username commented</p>
              </p>
            </a>
          </div>
          <div className="d-flex justify-content-start align-items-center mx-2 px-1">
            <img
              className="Central-random-post-img cursor-pointer"
              src="https://th.bing.com/th/id/OIP.kQIwQPBkDnBn84Ogf2WhpgHaG1?w=196&h=181&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            <a className="Central-decoration-none" href="#">
              <p className="Central-p1 font-bolder mx-2 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur dolorem, ipsam quibusdam accusantium obcaecati.
                <p className="text-muted">Name Username commented</p>
              </p>
            </a>
          </div>
        </div>
        {/* End 5th  Central div container */}
        {/* Start 6th Central div container */}
        <div
          id="Central-Second"
          className="col-2 col-md-10 Central-container d-flex flex-column justify-content-start mt-4 mx-auto ml-3 py-4"
        >
          <div className="d-flex flex-row justify-content-between mx-2">
            <h4 className="text-semibold">Experience</h4>
            <AiOutlinePlus className="Central-Plus-Icon mb-4" />
          </div>

          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                <img
                  className="Central-random-post-img cursor-pointer"
                  src="https://th.bing.com/th/id/OIP.0MG3R0maOfwdsab0MDOcywHaHa?w=201&h=200&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <div className="mt-3 cursor-pointer">
                  <a className="Central-decoration-none" href="#">
                    <p className="Central-p1 font-bolder mx-4">
                      Some random Working experience.
                      <p className="text-muted">
                        Name Company where Name Username worked for
                        <br /> Period from... to... when Name Username worked
                        for
                        <br /> Location Company where Name Username worked at
                      </p>
                    </p>
                  </a>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                <img
                  className="Central-random-post-img cursor-pointer"
                  src="https://th.bing.com/th/id/OIP.0MG3R0maOfwdsab0MDOcywHaHa?w=201&h=200&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <div className="mt-3 cursor-pointer">
                  <a className="Central-decoration-none" href="#">
                    <p className="Central-p1 font-bolder mx-4">
                      Some random Working experience.
                      <p className="text-muted">
                        Name Company where Name Username worked for
                        <br /> Period from... to... when Name Username worked
                        for
                        <br /> Location Company where Name Username worked at
                      </p>
                    </p>
                  </a>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                <img
                  className="Central-random-post-img cursor-pointer"
                  src="https://th.bing.com/th/id/OIP.0MG3R0maOfwdsab0MDOcywHaHa?w=201&h=200&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <div className="mt-3 cursor-pointer">
                  <a className="Central-decoration-none" href="#">
                    <p className="Central-p1 font-bolder mx-4">
                      Some random Working experience.
                      <p className="text-muted">
                        Name Company where Name Username worked for
                        <br /> Period from... to... when Name Username worked
                        for
                        <br /> Location Company where Name Username worked at
                      </p>
                    </p>
                  </a>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                <img
                  className="Central-random-post-img cursor-pointer"
                  src="https://th.bing.com/th/id/OIP.0MG3R0maOfwdsab0MDOcywHaHa?w=201&h=200&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <div className="mt-3 cursor-pointer">
                  <a className="Central-decoration-none" href="#">
                    <p className="Central-p1 font-bolder mx-4">
                      Some random Working experience.
                      <p className="text-muted">
                        Name Company where Name Username worked for
                        <br /> Period from... to... when Name Username worked
                        for
                        <br /> Location Company where Name Username worked at
                      </p>
                    </p>
                  </a>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                <img
                  className="Central-random-post-img cursor-pointer"
                  src="https://th.bing.com/th/id/OIP.0MG3R0maOfwdsab0MDOcywHaHa?w=201&h=200&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <div className="mt-3 cursor-pointer">
                  <a className="Central-decoration-none" href="#">
                    <p className="Central-p1 font-bolder mx-4">
                      Some random Working experience.
                      <p className="text-muted">
                        Name Company where Name Username worked for
                        <br /> Period from... to... when Name Username worked
                        for
                        <br /> Location Company where Name Username worked at
                      </p>
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <BiPencil id="" className="Central-pencil2" />
          </div>

          {/* Start Education Section */}
          <hr />
          <div className="d-flex flex-row justify-content-between mx-2 mt-3">
            <h4 className="text-semibold">Education</h4>
            <AiOutlinePlus className="Central-Plus-Icon mb-4" />
          </div>

          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                <img
                  className="Central-random-post-img cursor-pointer"
                  src="https://th.bing.com/th/id/OIP.aYDYDAPxRyTQ9yRbV-ps3wAAAA?w=161&h=180&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <div className="mt-3 cursor-pointer">
                  <a className="Central-decoration-none" href="#">
                    <p className="Central-p1 font-bolder mx-4">
                      Strive School
                      <p className="text-muted">
                        FrontEnd
                        <br /> 2021
                      </p>
                    </p>
                  </a>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                <img
                  className="Central-random-post-img cursor-pointer"
                  src="https://th.bing.com/th/id/OIP.QPXu4Znw-lVZad4i9g2VwgHaG-?w=193&h=182&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <div className="mt-3 cursor-pointer">
                  <a className="Central-decoration-none" href="#">
                    <p className="Central-p1 font-bolder mx-4">
                      Radford University
                      <p className="text-muted">
                        Languages and advances avances for advertisment advices
                        <br /> Activities and Secret blood societies
                      </p>
                    </p>
                  </a>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                <img
                  className="Central-random-post-img cursor-pointer"
                  src="https://th.bing.com/th/id/OIP.aYDYDAPxRyTQ9yRbV-ps3wAAAA?w=161&h=180&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <div className="mt-3 cursor-pointer">
                  <a className="Central-decoration-none" href="#">
                    <p className="Central-p1 font-bolder mx-4">
                      Strive School
                      <p className="text-muted">
                        FrontEnd
                        <br /> 2021
                      </p>
                    </p>
                  </a>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-start align-items-center mx-2 px-1">
                <img
                  className="Central-random-post-img cursor-pointer"
                  src="https://th.bing.com/th/id/OIP.QPXu4Znw-lVZad4i9g2VwgHaG-?w=193&h=182&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
                <div className="mt-3 cursor-pointer">
                  <a className="Central-decoration-none" href="#">
                    <p className="Central-p1 font-bolder mx-4">
                      Radford University
                      <p className="text-muted">
                        Languages and advances avances for advertisment advices
                        <br /> Activities and Secret blood societies
                      </p>
                    </p>
                  </a>
                </div>
              </div>
              <div className="d-flex my-3 align-items-center justify-content-start ml-2 Central-Shadow-Squared">
                <p className="text-muted">Show 1 more education</p>
                <AiOutlineDown className="mb-3 ml-2" />
              </div>
            </div>

            <BiPencil id="" className="Central-pencil2" />
          </div>
          {/*End Education Section */}
        </div>
        {/* End 6th Central div container
         */}
      </div>

      {/* END CENTRAL COMPONENT */}
    </>
  );
}

export default Central;
