import style from './addressModal.module.css';
import { Sheet } from "react-modal-sheet";
import "../../App.css";
import Footer from '../footer/footer';

function AddressModal({ isOpen, onClose }) {
  return (
    <Sheet isOpen={isOpen} onClose={onClose} className={style.modal}>
        <Sheet.Container className={style.modalContainer}>
          <Sheet.Header />
          <Sheet.Content className={style.modalContent}>
          <div className={style.modalHeader}>
              <div className={style.modalHeaderText}>Shipping Address</div>
            </div>
            <div className={style.inputs}>
            <div>
                <label className={style.inputLabel} htmlFor="">address</label>
                <input className={style.input} type="text" />
            </div>
            <div>
                <label className={style.inputLabel} htmlFor="">Town / City</label>
                <input className={style.input} type="text" />
            </div>
            <div>
                <label className={style.inputLabel} htmlFor="">Postcode</label>
                <input className={style.input} type="number" />
            </div>
            
            </div>
            <div className={style.handleSave}>
                <button className={style.saveBtn}>Save Changes</button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop className={style.modalBackdrop} />
      <Footer />
      </Sheet>

  )}


export default AddressModal;