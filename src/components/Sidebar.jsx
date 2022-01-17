import Ad from './Ad';
import CoursesSection from './CoursesSection';
import LanguageBar from './LanguageBar';
import PeopleAlsoViewed from './PeopleAlsoViewed';
import PeopleYouMayKnow from './PeopleYouMayKnow';

const Sidebar = () => {
    return (
        <>
            <LanguageBar />
            <Ad />
            <PeopleAlsoViewed btn={'Message'} />
            <PeopleYouMayKnow btn={'Connect'} />
            <CoursesSection />
            <Ad />
        </>
    )
}

export default Sidebar