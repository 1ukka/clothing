import style from './checked.module.css';
import { BsCheck } from "react-icons/bs";

const Checked = ({ checked }) => {
    return (
        <div className={style.checked}>
            <div className={style.check}>{checked ? <BsCheck className={style.allChecked}/> : ""}</div>
        </div>
    );
};

export default Checked;
