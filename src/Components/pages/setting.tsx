import styles from "./Setting.module.css";
import { Theme } from "../Theme/Theme";
import { useNavigate } from "react-router-dom";

type SettingProps = {
  isDark: boolean;
  handleChange: () => void;
 
};

export const Setting: React.FC<SettingProps> = ({ isDark, handleChange }) => {
  const navigate = useNavigate();
  const backToHome =() => {
    navigate("/")
  }
 

  return (
    <>
      <div
        className={styles.settingContainer}>
        <Theme isChecked={isDark} handleChange={handleChange} />
  
        <button className={styles.backButton} onClick={backToHome}>Back to Home</button>
      </div>
      
              
    </>
  );
};
