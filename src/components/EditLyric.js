import React from 'react';

function EditLyric({ id, title, artist_name, content, copyright_name, editLyric, handleTitleChange, handleArtistChange, handleContentChange, handleCopyrightChange, toDash }) {

    function handleEditSubmit(e) {
        e.preventDefault()

        editLyric(id)
        toDash()
    }

    return (
        <div className="edit-page">
            <button className="back-button" onClick={toDash}><ion-icon name="arrow-back-circle-outline"></ion-icon></button>
            <div className="edit-lyric-form-container">
                <form className="edit-lyric-form" onSubmit={handleEditSubmit}>
                    <input
                        className="title-input"
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <input
                        className="artist-input"
                        type="text"
                        value={artist_name}
                        onChange={handleArtistChange}
                    />
                    <textarea
                        className="content-input"
                        type="text"
                        value={content}
                        onChange={handleContentChange}
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
                        value={copyright_name}
                        onChange={handleCopyrightChange}
                    />
                    <button className="submit-button"type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    )
}

export default EditLyric