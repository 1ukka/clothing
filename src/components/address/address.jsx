import style from './address.module.css'
import "../../App.css";
import editBtn from "../../assets/Button.svg";
import { useState } from 'react';
import AddressModal from '../addressModal/addressModal';

const Address = () => {
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [address, setAddress] = useState("26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city");
    const [city, setCity] = useState("Ho Chi Minh city");
    const [postcode, setPostcode] = useState("70000");

    const handleIsAddressModalOpen = () => {
        setIsAddressModalOpen((prev) => !prev);
    };

    const handleSaveAddress = (newAddress, newCity, newPostcode) => {
        setAddress(newAddress);
        setCity(newCity);
        setPostcode(newPostcode);
        handleIsAddressModalOpen();
    };

    return (
        <div className='container'>
            <div className={style.adress}>
                <div className={style.adressHeader}>Shipping Address</div>
                <div className={style.adressContent}>
                    <div className={style.adressLocation}>
                        {address}, {city}, {postcode}
                    </div>
                    <div>
                        <img className={style.editIcon} onClick={handleIsAddressModalOpen} src={editBtn} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.AddressModal}>
                <AddressModal 
                    isOpen={isAddressModalOpen} 
                    onClose={handleIsAddressModalOpen} 
                    address={address} 
                    city={city} 
                    postcode={postcode} 
                    onSave={handleSaveAddress} 
                />
            </div>
        </div>
    )
}

export default Address;
