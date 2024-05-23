import style from './address.module.css'
import "../../App.css";
import editBtn from "../../assets/Button.svg";

const Address = () => {
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
              <img className={style.editIcon} src={editBtn} alt="" />
            </div>
          </div>
        </div>
        </div>
    )
}

export default Address;