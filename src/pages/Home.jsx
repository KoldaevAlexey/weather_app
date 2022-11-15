import React, {useState} from 'react';
import WeatherWidget from "../Components/WeatherWidget/WeatherWidget";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { fetchWeatherData } from '../redux/slices/weatherDataSlice'

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.weatherData.weatherData);


    React.useEffect(() => {
        dispatch(fetchWeatherData())
    }, [])

    return (
        <div>
             {data && <WeatherWidget data={data}/>}
        </div>
    );
};

export default Home;