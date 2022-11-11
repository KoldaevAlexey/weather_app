import React from 'react';
import styles from './WeatherWidget.module.css'

const WeatherWidget = ({data}) => {

    let localTime = data.location.localtime;

    return (
        <div className={styles.container}>
            <div className={styles.basic_info}>
                <div className={styles.city_info}>
                    <p>Current day</p>
                    <p>{data.location.name}</p>
                    <p>{localTime.slice(10, localTime.length)}</p>
                </div>
                <div className={styles.weather_temp}>
                    <img src={data.current.condition.icon} alt="day" width={100} height={100}/>
                    <div >
                        <p>{data.current.temp_c}</p>
                        <h3>{data.current.condition.text}</h3>
                    </div>
                </div>
            </div>
            <div className={styles.additional_info}>
                <div className={styles.additional_info_items}>
                    <p>Wind</p>
                    <p>{data.current.wind_kph} km/h</p>
                </div>
                <div className={styles.additional_info_items}>
                    <p>Сloudiness</p>
                    <p>
                        {data.current.cloud}%
                    </p>
                </div>
                <div className={styles.additional_info_items}>
                    <p>???</p>
                    <p>
                        ???
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;