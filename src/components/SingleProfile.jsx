import adImg from '../assets/linkedin-ad.jpg'
import { Button } from 'react-bootstrap'

const SingleProfile = () => {
    return (
    <div className='single-profile-wrap'>
    <div className='col-2'>
        <div className="profile-img-sm-wrap">
        <img src={adImg} alt='advertisement' className='profile-img-sm imgFluid'/>
        </div>
    </div>
    <div className='col-10 ml-2'>
        <span className='profile-title'>Davide Spiga</span><span className='profile-degree'> • 3rd+</span>
        <div className='profile-bio'>Hyatt Regency Hong Kong Tsim Sha Tsui Executive Secretary</div>
        <Button className='pro-btn mb-4 mt-2'><div className='mt-n1'>Message</div></Button>
    </div>
    </div>
    )
}

export default SingleProfile