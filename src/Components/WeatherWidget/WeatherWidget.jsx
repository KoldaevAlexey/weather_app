import React from 'react';
import styles from './WeatherWidget.module.css'
import {Link} from "react-router-dom";

const WeatherWidget = ({data}) => {
    const localTime = data.location.localtime;

    return (
        <Link to={'/detailedWeather'} className={styles.container}>
            <div className={styles.basic_info}>
                <h2>Погода на сегодня</h2>
                <div className={styles.temp}>
                    <img src={data.current.condition.icon} alt="day"/>
                    <div>
                        <p>{data.current.temp_c}</p>
                        <h3>{data.current.condition.text}</h3>
                    </div>
                </div>
            </div>
            <div className={styles.additional_info}>
                <div className={styles.additional_info_items}>
                    <p>Город:</p>
                    <p>
                        {data.location.name}
                    </p>
                </div>
                <div className={styles.additional_info_items}>
                    <p>Местное время:</p>
                    <p>
                        {localTime.slice(10, localTime.length)}
                    </p>
                </div>
                <div className={styles.additional_info_items}>
                    <p>Ветер:</p>
                    <p>{data.current.wind_kph} km/h</p>
                </div>
                <div className={styles.additional_info_items}>
                    <p>Облачность:</p>
                    <p>
                        {data.current.cloud}%
                    </p>
                </div>

            </div>
        </Link>
    );
};

export default WeatherWidget;