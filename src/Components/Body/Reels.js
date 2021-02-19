import React from 'react'
import reel from "../Assets/reelimg.png";
import './Reels.css'
function Reels() {
    return (
        <div className="reels_container">
            <section className="reels_elems">
                <div className="reels_img">
                    <img src={reel} alt=""/>
                </div>
            </section>
            
        </div>
    )
}

export default Reels;
