import React from 'react';

const YoutubePlayer = ({movieTitle}) => {
    const youtubeSrc = `https://www.youtube.com/embed/${movieTitle.id.videoId} 공식 예고편?autoplay=1`;
    return (
        <div className='container centerAlign'>
            <div className='row'>
                <div className='col videoContainer' style={{ height: '100%' }}>
                    <iframe
                        title="Youtube video player"
                        allowFullScreen
                        src={youtubeSrc}
                        className='video'
                        allow='autoplay'
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default YoutubePlayer;
