import Ad from "../Components/Ad";
import CentralPost from "../Components/CentralPost/CentralPost";
import LeftColumnHP from "../Components/LeftColumnHP";

export default function Homepage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <LeftColumnHP />
          </div>
          <div className="col-7">
            <CentralPost />
          </div>
          <div className="col-3">
            <Ad />
          </div>
        </div>
      </div>
    </>
  );
}