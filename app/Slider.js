import { useState } from 'react';
import styles from './page.module.css';

const images = [
    "https://i.imgur.com/FNzOpU4.jpg",
    "https://i.imgur.com/OJacUp5.jpg",
    "https://i.imgur.com/md36op3.jpg",
];

function Slider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className={styles.sliderContainer}>
            <img
                className={styles.sliderImage}
                src={images[currentImageIndex]}
                alt="slider"
            />
            <div className={styles.sliderButtons}>
                <button className={styles.button} onClick={handlePrevClick}>{"<"}</button>
                <button className={styles.button} onClick={handleNextClick}>{">"}</button>
            </div>
        </div>
    );
}

export default Slider;
