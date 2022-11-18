import React from 'react';
import styles from './DetailedWeatherWidget.module.css'

const DetailedWeatherWidget = ({data}) => {
    return (
        <div className={styles.root}>
            <div className={styles.info}>
                <p>Дата </p>
                <p>{data.date}</p>
            </div>
            <div className={styles.info}>
                <p>Макс. темп. </p>
                <p>{data.day.maxtemp_c} с</p>
            </div>
            <div className={styles.info}>
                <p>Ср. темп. </p>
                <p>{data.day.avgtemp_c} с</p></div>
            <div className={styles.info}>
                <p>Мин. темп. </p>
                <p>{data.day.mintemp_c} с</p>
            </div>
            <div className={styles.info}>
                <p>Ветер </p>
                <p>{data.day.maxwind_kph} км/ч</p>
            </div>
        </div>
    );
};

export default DetailedWeatherWidget;