import React, { useContext, useState } from "react";
import styles from "../styles/product.module.scss";
import { storeContext } from "../StoreProvider";
import plusIcon from "../images/icon-plus.svg";
import minusIcon from "../images/icon-minus.svg";
function Product({ id }) {
  const store = useContext(storeContext);
  const product = store.cart[id - 1];
  console.log(product);
  const [activeImg, setActiveImg] = useState(
    "./product-images/1/image-product-1.jpg"
  );
  return (
    <main>
      <section className={styles.productSection}>
        <div className="leftCol">
          <div className={styles.mainImage}>
            <img src={`./product-images/${1}/image-product-1.jpg`}></img>
          </div>
          <div className={styles.thumbnails}></div>
        </div>
        <div className="rightCol">
          <p className={styles.companyName}>Sneakers Company</p>
          <h1 className={styles.productTitle}>Fall Limited Edition Sneakers</h1>
          <p className={styles.productDescription}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className={styles.productPrice}>
            <h2>$125</h2>
            <span className={styles.productDiscount}></span>
          </div>
          <p className={styles.productOriginalPrice}>$250</p>
          <div className={styles.quantityBtn}>
            <img className={styles.minusBtn} src={minusIcon}></img>
            <p className={styles.productQuantity}>1</p>
            <img className={styles.plusBtn} src={plusIcon}></img>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
