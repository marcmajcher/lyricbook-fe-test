import React from 'react'
import Header from './Header'
import NavBar from './NavBar'


function Home({ user, onLogout, toDash, toHome, toProfile }) {

    return (
        <div className="home">
            <Header
                user={user}
                onLogout={onLogout}
                toHome={toHome}
                toProfile={toProfile}
            />
            <NavBar />
            <div className="home-details">
                <h3 className="welcome-text">welcome to lyricbook!</h3>
                <button className="home-start-button" onClick={toDash}>
                    Get Started!
                </button>
            </div>
        </div>
    )
}

export default Home