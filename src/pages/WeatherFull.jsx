import React, {useState} from 'react';
import DetailedWeatherWidget from "../Components/DetailedWeatherWidget/DetailedWeatherWidget";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetailedWeatherData} from "../redux/slices/detailedWeatherDataSlice";
import {Link} from "react-router-dom";
import HomeButton from "../Components/HomeButton/HomeButton";

const WeatherFull = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.detailedWeatherData.detailedWeatherData)
    const city = useSelector((state) => state.weatherCity.city)

    React.useEffect(() => {
        try {
            dispatch(fetchDetailedWeatherData(city));
        }
        catch (e) {
            console.log(e.message);
        }

    }, [])

    return (
        <div style={{width: '100vw'}}>
            <h1 style={{display:'flex', justifyContent: 'center', marginTop:'3vw', fontSize:"5vh"}} >
                {data && data.location.name} погода на три дня
            </h1>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {data && data.forecast.forecastday.map((item) => (
                    <DetailedWeatherWidget key={item.date_epoch} data={item}/>
                ))}
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <HomeButton />
            </div>

        </div>
    );
};

export default WeatherFull;