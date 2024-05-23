import style from './itemShop.module.css'
import "../../App.css";
import cameraIcon from "../../assets/Image Icon.svg";
import category1 from "../../assets/category1.svg";
import category2 from "../../assets/cat2.svg";
import category3 from "../../assets/cat3.svg";
import category4 from "../../assets/cat4.svg";
import category5 from "../../assets/cat5.svg";
import category6 from "../../assets/cat6.svg";
import category7 from "../../assets/cat7.svg";
import category8 from "../../assets/cat8.svg";
import category9 from "../../assets/cat9.svg";
import category10 from "../../assets/cat10.svg";
import filterIcon from "../../assets/filter.svg";
import cardImgOne from "../../assets/cardImg1.svg";
import cardImgTwo from "../../assets/cardimg2.svg";
import cardImgThree from "../../assets/cardimg3.svg";
import cardImgFour from "../../assets/cardImg4.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from '../footer/footer';
const ItemShop = () => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const handleItem = () => {
        setClicked(true);
            navigate("/item");
        }
    return (
        <div className='container'>
            <div className={style.itemShop}>
                <div className={style.header}>
                    <div className={style.shopHeader}>Shop</div>
                    <div className={style.handleSearch}>
                        <div><input placeholder='Search items' className={style.search} type="text" /></div>
                        <div className={style.handleCameraIcon}><img src={cameraIcon} alt="" /></div>
                    </div>
                </div>
                <div className={style.categoryGrid}>
                    <div className={style.categoryGridItem}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category1} alt="" />
                        </div>
                        <div className={style.categoryName}>Dresses</div>
                    </div>
                    <div className={style.categoryGridItem}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category2} alt="" />
                        </div>
                        <div className={style.categoryName}>Pants</div>
                    </div>
                    <div className={style.categoryGridItem}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category3} alt="" />
                        </div>
                        <div className={style.categoryName}>Skirts</div>
                    </div>
                    <div className={style.categoryGridItem}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category4} alt="" />
                        </div>
                        <div className={style.categoryName}>Shorts</div>
                    </div>
                    <div className={style.categoryGridItem}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category5} alt="" />
                        </div>
                        <div className={style.categoryName}>Jackets</div>
                    </div>
                    <div className={style.categoryGridItem}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category6} alt="" />
                        </div>
                        <div className={style.categoryName}>Hoodies</div>
                    </div>
                    <div className={style.categoryGridItem}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category7} alt="" />
                        </div>
                        <div className={style.categoryName}>Shirts</div>
                    </div>
                    <div className={style.categoryGridItem}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category8} alt="" />
                        </div>
                        <div className={style.categoryName}>Polo</div>
                    </div>
                    <div className={style.categoryGridItem}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category9} alt="" />
                        </div>
                        <div className={style.categoryName}>T-shirts</div>
                    </div>
                    <div className={style.categoryGridItem}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category10} alt="" />
                        </div>
                        <div className={style.categoryName}>Tunics</div>
                    </div>
                </div>
                <div className={style.items}>
                    <div className={style.filter}>
                        <div className={style.filterHeader}>All Items</div>
                        <img className={style.filterIcon} src={filterIcon} alt="" />
                    </div>
                    <div className={style.item}>
                        <div className={style.card}>
                            <div onClick={handleItem} className={style.handleImg}>
                                <img className={style.itemImg} src={cardImgOne} alt="" />
                            </div>
                            <div onClick={handleItem} className={style.cardTitle}>Lorem ipsum dolor sit amet consectetur</div>
                            <div className={style.cardPrice}>$17,00</div>
                        </div>
                        <div onClick={handleItem} className={style.card}>
                            <div className={style.handleImg}>
                                <img className={style.itemImg} src={cardImgTwo} alt="" />
                            </div>
                            <div className={style.cardTitle}>Lorem ipsum dolor sit amet consectetur</div>
                            <div className={style.cardPrice}>$17,00</div>
                        </div>
                        <div className={style.card}>
                            <div className={style.handleImg}>
                                <img className={style.itemImg} src={cardImgThree} alt="" />
                            </div>
                            <div className={style.cardTitle}>Lorem ipsum dolor sit amet consectetur</div>
                            <div className={style.cardPrice}>$17,00</div>
                        </div>
                        <div className={style.card}>
                            <div className={style.handleImg}>
                                <img className={style.itemImg} src={cardImgFour} alt="" />
                            </div>
                            <div className={style.cardTitle}>Lorem ipsum dolor sit amet consectetur</div>
                            <div className={style.cardPrice}>$17,00</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}


export default ItemShop;