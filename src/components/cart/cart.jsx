import style from "./cart.module.css";
import "../../App.css";
import deletee from "../../assets/Delete.svg";
import useAppStore from "../../store";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Address from "../address/address";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeItem } = useAppStore();
  const [quantities, setQuantities] = useState(cart.map(item => item.quantity));

  const handlePayment = () => {
    navigate("/payment");
  };

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantities[index] > 1 ? newQuantities[index] - 1 : 1;
    setQuantities(newQuantities);
  };

  return (
    <div className="container">
      <div className={style.cart}>
        <div className={style.cartHeader}>
          <div className={style.cartText}>Cart</div>
          <div className={style.qtn}>
            <div className={style.qtnContainer}>
              <span className={style.num}>{cart.length}</span>
            </div>
          </div>
        </div>
        <div className={style.handleAddress}>

        <Address />
        </div>
        <div className={style.cards}>
          {cart.map((item, index) => (
            <div className={style.card} key={index}>
              <div className={style.leftSide}>
                <div className={style.imgContainer}>
                  <img className={style.productImg} src={item.image} alt={item.title} />
                  <div className={style.handleDelete}>
                    <img
                      className={style.delete}
                      src={deletee}
                      alt=""
                      onClick={() => removeItem(index)}
                    />
                  </div>
                </div>
              </div>
              <div className={style.rightSide}>
                <div className={style.productName}>
                  {item.title}
                </div>
                <div className={style.productInfo}>
                  {item.color}, Size {item.size}
                </div>
                <div className={style.action}>
                  <div className={style.productPrice}>${item.price}</div>
                  <div className={style.productQtn}>
                    <div className={style.quantity}>
                      <div
                        onClick={() => handleDecrement(index)}
                        className={style.decrement}
                      >
                        <span className={style.dec}>-</span>
                      </div>
                      <div className={style.count}>
                        <span className={style.one}>{quantities[index]}</span>
                      </div>
                      <div
                        onClick={() => handleIncrement(index)}
                        className={style.increment}
                      >
                        <span className={style.inc}>+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                <button className={style.checkoutBtn} onClick={handlePayment}>
                  Checkout
                </button>
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
