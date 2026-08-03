import React from "react";
import styles from "./searchBar.module.css";
import searchIcon from "../../assets/searchIcon.png";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchInput}
      />
      <img src={searchIcon} alt="Search Icon" className={styles.searchIcon} />
    </div>
  );
};
