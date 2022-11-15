import React from 'react';
import styles from './DetailedWeatherWidget.module.css'

const DetailedWeatherWidget = ({data}) => {
    return (
        <div className={styles.root}>
            <p>Дата: {data.date}</p>
            <p>Макс. темп.: {data.day.maxtemp_c} с</p>
            <p>Ср. темп.: {data.day.avgtemp_c} с</p>
            <p>Мин. темп.: {data.day.mintemp_c} с</p>
            <p>Ветер: {data.day.maxwind_kph} км/ч</p>
        </div>
    );
};

export default DetailedWeatherWidget;