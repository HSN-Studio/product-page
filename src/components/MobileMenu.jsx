import React, { useState } from "react";
import styles from "../styles/mobileMenu.module.scss";
import closeIcon from "../images/icon-close.svg";
function MobileMenu({ showMobileMenu, handler }) {
  return showMobileMenu ? (
    <>
      <div className={styles.mobileMenuBackdrop}></div>
      <div className={styles.mobileMenu}>
        <img
          src={closeIcon}
          className={styles.crossIcon}
          onClick={() => handler(false)}
        ></img>
        <div className={styles.mobileMenuItems}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </div>
      </div>
    </>
  ) : null;
}

export default MobileMenu;
