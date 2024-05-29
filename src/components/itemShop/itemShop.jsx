import style from './itemShop.module.css';
import "../../App.css";
import cameraIcon from "../../assets/Image Icon.svg";
import category1 from "../../assets/category1.svg";
import category2 from "../../assets/cat2.svg";
import category3 from "../../assets/cat3.svg";
import category4 from "../../assets/cat4.svg";
import filterIcon from "../../assets/filter.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from '../footer/footer';

const ItemShop = () => {
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleItem = (id, image) => {
        navigate(`/item/${id}`, { state: { image } });
    };

    const getCategories = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/categories");
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const getItems = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    useEffect(() => {
        getCategories();
        getItems();
    }, []);

    const filteredItems = selectedCategory
        ? items.filter(item => item.category === selectedCategory)
        : items;

    return (
        <div className='container'>
            <div className={style.itemShop}>
                <div className={style.header}>
                    <div className={style.shopHeader}>Shop</div>
                    <div className={style.handleSearch}>
                        <div>
                            <input placeholder='Search items' className={style.search} type="text" />
                        </div>
                        <div className={style.handleCameraIcon}>
                            <img src={cameraIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className={style.categoryGrid}>
                    <div className={style.categoryGridItem} onClick={() => setSelectedCategory(categories[0])}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category1} alt="" />
                        </div>
                        <div className={style.categoryName}>{categories[0]}</div>
                    </div>
                    <div className={style.categoryGridItem} onClick={() => setSelectedCategory(categories[1])}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category2} alt="" />
                        </div>
                        <div className={style.categoryName}>{categories[1]}</div>
                    </div>
                    <div className={style.categoryGridItem} onClick={() => setSelectedCategory(categories[2])}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category3} alt="" />
                        </div>
                        <div className={style.categoryName}>{categories[2]}</div>
                    </div>
                    <div className={style.categoryGridItem} onClick={() => setSelectedCategory(categories[3])}>
                        <div className={style.handleCategoryImg}>
                            <img className={style.categoryImg} src={category4} alt="" />
                        </div>
                        <div className={style.categoryName}>{categories[3]}</div>
                    </div>
                </div>
                <div className={style.items}>
                    <div className={style.filter}>
                        <div className={style.filterHeader}>All Items</div>
                        <img className={style.filterIcon} src={filterIcon} alt="" />
                    </div>
                    <div className={style.item}>
                        {filteredItems.map((item) => (
                            <div className={style.card} key={item.id}>
                                <div onClick={() => handleItem(item.id, item.image)} className={style.handleImg}>
                                    <img className={style.itemImg} src={item.image} alt={item.title} />
                                </div>
                                <div onClick={() => handleItem(item.id, item.image)} className={style.cardTitle}>{item.title}</div>
                                <div className={style.cardPrice}>${item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ItemShop;
