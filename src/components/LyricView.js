import React from 'react'

function LyricView({ lyricShow, handleShowAllLyrics }) {

    // function handleScroll() {
    //     window.scrollBy({
    //       top: document.body.offsetHeight,
    //       left: 0, 
    //       behavior: 'smooth',
          
    //     });
    // }
    
    return (
        <div className="lyric-view">
            <button className="back-button" onClick={handleShowAllLyrics}><ion-icon name="arrow-back-circle-outline"></ion-icon></button>
            {/* <button onClick={handleScroll}>Auto Scroll</button> */}
            <div className="lyric-details-box-container">
                <div className="lyric-details-box">
                    <div className="title-artist-container">
                        <h1 className="lyric-title">{lyricShow.title}</h1>
                        <h2 className="lyric-artist">{lyricShow.artist_name}</h2>
                    </div>
                    <p className="lyric-content">{lyricShow.content}</p>
                    <div className="copyright-container">
                        <h5 className="lyric-copyright">© {lyricShow.copyright_name}</h5>
                        <h5 className="lyric-copyright">{lyricShow.copyright_year}</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LyricView