import React from 'react'
import styles from './navbar.module.css'
import tiktok from "../../assets/Tiktok.jpg";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/Twitter.jpg";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
       <div className={styles["iconImage1"]}>
          <img src={tiktok} alt="Tiktok.jpg" />
         
        </div>
        <h1>Weather App</h1>
          <div className={styles["iconImage2"]}>
          <img src={facebook} alt="Facebook.png" />
          <img src={twitter} alt="Twitter.jpg" />
        </div>
    </div>
  )
}
