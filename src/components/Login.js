import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Login({ handleLogin }) {

    const production = "https://lyricbook-backend.herokuapp.com/"
    const development = "http://localhost:3000/"
    const url = (process.env.NODE_ENV === 'production' ? production : development)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const history = useHistory();

    function onLogin(username, password) {
        fetch(`${url}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            user: {
              username: `${username}`,
              password: `${password}`
            }
          })
        }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              handleLogin(data.user)
              localStorage.setItem("jwt", data.jwt);
              history.push("/home")
            });
          } else {
            console.log("wrong username/password")
            response.json().then((data) => {
                setError(data.message)
            })
          }
        })
      }

    function handleSubmitLogin(e) {
        e.preventDefault()
        e.target.reset()
        onLogin(username, password)
    }

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmitLogin}>
                <h2 className="login-text">Login</h2>
                <input
                    className="login-inputs"
                    type="text"
                    id="username"
                    placeholder=" Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="login-inputs"
                    type="password"
                    id="password"
                    placeholder=" Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" type="submit">Login</button>

            </form>
            <h4 className="login-error">{error}</h4>

        </div>
    )
}

export default Login