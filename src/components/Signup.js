import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Signup({ handleLogin }) {

    const production = "https://lyricbook-backend.herokuapp.com/"
    const development = "http://localhost:3000/"
    const url = (process.env.NODE_ENV === 'production' ? production : development)

    const [newUsername, setUsername] = useState("")
    const [newPassword, setPassword] = useState("")
    const [bio, setBio] = useState("")
    const [profile_img, setProfileImg] = useState("")

    const [error, setError] = useState("")
    const history = useHistory();

    function onSignup(username, password, bio, profile_img) {
        fetch(`${url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    username: `${username}`,
                    password: `${password}`,
                    bio: `${bio}`,
                    profile_img: `${profile_img}`,
                },
            }),
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        handleLogin(data.user)
                        localStorage.setItem("jwt", data.jwt);
                        history.push("/home")
                    });
                } else {
                    console.log("form incorrectly filled out")
                    response.json().then((data) => {
                        setError(data.error)
                    })
                }
            })
    }

    function handleSubmitSignup(e) {
        e.target.reset()
        e.preventDefault()
        onSignup(newUsername, newPassword, bio, profile_img)
    }

    return (
        <div className="signup-page">
            <div className="signup-form-container">
                <form onSubmit={handleSubmitSignup} className="signup-form">
                    <h2 className="signup-text">Signup</h2>
                    <input
                        className="signup-inputs"
                        type="text"
                        id="username"
                        placeholder=" Username"
                        value={newUsername}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="signup-inputs"
                        type="password"
                        id="password"
                        placeholder=" Password"
                        value={newPassword}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className="signup-input-bio"
                        type="text"
                        id="password"
                        placeholder=" Tell us about yourself"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                    <input
                        className="signup-inputs"
                        type="text"
                        id="password"
                        placeholder=" Insert profile picture"
                        value={profile_img}
                        onChange={(e) => setProfileImg(e.target.value)}
                    />
                    <button type="submit" className="signup-button">Signup</button>
                </form>
                <h4 className="signup-error">{error}</h4>
            </div>

        </div>
    )
}

export default Signup