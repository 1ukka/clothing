import style from "./start.module.css";
import clothingIcon from "../../assets/Group 1000004649.svg";
import accountIcon from "../../assets/Arrow.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../App.css";

const Start = () => {
  const [clicked, setClicked] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setLogin(true);
    navigate("/login");
  };
  const handleGetStarted = () => {
    setClicked(true);
    navigate("/create-account");
  };

  return (
    <div className="container">
      <div className={style.start}>
        <div className={style.pos}>
          <div className={style.handleClothingIcon}>
            <img className={style.clothingIcon} src={clothingIcon} alt="" />
          </div>
        </div>
        <div className={style.clothingHeader}>Shoppe</div>
        <div className={style.pos}>
          <div className={style.desc}>
            Beautiful eCommerce UI Kit for your online store
          </div>
        </div>
        <div className={style.pos}>
          <button onClick={handleLogin} className={style.startBtn}>
            Let's get started
          </button>
        </div>
        <div onClick={handleGetStarted} className={style.handleAccount}>
          <div className={style.accountText}>I already have an account</div>
          <div className={style.handleAccounticon}>
            <img src={accountIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
