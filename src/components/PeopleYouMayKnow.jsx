import SingleProfile from "./SingleProfile"
import { IoIosArrowDown } from 'react-icons/io';

const PeopleYouMayKnow = (props) => {
    return (
    <div className="mt-4 pt-1 people-also-wrap">
        <h6 className="mt-3 ml-3 mb-4">People you may know</h6>
        <SingleProfile btn={props.btn}/>
        <SingleProfile btn={props.btn}/>
        <SingleProfile btn={props.btn}/>
        <SingleProfile btn={props.btn}/>
        <SingleProfile btn={props.btn}/>
        <hr className="mt-n1"/>
        <h5 className="see-more">See more <IoIosArrowDown/></h5>
    </div>
    )
}

export default PeopleYouMayKnow