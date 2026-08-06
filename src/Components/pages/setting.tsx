import styles from "./Setting.module.css";
import { Theme } from "../Theme/Theme";
import { NavLink } from "react-router-dom";

type SettingProps = {
  isDark: boolean;
  handleChange: () => void;
  setIsDark: boolean;
};

export const Setting: React.FC<SettingProps> = ({ isDark, handleChange }) => {
  // const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <div
        className={styles.settingContainer}
        data-theme={isDark ? "dark" : "light"}
      >
        <Theme isChecked={isDark} handleChange={handleChange} />
      </div>
      <div>
        <NavLink to="/"> Back</NavLink>
      </div>
    </>
  );
};
