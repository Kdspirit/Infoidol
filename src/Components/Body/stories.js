import story from "../Assets/la.jpg";
import './stories.css';
const Array=[1,2,3,4,5];

const Stories = () => {
    return (
        <div className="stories-block">
            <div className="stories">
                            <img src={story} alt=""/>
                            <div className="stories-text">Fitness</div>
                        </div> 
            {
                Array.map((e) => {
                    return(
                        <div className="stories">
                            <img src={story} alt=""/>
                            <div className="stories-text">Fitness</div>
                        </div> 
                    )
                })
            }
        </div>
    );
}

export default Stories;