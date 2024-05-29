import style from "./itemShop.module.css";
import "../../App.css";
import cameraIcon from "../../assets/Image Icon.svg";
import category1 from "../../assets/category1.svg";
import category2 from "../../assets/cat2.svg";
import category3 from "../../assets/cat3.svg";
import category4 from "../../assets/cat4.svg";
import filterIcon from "../../assets/filter.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react";
import Footer from "../footer/footer";

const ItemShop = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const observer = useRef();

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
      setDisplayedItems(data.slice(0, 10));
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const loadMoreItems = useCallback(() => {
    const start = page * 10;
    const end = start + 10;
    setDisplayedItems(prevItems => [...prevItems, ...items.slice(start, end)]);
    setPage(prevPage => prevPage + 1);
  }, [page, items]);

  useEffect(() => {
    getCategories();
    getItems();
  }, []);

  const lastItemElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && displayedItems.length < items.length) {
        loadMoreItems();
      }
    });
    if (node) observer.current.observe(node);
  }, [loadMoreItems, displayedItems.length, items.length]);

  const toggleCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : displayedItems;

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
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${style.categoryGridItem} ${selectedCategory === category ? style.selectedCategory : ''}`}
              onClick={() => toggleCategory(category)}
            >
              <div className={style.handleCategoryImg}>
                <img className={style.categoryImg} src={index === 0 ? category1 : index === 1 ? category2 : index === 2 ? category3 : category4} alt="" />
              </div>
              <div className={style.categoryName}>{category}</div>
            </div>
          ))}
        </div>
        <div className={style.items}>
          <div className={style.filter}>
            <div className={style.filterHeader}>{selectedCategory || "All Items"}</div>
            <img className={style.filterIcon} src={filterIcon} alt="" />
          </div>
          <div className={style.item}>
            {filteredItems.map((item, index) => (
              <div className={style.card} key={item.id} ref={index === filteredItems.length - 1 ? lastItemElementRef : null}>
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
  );
};

export default ItemShop;
