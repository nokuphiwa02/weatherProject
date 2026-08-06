import styles from "./navbar.module.css";
import facebook from "../../assets/Facebook.png";
import twitter from "../../assets/Twitter.png";
import tikTok from "../../assets/Tiktok.png";
import settingIcon from '../../assets/setting.png'
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const navigateToSettings = () => {
    navigate("settings");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.iconImage1}>
        <img src={facebook} alt="Facebook.png" />
      </div>
      <h1>Weather App</h1>
      <div className={styles.iconImage2}>
        <img src={twitter} alt="Twitter.png" />
        <img src={tikTok} alt="TikTok.png" />
        <img className={styles['settingIcon']} onClick={navigateToSettings} src= {settingIcon} alt="settingIcon"/>
     
      </div>
     
    </div>
  );
};
