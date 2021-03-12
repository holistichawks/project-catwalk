import React from 'react';
import styles from './progressBar.css';

const ProgressBar = ({percentRating, displayBorder, handleMouseEnter, handleMouseLeave}) => (
  <div className={styles.progressFrame} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{border: displayBorder ? '1px solid black' : 'none'}}>
    <div className={styles.progressBar} style={{height: '25px', width: `${percentRating}%`}}></div>
  </div>
);

export default ProgressBar;
