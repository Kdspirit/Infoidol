import { ViewArraySharp } from '@material-ui/icons'
import React from 'react'
import Blogimg from "../Assets/blogimg.png";
import './Blog.css';
const Array=[1,2,3,4,5]

const Blog = () => {
    return (
        <div className="blog_container">
            <div className="blog_viewall">
                <h3>Trending_blog</h3>
                <button>View all</button>
            </div>
            <div className="Blog_elems">
                {
                    Array.map((e) => {
                        return(
                            <div className="uppercontainer">
                                <div className="blog_img">
                                <img src={Blogimg} alt=""/>
                                <h4>Blog Here</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, consequuntur corporis expedita illum ut dolore...</p>
                                <button>Read More</button>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Blog
