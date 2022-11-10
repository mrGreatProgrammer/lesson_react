import React from 'react'
import styles from './DotsLoader.module.css';

const DotsLoader = () => {
  return (
    <div className={styles.loader} id={styles.loaderTwo}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default DotsLoader