import styles from "./navbar.module.css";
import facebook from "../../assets/Facebook.png";
import twitter from "../../assets/Twitter.png";
import tikTok from "../../assets/Tiktok.png";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.iconImage1}>
        <img src={facebook} alt="Facebook.png" />
      </div>
      <h1>Weather App</h1>
      <div className={styles.iconImage2}>
        <img src={twitter} alt="Twitter.png" />
        <img src={tikTok} alt="TikTok.png" />
      </div>
    </div>
  );
};
