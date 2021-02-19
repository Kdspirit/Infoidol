import banner from "../Assets/banner2.jpg"
import '../Body/Banner.css'

const Banner = () => {
    return (
        <section className="bodyBanner" style={{marginLeft: '15%'}}>
                    <img src={banner} alt="banner-1"/>
        </section>
    );
}

export default Banner;
