import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/icons/logo.png'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" width={40}/>
                <p>Weather_App</p>
            </div>
            <div className={styles.input_wrapper}>
                <input type="text" placeholder={'enter city'}/>
                <button className={styles.btn_input}>push</button>
            </div>
        </div>
    );
};

export default Header;