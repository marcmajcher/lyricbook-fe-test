import React from 'react'

function Header({ user, onLogout, toHome, toProfile }) {

    return (
        <div className="header">
            <div className="prof-img-container">
                <img 
                    src={user.profile_img ? user.profile_img : "default-profile-picture.jpeg"} 
                    alt="avatar" 
                    className="header-prof"
                    onClick={toProfile}
                />
            </div>
            <h1 className="logo" onClick={toHome}>lyricbook</h1>
            <button onClick={onLogout} className="logout-button">
                <div className="logout-text">logout</div>
                <div className="logout-icon"><ion-icon  name="log-out-outline"></ion-icon></div>
            </button>
        </div>
    )
}

export default Header