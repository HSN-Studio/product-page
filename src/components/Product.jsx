import React, { useContext, useState, useRef, useEffect } from "react";
import styles from "../styles/product.module.scss";
import { storeContext, setstoreContext } from "../StoreProvider";
import plusIcon from "../images/icon-plus.svg";
import minusIcon from "../images/icon-minus.svg";
import Gallery from "./Gallery";
function Product({ id }) {
  const store = useContext(storeContext);
  const setStore = useContext(setstoreContext);
  const cart = store.cart;
  const productTitle = useRef();
  const [productQuantity, setQuantity] = useState(1);
  const findItem = cart.findIndex((cartItem) => cartItem.id === id);
  const thumbnails = [
    "./product-images/1/thumbnails/image-product-1-thumbnail.jpg",
    "./product-images/1/thumbnails/image-product-2-thumbnail.jpg",
    "./product-images/1/thumbnails/image-product-3-thumbnail.jpg",
    "./product-images/1/thumbnails/image-product-4-thumbnail.jpg",
  ];

  // handler Functions
  const plusHandler = () => setQuantity((quantity) => quantity + 1);
  const minusHandler = () =>
    setQuantity((quantity) => (quantity > 1 ? quantity - 1 : quantity));
  const addToCartHandler = () => {
    if (findItem === -1) {
      setStore((prevStore) => {
        return {
          applicationUrl: prevStore.applicationUrl,
          cart: [
            ...prevStore.cart,
            {
              id: id,
              title: productTitle.current.textContent,
              quantity: productQuantity,
              price: 125,
              originalPrice: 250,
            },
          ],
        };
      });
    } else {
      setStore((prevStore) => {
        // external state
        let updatedCart = prevStore.cart;
        updatedCart[findItem].quantity += productQuantity;

        return {
          applicationUrl: prevStore.applicationUrl,
          cart: updatedCart,
        };
      });
    }
  };
  return (
    <main>
      <section className={styles.productSection}>
        <div className={styles.leftCol}>
          <Gallery productId={1} thumbnails={thumbnails} />
          <div className={styles.thumbnails}></div>
        </div>
        <div className={styles.rightCol}>
          <p className={styles.companyName}>Sneakers Company</p>
          <h1 className={styles.productTitle} ref={productTitle}>
            Fall Limited Edition Sneakers
          </h1>
          <p className={styles.productDescription}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className={styles.productPrice}>
            <div className={styles.productDiscountedPrice}>
              <h2>$125.00</h2>
              <span className={styles.productDiscount}>50%</span>
            </div>
            <p className={styles.productOriginalPrice}>$250.00</p>
          </div>
          <div className={styles.addToCart}>
            <div className={styles.quantityBtn}>
              <img
                className={styles.minusBtn}
                src={minusIcon}
                onClick={minusHandler}
                alt=" "
              ></img>
              <p className={styles.productQuantity}>{productQuantity}</p>

              <img
                className={styles.plusBtn}
                src={plusIcon}
                onClick={plusHandler}
                alt=" "
              ></img>
            </div>
            <div className={styles.addToCartBtn} onClick={addToCartHandler}>
              <span className={styles.addToCartIcon}>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#69707D"
                    fillRule="nonzero"
                  />
                </svg>
              </span>
              <span className={styles.addToCartText}>Add to cart</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
