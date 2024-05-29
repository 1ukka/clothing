import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './login.module.css';
import "../../App.css";
import accountImgOne from "../../assets/bubble 01 (1).svg";
import accountImgTwo from "../../assets/bubble 02 (1).svg";
import accountImgThree from "../../assets/bubblle 03.svg";
import accountImgfour from "../../assets/bubble 04.svg";

const Login = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleNext = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/users');
            const users = await response.json();

            const userExists = users.some(user => user.username === email);

            if (userExists) {
                navigate("/item-shop");
            } else {
                toast.error("Invalid email");
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("An error occurred during login", {
                className: style.toastError,
            });
        }
    };

    const handleGetStarted = () => {
        navigate("/");
    };

    return (
        <div className="container">
            <div className={style.login}>
                <div>
                    <div className={style.handleleftImgs}>
                        <img className={style.leftImg1} src={accountImgOne} alt="" />
                        <img className={style.leftImg2} src={accountImgTwo} alt="" />
                    </div>
                </div>
                <div>
                    <img className={style.rightImg} src={accountImgThree} alt="" />
                </div>
                <div className={style.loginHeader}>Login</div>
                <div className={style.des}>Good to see you back! 🖤</div>
                <div className={style.handleEmail}>
                    <input 
                        className={style.email} 
                        placeholder="Email" 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div onClick={handleNext} className={style.handleNextBtn}>
                    <button className={style.nextBtn}>Next</button>
                </div>
                <div onClick={handleGetStarted} className={style.cancel}>Cancel</div>
                <div>
                    <img className={style.img4} src={accountImgfour} alt="" />
                </div>
            </div>
            <ToastContainer limit={3}/>
        </div>
    );
};

export default Login;
