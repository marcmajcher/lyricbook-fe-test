import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import LyricsContainer from './LyricsContainer'
import LyricView from './LyricView'

function Dashboard({ user, handleShowLyric, handleShowAllLyrics, handleShowEditor, deleteLyric, lyricClicked, lyricShow, onLogout, toLyricSubmission, toHome, toProfile }) {

    return (
        <div className="dashboard">
            { lyricClicked ? 
            <div>
                <LyricView 
                    lyricShow={lyricShow}
                    handleShowAllLyrics={handleShowAllLyrics}
                />
            </div>
            :
            <div>
                <Header 
                    user={user}
                    onLogout={onLogout}
                    toHome={toHome}
                    toProfile={toProfile}
                />
                <NavBar />
                <LyricsContainer
                    user={user}
                    handleShowLyric={handleShowLyric}
                    deleteLyric={deleteLyric}
                    handleShowEditor={handleShowEditor}
                    toLyricSubmission={toLyricSubmission}
                />
            </div>
            }
        </div>
    )
}

export default Dashboard