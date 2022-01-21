import { useParams } from "react-router-dom";
import { fetchExperiences, fetchUser } from "../apicalls";
import Central from "../Components/Central";
import Sidebar from "../Components/Sidebar";
import { useEffect, useState } from "react";

function ProfileExperiences() {
  let { userId } = useParams();
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchExperiences(userId).then((res) => setExperiences(res));
  }, []);

  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser(userId).then((res) => setUser(res));
  }, []);

  {
    console.log(user);
  }
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-9 ml-n5">
            <Central experiences={experiences} user={user} />
          </div>
          <div className="col-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileExperiences;
