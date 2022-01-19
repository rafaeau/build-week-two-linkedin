import Ad from '../Components/Ad';
import LeftColumnHP from '../Components/LeftColumnHP'

export default function Homepage() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-2">
                        <LeftColumnHP/>
                    </div>
                    <div className="col-7">
                        
                    </div>
                    <div className="col-3">
                        <Ad />
                    </div>
                </div>
            </div>
        </>
    )
}
