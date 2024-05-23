import style from "./createAccount.module.css";
import accountImg from "../../assets/bubble 02.svg";
import accountImgOne from "../../assets/bubble 01.svg";
import camera from "../../assets/camera icon (1).svg";
import "../../App.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateAccount = () => {
    const [clicked, setClicked] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [done , setDone] = useState(false);
    const navigate = useNavigate();
    const handleDone = () => {
        setDone(true);
        navigate("/item-shop");
    };
    const handleGetStarted = () => {
      setClicked(true);
        navigate("/");
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
  return (
    <div className="container">
      <div className={style.createAccount}>
        <div className={style.imgBackground}>
          <img className={style.leftImg} src={accountImg} alt="" />
          <img className={style.rightImg} src={accountImgOne} alt="" />
        </div>
        <div className={style.accountHeader}>Create Account</div>
        <div className={style.handleCamera}>
          <img src={camera} alt="" />
        </div>
        <div className={style.inputs}>
          <input className={style.email} placeholder="Email" type="text" />
          <div className={style.handlePassword}>
                        <input
                            className={style.passwordInput}
                            placeholder="Password"
                            type={passwordVisible ? "text" : "password"}
                        />
                        <div onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>
          <div>
            <div className={style.phone}>
              <PhoneInput
                country={"iq"}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: false,
                }}
                inputStyle={{
                    width: '100%',
                    border: 'none',
                    backgroundColor: '#F8F8F8',
                    marginLeft: '-8px',
                }}
                buttonStyle={{
                    border: 'none',
                    backgroundColor: '#F8F8F8',
                   marginLeft: '-10px',
                }}
              />
            </div>
          </div>
        </div>
        <div className={style.pos}><button onClick={handleDone} className={style.doneBtn}>Done</button></div>
        <div onClick={handleGetStarted} className={style.cancel}>Cancel</div>
      </div>
    </div>
  );
};

export default CreateAccount;
