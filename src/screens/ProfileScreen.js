import React from 'react'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen_info'>
                    <img src='' alt="profile_logo" />
                    <div className='profileScreen_details'>
                        <h2>{user}</h2>
                        <div className='profileScreen_plans'>
                            <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen