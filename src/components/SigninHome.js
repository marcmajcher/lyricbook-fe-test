import React from 'react'
import { Link } from 'react-router-dom'

function SigninHome() {

    return (
        <div className="signup-login-page">
            <h1 className="logo-signup-login">lyricbook</h1>
            <div className="signup-login-box">
                <h2 className="signup-login-text">Login or Signup</h2>
                <Link exact to="/login">
                    <button className="signin-home-buttons">Login</button>
                </Link>
                <Link exact to="/signup">
                    <button className="signin-home-buttons">Signup</button>
                </Link>
            </div>
        </div>
    )
}

export default SigninHome