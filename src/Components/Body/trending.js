import React from 'react'
import popmusic from "../Assets/pop_music.png" ;
import './trending.css';
const Array=[1,2];

const Trending = () => {
    return (
        <div className="trending_container">
            <h3>Trending topic</h3>
            <section className="trending_elems">
                {
                    Array.map((e) =>{
                        return(
                            <div className="trending-img">
                                <img src={popmusic} alt=""/>  
                            </div>
                        )
                    })
                }
            </section>
            <section className="trending_elems">
                {
                    Array.map((e) =>{
                        return(
                            <div className="trending-img">
                                <img src={popmusic} alt=""/>  
                            </div>
                        )
                    })
                }
            </section>

            
        </div>
    )
}

export default Trending;
