import React from 'react'
import '../scss/_video.scss'

export default function Video() {
    return (
        <div className="container">

            <div className="video-container  p-3 rounded shadow-5" id="video">
                <div className="video-header">
                    {/* <div className="lang-fr">French</div> */}
                    {/* <div className="lang-en">English</div> */}
                </div>
                <iframe class="responsive-iframe" src="https://www.youtube.com/embed/RfZCfQ1yMq8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



            </div>
        </div>
    )
}
