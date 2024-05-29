import style from "./vouchers.module.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import persona from "../../assets/persona.svg";
import vouchers from "../../assets/vouchers.svg";
import { useState } from "react";
import { CiMenuFries, CiSettings } from "react-icons/ci";
import Footer from "../footer/footer";
import VoucherTicket from "../voucherTicket/voucherTicket";

const Vouchers = () => {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState("vouchers");
  const [activeSelecter, setActiveSelecter] = useState("Active Rewards");

  return (
    <div className="container">
      <div className={style.Vouchers}>
        <div className={style.posi}>
        <div className={style.VouchersHeader}>
          <div className={style.leftSide}>
            <div className={style.VouchersImg}>
              <img className={style.img} src={persona} alt="" />
            </div>
            <div className={style.VouchersHeaderText}>Vouchers</div>
          </div>
          <div className={style.handleIcons}>
            <div
              className={`${style.handleIcon} ${
                activeIcon === "vouchers" ? style.active : ""
              }`}
              onClick={() => setActiveIcon("vouchers")}
            >
              <img className={style.icon} src={vouchers} alt="Vouchers" />
            </div>
            <div
              className={`${style.handleIcon} ${
                activeIcon === "list" ? style.active : ""
              }`}
              onClick={() => setActiveIcon("list")}
            >
              <div>
                <CiMenuFries className={style.iconn} />
              </div>
            </div>
            <div
              className={`${style.handleIcon} ${
                activeIcon === "sittengs" ? style.active : ""
              }`}
              onClick={() => setActiveIcon("sittengs")}
            >
              <CiSettings size={23} className={style.icon} />
            </div>
          </div>
        </div>
        <div className={style.select}>
          <div
            className={`${style.selecter} ${
              activeSelecter === "Active Rewards" ? style.selected : ""
            }`}
            onClick={() => setActiveSelecter("Active Rewards")}
          >
            Active Rewards
          </div>
          <div
            className={`${style.selecter} ${
              activeSelecter === "Progress" ? style.selected : ""
            }`}
            onClick={() => setActiveSelecter("Progress")}
          >
            Progress
          </div>
        </div>
        </div>
        <div className={style.handleTickets}>
            <VoucherTicket />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vouchers;
