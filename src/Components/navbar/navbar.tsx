import styles from "./navbar.module.css";
import blueCloud from "../../assets/blueCloud.png";
import celsius from "../../assets/celsius.png";
import ferenhit from "../../assets/ferenhit.png";
import settingIcon from "../../assets/setting.png";
import { useNavigate } from "react-router-dom";
import type React from "react";

type NavProps = {
  units: string;
  changeUnits: (newUnits: string) => void;
};

export const Navbar: React.FC<NavProps> = ({ changeUnits }) => {
  const navigate = useNavigate();
  const navigateToSettings = () => {
    navigate("settings");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.iconImage1}>
        <img src={blueCloud} alt="blueCloud.png" />
      </div>
      <h1>Weather App</h1>
      <div className={styles.iconImage2}>
        <img
          src={celsius}
          alt="celsius.png"
          onClick={() => changeUnits("°C")}
        />
        <img
          src={ferenhit}
          alt="ferenhit.png"
          onClick={() => changeUnits("°F")}
        />
        <img
          className={styles.settingIcon}
          onClick={navigateToSettings}
          src={settingIcon}
          alt="settingIcon"
        />
      </div>
    </div>
  );
};