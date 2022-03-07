import Central from "../Components/Central";
import Central2 from "../Components/Central2";
import Sidebar from "../Components/Sidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchExperiences, fetchUser } from "../apicalls";

function Profile() {
  let { userId } = useParams();

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchExperiences(userId).then((res) => setExperiences(res));
  }, []);

  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser(userId).then((res) => setUser(res));
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-9 ml-md-n5">
          {userId ? (
            <Central2 />
          ) : (
            <Central experiences={experiences} user={user} />
          )}
        </div>
        <div className="d-none d-md-block col-md-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Profile;
