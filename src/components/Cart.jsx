import React, { useContext } from "react";
import styles from "../styles/cart.module.scss";
import { storeContext } from "../StoreProvider";
import CartItem from "./CartItem";
export default function Cart() {
  const store = useContext(storeContext);
  const cart = store.cart;
  return (
    <div className={styles.cart}>
      <aside>
        <p className={styles.cartTitle}>Cart</p>
        {cart.length > 0 ? (
          <>
            {cart.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.id} />
            ))}
            <button className={styles.checkoutBtn}>Checkout</button>
          </>
        ) : (
          <p className={styles.emptyCartTitle}>Your cart is empty.</p>
        )}
      </aside>
    </div>
  );
}
