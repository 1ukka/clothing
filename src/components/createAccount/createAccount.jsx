import style from "./createAccount.module.css";
import accountImg from "../../assets/bubble 02.svg";
import accountImgOne from "../../assets/bubble 01.svg";
import camera from "../../assets/camera icon (1).svg";
import "../../App.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const CreateAccount = () => {
    const [clicked, setClicked] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [done , setDone] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const handleDone = () => {
        setDone(true);
        navigate("/item-shop");
    };
    const handleGetStarted = () => {
      setClicked(true);
        navigate("/");
    };

    const handleCameraClick = () => {
      fileInputRef.current.click();
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };

  return (
    <div className="container">
      <div className={style.createAccount}>
        <div className={style.imgBackground}>
          <img className={style.leftImg} src={accountImg} alt="" />
          <img className={style.rightImg} src={accountImgOne} alt="" />
        </div>
        <div className={style.accountHeader}>Create Account</div>
        <div className={style.handleCamera} onClick={handleCameraClick}>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" className={style.selectedImage} />
          ) : (
            <img src={camera} alt="Upload" />
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
        />
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
