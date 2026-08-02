import React from 'react'
import styles from './searchBar.module.css'

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search..." className={styles.searchInput} />
    </div>
  )
}
