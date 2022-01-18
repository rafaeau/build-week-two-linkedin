import { useParams } from 'react-router-dom';

function ProfileExperiences() {

    let { userId } = useParams();

    return (
        <h2>{userId}</h2>
    )
}

export default ProfileExperiences
