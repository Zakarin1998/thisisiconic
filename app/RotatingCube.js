import React, { useEffect } from 'react';
import styles from './RotatingCube.module.css'; // Import the CSS module for styling

const RotatingCube = () => {
  useEffect(() => {
    const startRotation = () => {
      const cube = document.querySelector(`.${styles.cube}`); // Use the styles object to reference CSS classes
      cube.classList.add(styles.rotate); // Use the styles object to reference CSS classes
    };

    startRotation();
  }, []);

  return (
    <div className={styles['cube-container']}> {/* Use bracket notation for class names with hyphens */}
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.front}`}>THIS IS ICONIC</div>
        <div className={`${styles.face} ${styles.back}`}>THIS IS ICONIC</div>
        <div className={`${styles.face} ${styles.right}`}>THIS IS ICONIC</div>
        <div className={`${styles.face} ${styles.left}`}>THIS IS ICONIC</div>
        <div className={`${styles.face} ${styles.top}`}>THIS IS ICONIC</div>
        <div className={`${styles.face} ${styles.bottom}`}>THIS IS ICONIC</div>
      </div>
    </div>
  );
};

export default RotatingCube;
