import style from "./payment.module.css";
import "../../App.css";
import Address from "../address/address";
import paymentImg from "../../assets/paymentImg.svg";
import Checked from "../checked/checked";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../footer/footer";
import VoucherModal from "../voucherModal/voucherMpdal";
import DoneModal from "../doneModal/doneModal";

const Payment = () => {
    const location = useLocation();
  const { items = [], grandTotal = "0.00" } = location.state || {};
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
  const [isDoneModalOpen, setIsDoneModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChecked = (option) => {
    setSelectedShipping(option);
  };

  const handleIsVoucherModalOpen = () => {
    setIsVoucherModalOpen((prev) => !prev);
  };

  const handleIsDoneModalOpen = () => {
    setIsDoneModalOpen((prev) => !prev);
  };
 
  return (
    <div className="container">
      <div className={style.payment}>
      <div className={`${style.paymentHeader} ${isScrolled ? style.scrolled : ""}`}>Payment</div>
        <div className={style.address}>
          <Address />
        </div>
        <div className={style.paymentContent}>
          <div className={style.paymentContentHeader}>
            <div className={style.paymentContentLeftSide}>
              <div className={style.paymentContentText}>Items</div>
              <div className={style.paymentContentHAndleQtn}>
                <span className={style.paymentContentQtn}>{items.length}</span>
              </div>
            </div>
            <div>
              <button className={style.paymentContentBtn} onClick={handleIsVoucherModalOpen}>
                Add Voucher
              </button>
            </div>
          </div>
          {items.map((item, index) => (
            <div className={style.paymentContentInfo} key={index}>
              <div className={style.paymentContentInfoLeftSide}>
                <div className={style.paymentContentInfoHandleImg}>
                  <div className={style.handleImg}>
                    <img
                      className={style.paymentContentInfoImg}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className={style.paymentContentInfoQtn}>
                    <span className={style.paymentQtn}>{item.quantity}</span>
                  </div>
                </div>
                <div className={style.paymentContentInfoDes}>
                  {item.title}
                </div>
              </div>
              <div className={style.paymentContentInfoPrice}>${item.totalPrice}</div>
            </div>
          ))}
          <div className={style.shipping}>
                <div className={style.shippingHeader}>Shipping Options</div>
                <div className={style.shippingOptions}>
                  <div
                    className={`${style.shippingOption} ${
                      selectedShipping === "standard" ? style.selected : ""
                    }`}
                    onClick={() => handleChecked("standard")}
                  >
                    <div className={style.shippingLeft}>
                      <div className={style.checked}>
                        <Checked checked={selectedShipping === "standard"} />
                      </div>
                      <div className={style.shippingtype}>Standard</div>
                    </div>
                    <div className={style.shippingDays}>5-7 days</div>
                    <div className={style.shippingRight}>FREE</div>
                  </div>
                  <div
                    className={`${style.shippingOption} ${
                      selectedShipping === "express" ? style.selected : ""
                    }`}
                    onClick={() => handleChecked("express")}
                  >
                    <div className={style.shippingLeft}>
                      <div className={style.checked}>
                        <Checked checked={selectedShipping === "express"} />
                      </div>
                      <div className={style.shippingtype}>Express</div>
                    </div>
                    <div className={style.shippingDays}>1-2 days</div>
                    <div className={style.shippingRight}>$12,00</div>
                  </div>
                </div>
                <div className={style.shippingText}>
                  Delivered on or before Thursday, 23 April 2020
                </div>
              </div>
          <div className={style.checkout}>
            <div className={style.container}>
              <div className={style.content}>
                <div className={style.checkoutLeft}>
                  <div className={style.checkoutText}>
                    Total: <span className={style.checkoutPrice}>${grandTotal}</span>
                  </div>
                </div>
                <div className={style.checkoutRight}>
                  <button className={style.checkoutBtn} onClick={handleIsDoneModalOpen}>
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <VoucherModal isOpen={isVoucherModalOpen} onClose={handleIsVoucherModalOpen} />
      <DoneModal isOpen={isDoneModalOpen} onClose={handleIsDoneModalOpen} />
    </div>
  );
};

export default Payment;
