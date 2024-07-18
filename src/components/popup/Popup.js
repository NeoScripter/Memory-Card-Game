import React, { useState, useEffect } from "react";
import styles from "./Popup.module.css";
import winImage from "./game-win.png";
import loseImage from "./game-lose.png";

function Popup({ gameResult, setActivePopup }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const [content, alt] = gameResult === true ? ["You win!", "Happy Pickachu"] : ["You lose!", "Sad Pickachu"];
    const image = gameResult === true ? winImage : loseImage;
    const containerClass = isVisible ? styles.visible : styles.hidden;
    return (
        <div className={`${styles.popupOverlay} ${containerClass}`}>
            <div className={styles.popup}>
                <img src={image} alt={alt} />
                <div className={styles.popupContent}>
                    {content}
                    <button className={styles.resetBtn} onClick={() => setActivePopup(false)}>Play again</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
