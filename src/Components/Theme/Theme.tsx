import styles from "./Theme.module.css";

export type ThemeProps = {
  handleChange: () => void;
  isChecked: boolean;
};

export const Theme = ({ handleChange, isChecked }: ThemeProps) => {
  return (
    <div className={styles.themeContainer}>
      <input
        type="checkbox"
        id="check"
        className="theme"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor="check"> Dark Mode</label>
    </div>
  );
};