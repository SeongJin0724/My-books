import React, {useState} from 'react';
import {Button} from 'antd';
import styles from './Popup.module.css';

function Popup() {
    const [popup, setPopup] = useState(true);
    const close = () => {
        setPopup(!popup)
    }
    return(
        <>
        {popup && (
        <div className={styles.popup}>
                <Button className={styles.popup_close}
                onClick={close}
                >X</Button>
                <h2 className={styles.popup_title}>
                    My-Books
                </h2>
                <p className={styles.popup_id}>ID: mark@test.com</p>
                <p className={styles.popup_password}>
                    PASSWORD: fastcampus
                </p>
            </div>
        )}
        </>
    )
}

export default Popup;