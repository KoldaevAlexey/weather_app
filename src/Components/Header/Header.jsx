import React, {useState} from 'react';
import styles from './Header.module.css'
import logo from '../../assets/icons/logo.png'
import {useDispatch, useSelector} from "react-redux";
import {fetchWeatherData} from "../../redux/slices/weatherDataSlice";
import {setCity} from "../../redux/slices/weatherCitySlice";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();

    const fetchWeatherDataHandler = (city) => {
        dispatch(setCity(city))
        dispatch(fetchWeatherData(city));
        setValue('');
    }




    return (
        <div className={styles.container}>
                <Link to={"/"} className={styles.logo}>
                    <img src={logo} alt="logo" width={40}/>
                    <p>Weather_App</p>
                </Link>
            {location.pathname === '/'
                &&
                    <div className={styles.input_wrapper}>
                    <input
                        type="text"
                        placeholder={'введите название города'}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button
                        className={styles.btn_input}
                        onClick={() => fetchWeatherDataHandler(value)}
                    >
                        Найти город
                    </button>
                </div>}

        </div>
    );
};

export default Header;