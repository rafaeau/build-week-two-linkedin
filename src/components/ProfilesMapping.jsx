import { fetchProfiles } from '../apicalls'
import { useEffect, useState } from "react"
import SingleProfile from './SingleProfile'
import { Link } from 'react-router-dom'

const ProfilesMapping = ({btn}) => {

    const [profiles, setProfiles] = useState()
    useEffect(() => {
        fetchProfiles().then((res) => setProfiles(res))
    }, [])

    return (
        <>
            {profiles && profiles.slice(295, 300).map((profile) => (
                <Link to={'profile/' + profile._id + '/experiences'}><SingleProfile key={profile._id} btn={btn} profile={profile} /></Link>
            ))}
        </>
    )
}

export default ProfilesMapping