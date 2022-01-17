import adImg from '../assets/linkedin-ad.jpg'
import {Card} from 'react-bootstrap'

const Ad = () => {
    return (
    <div>
        <Card className="ad-wrap mt-4">
         <Card.Img src={adImg} alt='advertisement' className='ad-img imgFluid'/>
        </Card>
    </div>
    )
}

export default Ad