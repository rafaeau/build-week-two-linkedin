import user from '../assets/user.jfif'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleProfile = ({ btn, profile }) => {

    return (
        <div className='single-profile-wrap'>
            <div className='col-2'>
                <div className="profile-img-sm-wrap">
                    <img src={user} alt='advertisement' className='profile-img-sm imgFluid' />
                </div>
            </div>
            <div className='col-10 ml-2'>
                <span className='profile-title'>{profile.name} {profile.surname}</span><span className='profile-degree'> • 3rd+</span>
                <div className='profile-bio'>{profile.title}</div>
                <Button className='pro-btn mb-4 mt-2'><div className='mt-n1'>{btn}</div></Button>
            </div>
        </div>
    )
}

export default SingleProfile