import React from 'react'
import CTimage from "../Assets/reelimg.png";
import dp from "../Assets/la.jpg";
import './current_trending.css';
const Array=[1,2,3,4];

const CurrentTrending = () => {
    return (
        <div className="CT_container">
            <div className="viewall">
                <h3>Now Trending</h3>
                <button>View all</button>
            </div>
            <section className="CT_elems">
                {
                    Array.map((e) => {
                        return(
                            <div className="upperclass">
                                <div className="CT_Img">
                                    <img src={CTimage} alt=""/>
                                    <div className="content">
                                        <h3>Dance performance</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div> 
                                    <div className="followoption">
                                        <img src={dp} alt=""/>
                                        <div className="follow">
                                            <h4>Danny Dance Studio</h4>
                                            <a href="">Follow</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </section>
            
        </div>
    )
}

export default CurrentTrending;
