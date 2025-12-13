import { useState } from 'react';
import styles from './ColorPicker.module.css'
import { FiCopy, FiCheck } from "react-icons/fi";

function ColorPicker() {

    const [color, setColor] = useState("#000000");

    function handleColorChange(event) {
        setColor(c => event.target.value);
    }

    function handleCopy() {
        navigator.clipboard.writeText(color);
    }

    return (
        <div className={styles.root}>
            <h1>Color Picker</h1>
            <div className={styles.wrapper}>
                <div className={styles.colorbox} style={{backgroundColor: color}}>
                    Selected Color: {color}
                </div>
                <p>Select a color:</p>
                <div className={styles.elementsWrapper}>
                    <input className={styles.input} type="color" value={color} onChange={handleColorChange}></input>
                    <button onClick={handleCopy} className={styles.copyBtn} style={{backgroundColor: color}}>
                        <FiCopy />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ColorPicker