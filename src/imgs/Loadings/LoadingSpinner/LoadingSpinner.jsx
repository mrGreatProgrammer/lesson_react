import React from "react";
import styles from "./LadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className={styles.loadingSpinner}></div>
    </div>
  );
  //   <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>;
};

export default LoadingSpinner;
