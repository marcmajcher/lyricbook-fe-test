import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

function Profile({ user, onLogout, toHome, toProfile }) {

    return (
        <div>
            <Header
                user={user}
                onLogout={onLogout}
                toHome={toHome}
                toProfile={toProfile}
            />
            <NavBar />
            <div className="prof-items-container">
                <img src={user.profile_img ? user.profile_img : "default-profile-picture.jpeg"} alt="avatar" className="profile-img" />
                <div className="prof-details-container">
                    <h2 className="profile-name">{user.username}</h2>
                    <p className="profile-bio">{user.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile