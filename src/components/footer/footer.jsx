import style from './footer.module.css'
import home from "../../assets/Group 1950.svg";
import heart from "../../assets/heart.svg";
import filtering from "../../assets/filtering.svg";
import cart from "../../assets/Cart.svg";
import profile from "../../assets/profile.svg";

const Footer = () => {
    return(
        <div className={style.footer}>
        <img src={home} alt="" />
        <img src={heart} alt="" />
        <img src={filtering} alt="" />
        <img src={cart} alt="" />
        <img src={profile} alt="" />
    </div>
    )
}

export default Footer;