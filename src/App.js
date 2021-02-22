import './App.css';
// import Album from './Components/Body/Album';
// import Audio from './Components/Body/Audio';
// import Banner from './Components/Body/Banner';
// import Blog from './Components/Body/Blog';
// import CurrentTrending from './Components/Body/current_trending';
// import Reels from './Components/Body/Reels';
// import Stories from './Components/Body/stories';
// import TagBar from './Components/Body/TagBar';
// import Trending from './Components/Body/trending';
// import NavBar from './Components/NavBar/NavBar';
// import Sidebar from './Components/SideBar/Sidebar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import VideoPage from './Components/VideoPage/VideoPage'
import Home from './Components/Home/Home';
function App() {
  return (
    <BrowserRouter>
    <Switch>
    {/* <div className="App">
      <NavBar/>
      <div className="bannerSideBar">
        <Sidebar/>
          <Banner/>
          <TagBar/>
      </div>

      <div className="ReelsFlex">
        <div>
        <Stories/>
        <Trending/>
        <Album/>
        </div>
        <Reels/>
      </div>
      <CurrentTrending/>
      <Audio/>
      <Blog/>
    </div>
     */}
    <Route exact path="/" component={Home} />

    <Route path="/videoPage" component={VideoPage} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
