import style from "./footer.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { LuMenuSquare } from "react-icons/lu";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { useState, useEffect } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [clickedIcon, setClickedIcon] = useState(null);

  useEffect(() => {
    switch (location.pathname) {
      case "/item-shop":
        setClickedIcon("home");
        break;
      case "/fav":
        setClickedIcon("fav");
        break;
      case "/cart":
        setClickedIcon("cart");
        break;
      case "/vouchers":
        setClickedIcon("person");
        break;
      case "/item":
        setClickedIcon("item");
        break;
      default:
        setClickedIcon(null);
    }
  }, [location.pathname]);

  const handleClick = (icon, path) => {
    setClickedIcon(icon);
    navigate(path);
  };

  return (
      <div className={style.footer}>
        <LuHome
          className={`${style.Icon} ${
            clickedIcon === "home" ? style.clicked : ""
          }`}
          size={25}
          onClick={() => handleClick("home", "/item-shop")}
        />
        <CiHeart
          className={`${style.Icon} ${
            clickedIcon === "fav" ? style.clicked : ""
          }`}
          size={30}
          onClick={() => handleClick("fav", "/fav")}
        />
        <LuMenuSquare
          className={`${style.Icon} ${
            clickedIcon === "item" ? style.clicked : ""
          }`}
          size={25}
          onClick={() => handleClick("item", "/item")}
        />
        <RiShoppingBag3Line
          className={`${style.Icon} ${
            clickedIcon === "cart" ? style.clicked : ""
          }`}
          size={25}
          onClick={() => handleClick("cart", "/cart")}
        />
        <BsPerson
          className={`${style.Icon} ${
            clickedIcon === "person" ? style.clicked : ""
          }`}
          size={25}
          onClick={() => handleClick("person", "/vouchers")}
        />
      </div>
  );
};

export default Footer;
