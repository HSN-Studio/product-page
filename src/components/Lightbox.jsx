import React, { useEffect, useRef, useState } from "react";
import { storeContext, setstoreContext } from "../StoreProvider";
import styles from "../styles/lightbox.module.scss";
import iconNext from "../images/icon-next.svg";
import iconPrevious from "../images/icon-previous.svg";
import iconClose from "../images/icon-close.svg";
import { useContext } from "react";
function Lightbox({ productId, thumbnails, activeImageId }) {
  const [imageId, setimageId] = useState(activeImageId);
  const store = useContext(storeContext);
  const setStore = useContext(setstoreContext);
  const productThumbnails = thumbnails;
  const mainImage = useRef();
  const thumbnailImages = document.querySelectorAll(
    ".thumbnail-images-lightbox"
  );
  useEffect(() => {
    setimageId(activeImageId);
  }, [activeImageId]);
  useEffect(() => {
    thumbnailImages.forEach((element) => {
      +element.dataset.id === imageId
        ? element.classList.add("activeThumbnail")
        : element.classList.remove("activeThumbnail");
    });
    console.log(imageId);
  }, [imageId]);

  const thumbnailHandler = ({ target }) => {
    const id = +target.dataset.id;
    thumbnailImages.forEach((element) => {
      element.dataset.id === id
        ? element.classList.add("activeThumbnail")
        : element.classList.remove("activeThumbnail");
    });
    mainImage.current.src = `./product-images/${productId}/image-product-${id}.jpg`;
    setimageId(id);
  };
  const lightBoxHandler = () => {
    setStore((prevStore) => {
      const updatedStore = { ...prevStore };
      updatedStore.lightBoxVisibility = !updatedStore.lightBoxVisibility;
      return updatedStore;
    });
  };
  const prevBtnHandler = () => {
    setimageId((prevId) => (prevId > 1 ? prevId - 1 : prevId));
    thumbnailImages.forEach((element) => {
      element.dataset.id === imageId
        ? element.classList.add("activeThumbnail")
        : element.classList.remove("activeThumbnail");
    });
  };
  const nexBtnHandler = () => {
    setimageId((prevId) => (prevId < 4 ? +prevId + 1 : prevId));
  };
  return store.lightBoxVisibility ? (
    <div className={styles.lightbox}>
      <div className={styles.backdrop} onClick={lightBoxHandler} />
      <div className={styles.mainImage}>
        <img
          src={`./product-images/${productId}/image-product-${imageId}.jpg`}
          ref={mainImage}
        ></img>
        <div className={styles.navigationIcons}>
          <div className={styles.iconPrevious} onClick={prevBtnHandler}>
            <img src={iconPrevious} className={styles.icon}></img>
          </div>
          <div className={styles.iconNext} onClick={nexBtnHandler}>
            <img src={iconNext}></img>
          </div>
          <div className={styles.iconClose} onClick={lightBoxHandler}>
            <img src={iconClose}></img>
          </div>
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
            className="thumbnail-images-lightbox"
          ></img>
        ))}
      </div>
    </div>
  ) : null;
}

export default Lightbox;
