import React, { useState, useContext, useRef } from "react";
import styles from "../styles/gallery.module.scss";
import Lightbox from "./Lightbox";
import { setstoreContext } from "../StoreProvider";
function Gallery({ productId, thumbnails }) {
  const setStore = useContext(setstoreContext);
  const productThumbnails = thumbnails;
  const mainImage = useRef();
  const [activeImage, setactiveImage] = useState(1);
  const thumbnailHandler = ({ target }) => {
    const id = target.dataset.id;
    setactiveImage(id);
    const thumbnailImages = document.querySelectorAll(".thumbnail-images");
    thumbnailImages.forEach((element) => {
      element.dataset.id === id
        ? element.classList.add("activeThumbnail")
        : element.classList.remove("activeThumbnail");
    });
    mainImage.current.src = `./product-images/${productId}/image-product-${id}.jpg`;
  };
  const mainImageHandler = (e) => {
    setStore((prevStore) => {
      const updatedStore = { ...prevStore };
      updatedStore.lightBoxVisibility = !updatedStore.lightBoxVisibility;
      return updatedStore;
    });
  };
  return (
    <div className={styles.gallery}>
      <Lightbox
        productId={productId}
        thumbnails={thumbnails}
        activeImageId={activeImage}
      />
      <div className={styles.mainImage}>
        <img
          src={`./product-images/${productId}/image-product-${productId}.jpg`}
          ref={mainImage}
          onClick={mainImageHandler}
        ></img>
      </div>
      <div className={styles.thumbnails}>
        {productThumbnails.map((path, i) => (
          <img
            src={path}
            key={i}
            alt={`product thumbnail ${i}`}
            data-id={i + 1}
            onClick={thumbnailHandler}
            className="thumbnail-images"
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
