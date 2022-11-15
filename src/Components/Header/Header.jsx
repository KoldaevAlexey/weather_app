import React, {useState} from 'react';
import styles from './Header.module.css'
import logo from '../../assets/icons/logo.png'
import {useDispatch} from "react-redux";
import {fetchWeatherData} from "../../redux/slices/weatherDataSlice";

const Header = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const fetchWeatherDataHandler = (city) => {
        dispatch(fetchWeatherData(city));
    }


    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" width={40}/>
                <p>Weather_App</p>
            </div>
            <div className={styles.input_wrapper}>
                <input
                    type="text"
                    placeholder={'enter city'}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    className={styles.btn_input}
                    onClick={() => fetchWeatherDataHandler(value)}
                >
                    push
                </button>
            </div>
        </div>
    );
};

export default Header;