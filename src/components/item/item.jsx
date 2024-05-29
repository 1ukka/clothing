import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import style from "./item.module.css";
import "../../App.css";
import op1 from "../../assets/Placeholder_01.svg";
import op2 from "../../assets/Option 04.svg";
import op3 from "../../assets/Option 03.svg";
import op4 from "../../assets/Option 02.svg";
import check from "../../assets/Check.svg";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import useAppStore from "../../store";

const Item = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const location = useLocation();
  const navigate = useNavigate();
  const { item, updateItem, addToCart } = useAppStore();
  const [isFavorited, setIsFavorited] = useState(false);
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setItemDetails(data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [id]);

  const handleOptionClick = (color) => {
    updateItem("color", color);
  };

  const handleSizeClick = (size) => {
    if (size !== "XXL" && size !== "XXXL") {
      updateItem("size", size);
    }
  };

  const handleIncrement = () => {
    updateItem("quantity", item.quantity + 1);
  };

  const handleDecrement = () => {
    updateItem("quantity", item.quantity > 1 ? item.quantity - 1 : 1);
  };

  const handleFavoriteClick = () => {
    setIsFavorited((prev) => !prev);
  };

  const handleAddToCartNavigate = () => {
    navigate("/cart");
  };
  const handleAddToPaymentNavigate = () => {
    navigate("/payment");
  };

  const handleAddToCartAndNavigate = () => {
    addToCart({
      ...itemDetails,
      quantity: item.quantity,
      color: item.color,
      size: item.size,
    });
    handleAddToCartNavigate();
  };

  if (!itemDetails) {
    return <div className={style.loading}>Loading...</div>;
  }

  return (
    <div className="container">
      <div className={style.item}>
        <div className={style.handleItemImg}>
          <img className={style.itemImg} src={location.state.image} alt={itemDetails.title} />
        </div>
        <div className={style.itemOptions}>
          <div className={style.optionHeader}>Color Options</div>
          <div className={style.options}>
            <div
              className={style.handleOption}
              onClick={() => handleOptionClick("pink")}
            >
              {item.color === "pink" && (
                <div className={style.check}>
                  <img src={check} alt="Selected" />
                </div>
              )}
              <img className={style.optionImg} src={op1} alt="" />
            </div>
            <div
              className={style.handleOption}
              onClick={() => handleOptionClick("yellow")}
            >
              {item.color === "yellow" && (
                <div className={style.check}>
                  <img src={check} alt="Selected" />
                </div>
              )}
              <img className={style.optionImg} src={op2} alt="" />
            </div>
            <div
              className={style.handleOption}
              onClick={() => handleOptionClick("red")}
            >
              {item.color === "red" && (
                <div className={style.check}>
                  <img src={check} alt="Selected" />
                </div>
              )}
              <img className={style.optionImg} src={op3} alt="" />
            </div>
            <div
              className={style.handleOption}
              onClick={() => handleOptionClick("purple")}
            >
              {item.color === "purple" && (
                <div className={style.check}>
                  <img src={check} alt="Selected" />
                </div>
              )}
              <img className={style.optionImg} src={op4} alt="" />
            </div>
            <div
              className={style.handleOption}
              onClick={() => handleOptionClick("black")}
            >
              {item.color === "black" && (
                <div className={style.check}>
                  <img src={check} alt="Selected" />
                </div>
              )}
              <img className={style.optionImg} src={op4} alt="" />
            </div>
          </div>
          <div className={style.itemSizes}>
            <div className={style.sizeHeader}>Size</div>
            <div className={style.sizes}>
              {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                <div
                  key={size}
                  className={`${style.size} ${
                    item.size === size ? style.active : ""
                  } ${["XXL", "XXXL"].includes(size) ? style.disable : ""}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className={style.itemQuantity}>
            <div className={style.quantityHeader}>Quantity</div>
            <div className={style.quantity}>
              <div onClick={handleDecrement} className={style.decrement}>
                <span className={style.dec}>-</span>
              </div>
              <div className={style.count}>
                <span className={style.one}>{item.quantity}</span>
              </div>
              <div onClick={handleIncrement} className={style.increment}>
                <span className={style.inc}>+</span>
              </div>
            </div>
          </div>
          <div className={style.action}>
            <div className={style.container}>
              <div className={style.content}>
                <div className={style.favIcon} onClick={handleFavoriteClick}>
                  {isFavorited ? <FaHeart size={32} /> : <CiHeart size={34} />}
                </div>
                <div>
                  <button
                    className={style.cartBtn}
                    onClick={handleAddToCartAndNavigate}
                  >
                    Add to cart
                  </button>
                </div>
                <div>
                  <button onClick={handleAddToPaymentNavigate} className={style.buyBtn}>Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
