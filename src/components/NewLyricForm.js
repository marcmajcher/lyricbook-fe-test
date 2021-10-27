import React, { useState } from 'react';

function NewLyricForm({ addNewLyric, toDash }) {

    const [title, setTitle] = useState("")
    const [artist_name, setArtistName] = useState("")
    const [content, setContent] = useState("")
    const [copyright_name, setCopyrightName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()

        const newLyric = {
            title,
            artist_name,
            content,
            copyright_name,
        }

        addNewLyric(newLyric)

        toDash()
    }

    return (
        <div className="new-lyric-page">
            <button className="back-button" onClick={toDash}><ion-icon name="arrow-back-circle-outline"></ion-icon></button>
            <div className="lyric-form-container">
                <form className="new-lyric-form" onSubmit={handleSubmit}>
                    <input
                        className="title-input"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className="artist-input"
                        type="text"
                        placeholder="Artist"
                        value={artist_name}
                        onChange={(e) => setArtistName(e.target.value)}
                    />
                    <textarea
                        className="content-input"
                        type="text"
                        placeholder="Lyrics"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="resize-text-container">
                        <div className="text-and-icon">
                            <h5 className="resize-text">resize</h5>
                            <ion-icon name="caret-up-outline"></ion-icon>
                        </div>
                    </div>
                    <input
                        className="copyright-input"
                        type="text"
                        placeholder="© Copyright Name"
                        value={copyright_name}
                        onChange={(e) => setCopyrightName(e.target.value)}
                    />
                    <button className="submit-button" type="submit">Publish</button>

                </form>
            </div>
        </div>
    )
}

export default NewLyricForm