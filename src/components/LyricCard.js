import React from 'react';

function Lyric({ lyric, handleShowLyric, deleteLyric, handleShowEditor }) {

    return (
        <div>
            <div className="lyric-box">
                <h1 className="lyric-box-title" onClick={() => handleShowLyric(lyric.id)}>{lyric.title}</h1>
                <h2 className="lyric-box-artist">{lyric.artist_name}</h2>
                <div className="lyric-buttons-container">
                    <button onClick={() => handleShowEditor(lyric.id)} className="lyric-buttons">
                        <span className="button-icons">
                            <ion-icon name="create-outline"></ion-icon>
                        </span>
                    </button>
                    <button onClick={() => deleteLyric(lyric.id)} className="lyric-buttons">
                        <span className="button-icons">
                            <ion-icon name="trash-outline"></ion-icon>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Lyric