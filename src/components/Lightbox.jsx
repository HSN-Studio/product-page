import React, { useRef } from "react";
import { storeContext, setstoreContext } from "../StoreProvider";
import styles from "../styles/lightbox.module.scss";
import iconNext from "../images/icon-next.svg";
import iconPrevious from "../images/icon-previous.svg";
import iconClose from "../images/icon-close.svg";
import { useContext } from "react";
function Lightbox({ productId, thumbnails, activeImageId }) {
  const store = useContext(storeContext);
  const setStore = useContext(setstoreContext);
  const productThumbnails = thumbnails;
  const mainImage = useRef();
  const thumbnailHandler = ({ target }) => {
    const id = target.dataset.id;
    const thumbnailImages = document.querySelectorAll(
      ".thumbnail-images-lightbox"
    );
    thumbnailImages.forEach((element) => {
      element.dataset.id === id
        ? element.classList.add("activeThumbnail")
        : element.classList.remove("activeThumbnail");
    });
    mainImage.current.src = `./product-images/${productId}/image-product-${id}.jpg`;
  };
  const lightBoxHandler = () => {
    setStore((prevStore) => {
      const updatedStore = { ...prevStore };
      updatedStore.lightBoxVisibility = !updatedStore.lightBoxVisibility;
      return updatedStore;
    });
  };
  return store.lightBoxVisibility ? (
    <div className={styles.lightbox}>
      <div className={styles.backdrop} onClick={lightBoxHandler} />
      <div className={styles.mainImage}>
        <img
          src={`./product-images/${productId}/image-product-${productId}.jpg`}
          ref={mainImage}
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
            className="thumbnail-images-lightbox"
          ></img>
        ))}
      </div>
    </div>
  ) : null;
}

export default Lightbox;
