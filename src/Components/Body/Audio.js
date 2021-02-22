import React from 'react'
import Audioimg from "../Assets/la.jpg";
import './Audio.css';
const Array=[1,2,3,4];

const Audio = () => {
    return (
        <div className="Audio_container">
            <div className="Audio_viewall">
                <h3>Top Audio</h3>
                <button>View all</button>
            </div>
            <div className="Audio_elems">
                {
                    Array.map((e) => {
                        return(
                            <div className="Audio_Img">
                                <img src={Audioimg} alt=""/>
                                <div className="description">
                                    <div className="musicdetail">
                                    <p>Lovely Background Music</p>
                                    <a href="" >Harsh Music</a>
                                    </div>
                                    <div className="duration">
                                        <h6>2.14</h6>
                                    </div>
                                </div> 
                            </div>
                        )
                    })    
                }    
            </div>

            <div className="Audio_elems ">
                {
                    Array.map((e) => {
                        return(
                            <div className="Audio_Img">
                                <img src={Audioimg} alt=""/>
                                <div className="description">
                                    <div className="musicdetail">
                                    <p>Lovely Background Music</p>
                                    <a href="" >Harsh Music</a>
                                    </div>
                                    <div className="duration">
                                        <h6>2.14</h6>
                                    </div>
                                </div> 
                            </div>
                        )
                    })    
                }    
            </div>

            <div className="Audio_elems">
                {
                    Array.map((e) => {
                        return(
                            <div className="Audio_Img">
                                <img src={Audioimg} alt=""/>
                                <div className="description">
                                    <div className="musicdetail">
                                    <p>Lovely Background Music</p>
                                    <a href="" >Harsh Music</a>
                                    </div>
                                    <div className="duration">
                                        <h6>2.14</h6>
                                    </div>
                                </div> 
                            </div>
                        )
                    })    
                }    
            </div>
            
            
            
        </div>
    )
}

export default Audio
