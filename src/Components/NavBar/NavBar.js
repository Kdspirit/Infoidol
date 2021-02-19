import LogoBlock from "./LogoBlock";
import SearchBlock from "./SearchBlock";
import RightBlock from "./RightBlock";
import './NavBar.css';

const NavBar = () => {
    return (
    <div className="Container">
            <div className="wrapper">
            <LogoBlock/>
            <SearchBlock/>
            <RightBlock/>
        </div>
    </div>
    );
}

export default NavBar;
