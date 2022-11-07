import React, { useContext } from "react";
import styles from "../styles/cart.module.scss";
import { storeContext } from "../StoreProvider";
import deleteIcon from "../images/icon-delete.svg";
export default function Cart() {
  const store = useContext(storeContext);
  const cartItems = store.cart.map((cartItem) => (
    <div key={cartItem.id} className={styles.cartItem}>
      <div className={styles.cartItemImg}>
        <img
          src={`/product-images/${cartItem.id}/image-product-${cartItem.id}-thumbnail.jpg`}
        ></img>
      </div>
      <div className={styles.cartItemDetails}>
        <p className={styles.cartItemTitle}>{cartItem.title}</p>
        <div className={styles.cartItemPrice}>
          <p>{`$${cartItem.price} x ${cartItem.quantity}`}</p>
          <p>
            <b>&nbsp;${cartItem.price * cartItem.quantity}</b>
          </p>
        </div>
      </div>
      <div className={styles.cartItemDel}>
        <img src={deleteIcon}></img>
      </div>
    </div>
  ));
  return (
    <div className={styles.cart}>
      <aside>
        <p className={styles.cartTitle}>Cart</p>
        {cartItems}
      </aside>
    </div>
  );
}
