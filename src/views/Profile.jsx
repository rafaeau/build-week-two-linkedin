import Central from "../Components/Central";
import Sidebar from '../Components/Sidebar';

function Profile() {
    return (
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-9 ml-n5'>
              <Central className='' />
            </div>
            <div className='col-2'>
              <Sidebar />
            </div>
          </div>
        </div>
    )
}

export default Profile
