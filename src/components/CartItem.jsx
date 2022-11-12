import React, { useContext } from "react";
import styles from "../styles/cart.module.scss";
import deleteIcon from "../images/icon-delete.svg";
import { setstoreContext, storeContext } from "../StoreProvider";
function CartItem({ cartItem }) {
  const store = useContext(storeContext);
  const cart = store.cart;
  const setStore = useContext(setstoreContext);
  // Handler Fucntions
  const deleteHandler = () => {
    const filteredCart = cart.filter((product) => product.id !== cartItem.id);
    setStore((prevStore) => {
      return {
        applicationUrl: prevStore.applicationUrl,
        cart: filteredCart,
      };
    });
  };
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImg}>
        <img
          src={`${store.applicationUrl}/product-images/${cartItem.id}/thumbnails/image-product-${cartItem.id}-thumbnail.jpg`}
          alt="Product"
        ></img>
      </div>
      <div className={styles.cartItemDetails}>
        <p className={styles.cartItemTitle}>{cartItem.title}</p>
        <div className={styles.cartItemPrice}>
          <p>{`$${cartItem.price} x ${cartItem.quantity}`}</p>
          <p>
            <b>&nbsp;&nbsp;${cartItem.price * cartItem.quantity}</b>
          </p>
        </div>
      </div>
      <div className={styles.cartItemDel}>
        <img src={deleteIcon} onClick={deleteHandler} alt="Delete icon"></img>
      </div>
    </div>
  );
}

export default CartItem;
