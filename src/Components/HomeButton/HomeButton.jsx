import React from 'react';
import {Link} from "react-router-dom";
import styles from './HomeButton.module.css'

const HomeButton = () => {
    return (
            <Link to={'/'} >
                <button className={styles.root}>
                    На главную
                </button>
            </Link>
    );
};

export default HomeButton;