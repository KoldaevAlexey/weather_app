import React, {useState} from 'react';
import WeatherWidget from "../Components/WeatherWidget/WeatherWidget";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { fetchWeatherData } from '../redux/slices/weatherDataSlice'
import SideBar from "../Components/SideBar/SideBar";

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.weatherData.weatherData);
    const city = useSelector((state) => state.weatherCity.city)


    React.useEffect(() => {
        dispatch(fetchWeatherData(city))
    }, [])

    return (
        <div className={'content'}>
             {data && <WeatherWidget data={data}/>}
            <SideBar/>
        </div>
    );
};

export default Home;