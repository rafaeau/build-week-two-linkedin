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
          <div className="col-6 ml-5 mt-4">
            <CentralPost />
          </div>
          <div className="col-2 ml-n3">
            <Ad />
          </div>
        </div>
      </div>
    </>
  );
}
