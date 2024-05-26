import style from './address.module.css'
import "../../App.css";
import editBtn from "../../assets/Button.svg";
import { useState } from 'react';
import AddressModal from '../addressModal/addressModal';

const Address = () => {
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false)
    const handleIsAddressModalOpen = () => {
        setIsAddressModalOpen((prev) => !prev);
      };
    return(
        <div className='container'>
           <div className={style.adress}>
          <div className={style.adressHeader}>Shipping Address</div>
          <div className={style.adressContent}>
            <div className={style.adressLocation}>
              26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh
              city
            </div>
            <div>
              <img className={style.editIcon} onClick={handleIsAddressModalOpen} src={editBtn} alt="" />
            </div>
          </div>
        </div>
        <AddressModal isOpen={isAddressModalOpen} onClose={handleIsAddressModalOpen}/>
        </div>
    )
}

export default Address;