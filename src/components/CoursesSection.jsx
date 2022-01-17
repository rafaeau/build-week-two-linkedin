import logo from '../assets/logo.png'
import thumbnail from '../assets/thumbnail.jfif'
import thumbnail2 from '../assets/thumbnail2.jfif'
import thumbnail3 from '../assets/thumbnail3.png'

const CoursesSection = () => {
    return (
        <div className='courses-wrap mt-4'>
            <div className='ml-3 pt-3'>
                <div><img src={logo} alt='logo' className='logo-img imgFluid' /><span className='learning ml-1'>LEARNING</span></div>
                <div>Add new skills with these courses, free for 24 hours</div>
            </div>
            <div className='ml-3 pt-3'><img src={thumbnail} alt='thumbnail' className='thumbnail imgFluid' /><span className='videos-title ml-2 pt-n3'>Building a GraphQL Project</span></div>
            <hr/>
            <div className='ml-3'><img src={thumbnail2} alt='thumbnail' className='thumbnail imgFluid' /><span className='videos-title ml-2'>Build a React Application</span></div>
            <hr/>
            <div className='ml-3'><img src={thumbnail3} alt='thumbnail' className='thumbnail imgFluid' /><span className='videos-title ml-2'>Building Vue and Node Apps</span></div>
            <hr/>
            <h5 className="see-more-courses">See more courses</h5>
        </div>
    )
}

export default CoursesSection