// import './App.css';
import React, { useEffect, useState } from 'react';
import SigninHome from './components/SigninHome.js';
import Login from './components/Login';
import Signup from './components/Signup.js';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NewLyricForm from './components/NewLyricForm.js';
import EditLyric from './components/EditLyric.js';
import {
  Switch, Route, useHistory
} from 'react-router-dom'

function App() {

  const production = "https://lyricbook-backend.herokuapp.com/"
  const development = "http://localhost:3000/"
  const url = (process.env.NODE_ENV === 'production' ? production : development)

  const production_front = ""
  const development_front = ""
  const url_front = (process.env.NODE_ENV === 'production' ? production_front : development_front)

  console.log(process.env.PUBLIC_URL)

  // http://localhost:4000/lyricbook-frontend/

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [lyrics, setLyrics] = useState([])
  const [lyricShow, setLyricShow] = useState([])
  const [lyricClicked, setLyricClicked] = useState(false)
  const [lyricEditor, setLyricEditor] = useState([])
  const [counter, setCounter] = useState(0)

  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    fetch(`${url}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setLoggedIn(true)
          setUser(data.user)
          setLyrics(data.user.lyrics)
          // setLyricEditor(data.user.lyrics)
        });
      } else {
        console.log("please log in")
      }
    });
  }, [counter]);

  function addNewLyric(lyric) {
    const token = localStorage.getItem("jwt");
    fetch(`${url}/lyrics`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ ...lyric, user_id: user.id })
    })
      .then(res => res.json())
      .then((data) => {
        setLyrics([data, ...lyrics])
      })
      .then(() => setCounter(counter + 1))
  }

  function editLyric(id) {
    console.log("Clicked!")
    const token = localStorage.getItem("jwt");
    fetch(`${url}/lyrics/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(lyricEditor)
    })
      .then(res => res.json())
      .then((updatedLyric) => {
        let oldLyrics = lyrics.filter(lyric => lyric.id !== id)
        let newLyrics = [updatedLyric, ...oldLyrics]
        setLyrics(newLyrics)
      })
      .then(() => setCounter(counter + 1))
  }

  function deleteLyric(id) {
    const token = localStorage.getItem("jwt");
    fetch(`${url}/lyrics/${id}`, {
      method: 'DELETE',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => setLyrics(lyrics.filter((lyric) => lyric.id !== id)))
      .then(() => setCounter(counter + 1))
  }

  function toHome() {
    history.push(`${url_front}/home`)
}

  function toDash() {
    history.push(`${url_front}/dashboard`)
  }

  function toProfile() {
    history.push(`${url_front}/profile`)
  }

  function toLyricSubmission() {
    history.push(`${url_front}/lyric-submission`)
  }

  function toLyricEditor() {
    history.push(`${url_front}/lyric-editor`)
  }

  function handleLogin(currentUser) {
    setUser(currentUser);
    setLoggedIn(true)
  }

  function handleLogout() {
    localStorage.clear()
    setUser(null);
    setLoggedIn(false)
    history.push("/login")
  }

  function handleShowLyric(id) {
    setLyricShow(user.lyrics.find(lyric => lyric.id === id))
    setLyricClicked(true)
  }

  function handleShowAllLyrics() {
    setLyricClicked(false)
  }

  function handleTitleChange(e) {
    setLyricEditor({ ...lyricEditor, title: e.target.value })
  }

  function handleArtistChange(e) {
    setLyricEditor({ ...lyricEditor, artist_name: e.target.value })
  }

  function handleContentChange(e) {
    setLyricEditor({ ...lyricEditor, content: e.target.value })
  }

  function handleCopyrightChange(e) {
    setLyricEditor({ ...lyricEditor, copyright_name: e.target.value })
  }

  function handleShowEditor(id) {
    // history.push("/lyric-editor")
    toLyricEditor()
    setLyricEditor(lyrics.find(lyric => lyric.id === id))
  }

  return (

    <div className="app">
      <Switch>
        <Route exact path="/">
          <SigninHome />
        </Route>

        <Route exact path="/login">
          <Login
            handleLogin={handleLogin}
          />
        </Route>

        <Route exact path="/signup">
          <Signup
            handleLogin={handleLogin}
          />
        </Route>

        {loggedIn ?
          <div>
            <Route exact path="/home">
              <Home
                onLogout={handleLogout}
                user={user}
                toDash={toDash}
                toHome={toHome}
                toProfile={toProfile}
              />
            </Route>

            <Route exact path="/dashboard">
              <Dashboard
                user={user}
                onLogout={handleLogout}
                handleShowLyric={handleShowLyric}
                handleShowAllLyrics={handleShowAllLyrics}
                lyricClicked={lyricClicked}
                deleteLyric={deleteLyric}
                lyricShow={lyricShow}
                handleShowEditor={handleShowEditor}
                toLyricSubmission={toLyricSubmission}
                toHome={toHome}
                toProfile={toProfile}
              />
            </Route>

            <Route exact path="/profile">
              <Profile
                user={user}
                onLogout={handleLogout}
                toHome={toHome}
                toProfile={toProfile}
              />
            </Route>

            <Route exact path="/lyric-submission">
              <NewLyricForm
                addNewLyric={addNewLyric}
                toDash={toDash}
              />
            </Route>

            <Route exact path="/lyric-editor">
              <EditLyric
                user={user}
                editLyric={editLyric}
                handleTitleChange={handleTitleChange}
                handleArtistChange={handleArtistChange}
                handleContentChange={handleContentChange}
                handleCopyrightChange={handleCopyrightChange}
                id={lyricEditor.id}
                title={lyricEditor.title}
                artist_name={lyricEditor.artist_name}
                content={lyricEditor.content}
                copyright_name={lyricEditor.copyright_name}
                toDash={toDash}
              />
            </Route>
          </div>
          :
          <SigninHome />
        }
      </Switch>
    </div>

  );
}

export default App;