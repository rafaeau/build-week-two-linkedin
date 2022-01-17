import "./App.css";
import { BiPencil } from "react-icons/bi";

function Central() {
  return (
    <>
      {/* START CENTRAL COMPONENTS */}

      <div className="row">
        {/* FIrst div container with avatar img */}
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
              <div className="mx-2 mt- px-2 d-flex flex-column justify-content-start ">
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row mt-5">
                    <h3 className="h3">Name Username </h3>
                    <p className="Central-p1 text-muted ml-1 mt-1">(He/Him)</p>
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
                <button className="Central-btn-blue mx-2">Open to</button>
                <button className="Central-btn-grey mx-2">Add section</button>
                <button className="Central-btn-round mx-2">...</button>
              </div>
            </div>
          </div>
        </div>
        {/* End Central div container with avatar img */}

        {/* Start Second Central div container */}

        <div
          id="Central-Second"
          className="col-2 col-md-10 Central-container mt-4 mx-auto ml-3 my-4"
        >
          <div className="d-flex flex-row justify-content-between">
            <h4 className="text-semibold">About</h4>
            <BiPencil id="" className="Central-pencil2" />
          </div>
          <div className="d-flex flex-column justify-content-start mt-4">
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
        {/* End Second Central div container */}

        {/* Start Third Central div container */}

        {/* End Third  Central div container */}
      </div>

      {/* END CENTRAL COMPONENT */}
    </>
  );
}

export default Central;
