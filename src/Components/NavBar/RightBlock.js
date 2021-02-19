import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';

const RightBlock = () => {
    return (
        <section className="rightBlock">
            <a href="#">
                <span><ForumRoundedIcon/></span>
            </a>
            
            <a href="#">
                <span><VideoCallRoundedIcon/></span>
            </a>
            
            <a href="#">
                <span><NotificationsRoundedIcon/></span>
            </a>

            <a href="#">
                <span><AccountBoxRoundedIcon/><span className="profile-name">Mc Stand</span></span>
            </a>
            
        </section>
    );
}

export default RightBlock;