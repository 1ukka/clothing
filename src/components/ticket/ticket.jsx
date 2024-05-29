import style from "./ticket.module.css";
import "../../App.css";
import purchaseIcon from "../../assets/Icon.svg";

const Ticket = ({ isOpen, onClose }) => {
  return (
    <div className="container">
      <div className={style.tickets}>
        {[...Array(7)].map((_, index) => (
          <div className={style.ticketContainer} key={index}>
            <div className={style.ticket}>
              <div className={style.ticketHeader}>
                <div className={style.ticketHeaderText}>Voucher</div>
                <div className={style.handleTicketHeaderValid}>
                  <div className={style.ticketHeaderValid}>Valid Until 5.16.20</div>
                </div>
              </div>
              <div className={style.ticketContent}>
                <div className={style.ticketContentName}>
                  <div>
                    <img src={purchaseIcon} alt="" />
                  </div>
                  <div className={style.ticketContentPurchase}>First Purchase</div>
                </div>
                <div className={style.precentage}>
                  <div className={style.precentageText}>5% off for your next order</div>
                  <button className={style.precentageBtn} onClick={onClose}>Apply</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
