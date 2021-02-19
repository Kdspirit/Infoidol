import './Album.css';
import albumImg from "../Assets/la.jpg";
const Array=[1,2,3,4,5];

const Album = () => {
    return (
    <div className="AlbumContainer">
        <h3> Top Album</h3>
        <section className="Album-elems">       
            {
                Array.map((e) => {
                    return(
                        <>
                        <div className="Album-Img">
                            <img src={albumImg} alt=""/>
                            <div className="Album-text">
                                <p>Lovely Background music</p>
                            </div>
                            <a href="">Harsh Music</a>
                        </div> 
                        </>
                    )
                })
            }
        </section>
    </div>
    );
}
 
export default Album;