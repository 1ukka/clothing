import style from  './fav.module.css';
import fav from "../../assets/undraw_happy_music_g6wc.svg";
import Footer from '../footer/footer';

const Fav = () => {
    return (
        <div>
            <img className={style.fav} src={fav} alt="" />
            <Footer />
        </div>
    );
}

export default Fav;