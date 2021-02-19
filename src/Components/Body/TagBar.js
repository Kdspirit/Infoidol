import '../Body/TagBar.css';
import tag1 from "../Assets/la.jpg";
const arr=[1,2,3,4,5,6,7,8,9,10];

const TagBar = () => {
    return (
        <section className="Tags-Bar" style={{marginLeft: '15%'}}>
            {
                arr.map((e) => {
                    return(
                        <div className="TagBar-Elems">
                            <button>
                                <img src={tag1} alt="tag1"/>
                                    <span>Dance</span>
                            </button>
                        </div>
                    )
                })
            }
        </section>
    );
}

export default TagBar;