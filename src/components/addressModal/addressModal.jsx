import style from './addressModal.module.css';
import { useState } from 'react';
import { Sheet } from "react-modal-sheet";
import "../../App.css";
import Footer from '../footer/footer';

function AddressModal({ isOpen, onClose, address, city, postcode, onSave }) {
    const [newAddress, setNewAddress] = useState(address);
    const [newCity, setNewCity] = useState(city);
    const [newPostcode, setNewPostcode] = useState(postcode);

    const handleSaveChanges = () => {
        onSave(newAddress, newCity, newPostcode);
    };

    return (
        <div className={style.modalAddress}>
            <Sheet isOpen={isOpen} onClose={onClose} className={style.modal}>
                <Sheet.Container className={style.modalContainer}>
                    <Sheet.Header />
                    <Sheet.Content className={style.modalContent}>
                        <div className={style.modalHeader}>
                            <div className={style.modalHeaderText}>Shipping Address</div>
                        </div>
                        <div className={style.handleInputs}>
                            <div className={style.inputs}>
                                <div>
                                    <label className={style.inputLabel} htmlFor="">Address</label>
                                    <input 
                                        className={style.input} 
                                        type="text" 
                                        value={newAddress} 
                                        onChange={(e) => setNewAddress(e.target.value)} 
                                    />
                                </div>
                                <div>
                                    <label className={style.inputLabel} htmlFor="">Town / City</label>
                                    <input 
                                        className={style.input} 
                                        type="text" 
                                        value={newCity} 
                                        onChange={(e) => setNewCity(e.target.value)} 
                                    />
                                </div>
                                <div>
                                    <label className={style.inputLabel} htmlFor="">Postcode</label>
                                    <input 
                                        className={style.input} 
                                        type="number" 
                                        value={newPostcode} 
                                        onChange={(e) => setNewPostcode(e.target.value)} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={style.handleSave}>
                            <button className={style.saveBtn} onClick={handleSaveChanges}>Save Changes</button>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop className={style.modalBackdrop} />
                <Footer />
            </Sheet>
        </div>
    )
}

export default AddressModal;
