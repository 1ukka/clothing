import style from './login.module.css'
import "../../App.css";
import accountImgOne from "../../assets/bubble 01 (1).svg";
import accountImgTwo from "../../assets/bubble 02 (1).svg";
import accountImgThree from "../../assets/bubblle 03.svg";
import accountImgfour from "../../assets/bubble 04.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [clicked, setClicked] = useState(false);
    const [next, setNext] = useState(false);
    const navigate = useNavigate();
    const handleNext = () => {
        setNext(true);
            navigate("/item-shop");
        }
    const handleGetStarted = () => {
      setClicked(true);
        navigate("/");
    };
    return(
        <div className="container">
            <div className={style.login}>
            <div>
                <div className={style.handleleftImgs}>
                    <img className={style.leftImg1}  src={accountImgOne} alt="" />
                    <img className={style.leftImg2} src={accountImgTwo} alt="" />
                </div>
            </div>
                <div>
                    <img className={style.rightImg} src={accountImgThree} alt="" />
                </div>
                <div className={style.loginHeader}>Login</div>
                <div className={style.des}>Good to see you back! 🖤</div>
                <div className={style.handleEmail}><input className={style.email} placeholder="Email" type="text" /></div>
                <div onClick={handleNext} className={style.handleNextBtn}><button className={style.nextBtn}>Next</button></div>
                <div onClick={handleGetStarted} className={style.cancel}>Cancel</div>
                <div><img className={style.img4} src={accountImgfour} alt="" /></div>
        </div>
        </div>
    )
}

export default Login;