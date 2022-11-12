import React, { useState, useContext, useRef } from "react";
import styles from "../styles/gallery.module.scss";
import Lightbox from "./Lightbox";
import { setstoreContext } from "../StoreProvider";
import iconNext from "../images/icon-next.svg";
import iconPrevious from "../images/icon-previous.svg";
function Gallery({ productId, thumbnails }) {
  const [imageId, setimageId] = useState(1);
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
  const prevBtnHandler = () => {
    setimageId((prevId) => (prevId > 1 ? prevId - 1 : prevId));
    thumbnails.forEach((element) => {
      element.dataset.id === imageId
        ? element.classList.add("activeThumbnail")
        : element.classList.remove("activeThumbnail");
    });
  };
  const nexBtnHandler = () => {
    setimageId((prevId) => (prevId < 4 ? +prevId + 1 : prevId));
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
          src={`./product-images/${productId}/image-product-${imageId}.jpg`}
          ref={mainImage}
          onClick={mainImageHandler}
        ></img>
        <div className={styles.navigationIcons}>
          <div className={styles.iconPrevious} onClick={prevBtnHandler}>
            <img src={iconPrevious} className={styles.icon}></img>
          </div>
          <div className={styles.iconNext} onClick={nexBtnHandler}>
            <img src={iconNext}></img>
          </div>
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
    </div>
  );
}

export default Gallery;
