import Ad from "./Ad";
import CoursesSection from "./CoursesSection";
import LanguageBar from "./LanguageBar";
import PeopleAlsoViewed from "./PeopleAlsoViewed";
import PeopleYouMayKnow from "./PeopleYouMayKnow";

const Sidebar = () => {
  return (
    <div className="d-none d-md-block col-md-2">
      <LanguageBar />
      <Ad />
      <PeopleAlsoViewed btn={"Message"} />
      <PeopleYouMayKnow btn={"Connect"} />
      <CoursesSection />
      <Ad />
    </div>
  );
};

export default Sidebar;
