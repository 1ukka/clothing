import style from "./cart.module.css";
import "../../App.css";
import cartImg from "../../assets/cartImg.svg";
import useAppStore from "../../store";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Address from "../address/address";

const Cart = () => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const handlePayment = () => {
        setClicked(true);
            navigate("/payment");
        }
  const { item, updateItem } = useAppStore();
  const handleIncrement = () => {
    updateItem("quantity", item.quantity + 1);
  };

  const handleDecrement = () => {
    updateItem("quantity", item.quantity > 1 ? item.quantity - 1 : 1);
  };
  return (
    <div className="container">
      <div className={style.cart}>
        <div className={style.cartHeader}>
          <div className={style.cartText}>Cart</div>
          <div className={style.qtn}>
            <div className={style.qtnContainer}>
              <span className={style.num}>2</span>
            </div>
          </div>
        </div>
        <Address />
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.leftSide}>
              <div className={style.imgContainer}>
                <img className={style.productImg} src={cartImg} alt="" />
              </div>
            </div>
            <div className={style.rightSide}>
              <div className={style.productName}>
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className={style.productInfo}>Pink, Size M</div>
              <div className={style.action}>
                <div className={style.productPrice}>$17,00</div>
                <div className={style.productQtn}>
                  <div className={style.quantity}>
                    <div onClick={handleDecrement} className={style.decrement}>
                      <span className={style.dec}>-</span>
                    </div>
                    <div className={style.count}>
                      <span className={style.one}>{item.quantity}</span>
                    </div>
                    <div onClick={handleIncrement} className={style.increment}>
                      <span className={style.inc}>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.checkout}>
          <div className={style.container}>
            <div className={style.content}>
              <div className={style.checkoutLeft}>
                <div className={style.checkoutText}>
                  Total: <span className={style.checkoutPrice}>$34,00</span>
                </div>
              </div>
              <div className={style.checkoutRight}>
                <button className={style.checkoutBtn} onClick={handlePayment}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
