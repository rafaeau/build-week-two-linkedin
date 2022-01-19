export const fetchProfiles = async () => {
    let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2NDI0NDE3ODksImV4cCI6MTY0MzY1MTM4OX0.c8a_yy-ROyiriWmK5LnQYY8Gmrz8smjTnxvGxtDu-24"
        }
    })
    let profiles = await response.json()
    return profiles
}

export const fetchExperiences = async (userId) => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2NDI0NDE3ODksImV4cCI6MTY0MzY1MTM4OX0.c8a_yy-ROyiriWmK5LnQYY8Gmrz8smjTnxvGxtDu-24"
        }
    })
    let experiences = await response.json()
    return experiences
}

export const fetchUser = async (userId) => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2NDI0NDE3ODksImV4cCI6MTY0MzY1MTM4OX0.c8a_yy-ROyiriWmK5LnQYY8Gmrz8smjTnxvGxtDu-24"
        }
    })
    let user = await response.json()
    return user
}

export const fetchPosts = async () => {
    let response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2NDI0NDE3ODksImV4cCI6MTY0MzY1MTM4OX0.c8a_yy-ROyiriWmK5LnQYY8Gmrz8smjTnxvGxtDu-24"
        }
    })
    let posts = await response.json()
    return posts
}