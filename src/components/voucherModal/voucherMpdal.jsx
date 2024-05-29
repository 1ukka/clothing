import style from "./voucherModal.module.css";
import { Sheet } from "react-modal-sheet";
import "../../App.css";
import Ticket from "../ticket/ticket";

function VoucherModal({ isOpen, onClose }) {
  return (
    <div className="container">
      <div className={style.pos}>
        <Sheet isOpen={isOpen} onClose={onClose} className={style.modal}>
          <Sheet.Container className={style.modalContainer}>
            <Sheet.Header />
            <Sheet.Content className={style.modalContent}>
              <div className={style.modalHeader}>
                <div className={style.modalHeaderText}>Active Vouchers</div>
              </div>
              <div className={style.tickets}>
                <Ticket isOpen={isOpen} onClose={onClose} />
              </div>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop className={style.modalBackdrop} />
        </Sheet>
      </div>
    </div>
  );
}

export default VoucherModal;
