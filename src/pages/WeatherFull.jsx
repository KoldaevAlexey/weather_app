import React from 'react';
import WeatherWidget from "../Components/WeatherWidget/WeatherWidget";

const WeatherFull = () => {
    return (
        <div>
            <h1>MOSCOW погода на три дня</h1>
            <WeatherWidget/>
            <WeatherWidget/>
            <WeatherWidget/>
        </div>
    );
};

export default WeatherFull;