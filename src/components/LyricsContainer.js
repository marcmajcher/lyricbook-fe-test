import React from 'react';
import LyricCard from './LyricCard';

function LyricsContainer({ user, handleShowLyric, deleteLyric, handleShowEditor, toLyricSubmission }) {

    return (

        <div className="lyrics-container">
            {user.lyrics ? user.lyrics.map((lyric) => (
                <LyricCard
                    key={lyric.id}
                    lyric={lyric}
                    user={user}
                    handleShowLyric={handleShowLyric}
                    deleteLyric={deleteLyric}
                    handleShowEditor={handleShowEditor}
                />
            ))
                : null
            }
            <button className="add-lyric-box" onClick={toLyricSubmission}>
                <h1 className="add-lyric-box-title">New Song</h1>
            </button>
        </div>



    )
}

export default LyricsContainer