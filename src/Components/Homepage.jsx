import adImg from '../assets/linkedin-ad.jpg'

export default function Homepage() {
    return (
        <>
            <div className="mt-4 pt-1 first-card-wrap">
                <div className="profile-img-md-wrap d-flex mx-auto">
                    <img src={adImg} alt='profile-image' className='profile-img-md' />
                </div>
                <h6 className="mt-3 mb-n1 text-center">Username</h6>
                <div className='profile-bio text-center'>CEO @ Strive School</div>

                <hr className="mt-n1" />
                <h5 className="see-more">See more</h5>
            </div>
        </>
    )
}