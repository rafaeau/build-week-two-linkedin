import { fetchProfiles } from '../apicalls'
import { useEffect, useState } from "react"
import SingleProfile from './SingleProfile'

const ProfilesMapping = (props) => {

    const [profiles, setProfiles] = useState()
    useEffect(() => {
        fetchProfiles().then((res) => setProfiles(res))
    }, [])

    return (
        <>
            {profiles && profiles.slice(0, 5).map((profile) => (
                <SingleProfile key={profile._id} btn={props.btn} profile={profile} />
            ))}
        </>
    )
}

export default ProfilesMapping