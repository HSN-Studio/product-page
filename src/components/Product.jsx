import React from "react";
import styles from "../styles/product.module.scss";
function Product({ id }) {
  return (
    <main>
      <section className="product-section">
        <div className="leftCol">
          <div className={styles.mainImage}>
            <img src={`./product-images/${1}/image-product-1.jpg`}></img>
          </div>
          <div className={styles.thumbnails}>
            
          </div>
        </div>
        <div className="rightCol"></div>
      </section>
    </main>
  );
}

export default Product;
