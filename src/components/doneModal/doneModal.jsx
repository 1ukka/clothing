import style from './doneModal.module.css';
import "../../App.css";
import check from "../../assets/Group 1395.svg";

const DoneModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="container">
        <div className={style.modalBackground}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
          <div className={style.modalContent}>
            <div className={style.handleShop}>
                <div className={style.handleIcon}><div className={style.I}><img className={style.Icon} src={check} alt="" /></div></div>
            </div>
            <div className={style.done}>Done!</div>
            <div className={style.status}>You card has been successfully charged</div>
            <div className={style.handleBtn}>
            <button className={style.trackOrderBtn} onClick={onClose}>
              Track My Order
            </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  );
};

export default DoneModal;
