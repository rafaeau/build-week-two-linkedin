import CentralPost from "../Components/CentralPost/CentralPost";
import LeftColumnHP from "../Components/LeftColumnHP";
import RightColumnHp from "../Components/RightColumnHp";
import { fetchUser } from "../apicalls";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Homepage() {
  let { userId } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser(userId).then((res) => setUser(res));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row homepage">
          <div className="d-none d-md-block col-md-2">
            <LeftColumnHP user={user} />
          </div>
          <div className="col-sm-12 col-md-6 ml-5 mt-4">
            <CentralPost />
          </div>
          <div className="col-sm-6 mx-xs-auto ml-md-n4 d-md-block col-md-2">
            <RightColumnHp />
          </div>
        </div>
      </div>
    </>
  );
}
