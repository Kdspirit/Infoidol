import React from 'react'
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import YouTubeIcon from '@material-ui/icons/YouTube';
import HeadsetIcon from '@material-ui/icons/Headset';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const Sidebar = () => {

    
    return (
        <div className="sidebar">
            <div className="sidebar-elements">
                <span className="sidebar-icon"><HomeIcon/></span>
                <a href="#">ssssss</a>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><YouTubeIcon/></span>
                <a href="#">Videos</a>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><HeadsetIcon/></span>
                <a href="#">Audios</a>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><ListAltIcon/></span>
                <a href="#">Blogs</a>
            </div>

            <div className="sidebar-elements">
                <span className="sidebar-icon"><FavoriteBorderIcon/></span>
                <a href="#">   Watch List</a>
            </div>
            <div className="sidebar-elements">
                <span className="sidebar-icon"><PersonAddIcon/></span>
                <a href="#">Following</a>
            </div>
        </div>
    )
}

export default Sidebar
