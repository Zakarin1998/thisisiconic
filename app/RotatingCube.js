import React, { useEffect } from 'react';
import './RotatingCube.css'; // Import the CSS file for styling

const RotatingCube = () => {
  useEffect(() => {
    const startRotation = () => {
      const cube = document.querySelector('.cube');
      cube.classList.add('rotate');
    };

    startRotation();
  }, []);

  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">THIS IS ICONIC</div>
        <div className="face back">THIS IS ICONIC</div>
        <div className="face right">THIS IS ICONIC</div>
        <div className="face left">THIS IS ICONIC</div>
        <div className="face top">THIS IS ICONIC</div>
        <div className="face bottom">THIS IS ICONIC</div>
      </div>
    </div>
  );
};

export default RotatingCube;
