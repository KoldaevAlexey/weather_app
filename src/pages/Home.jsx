import React from 'react';
import WeatherWidget from "../Components/WeatherWidget/WeatherWidget";
import {useDispatch, useSelector} from "react-redux";
import { fetchWeatherData } from '../redux/slices/weatherDataSlice'
import SideBar from "../Components/SideBar/SideBar";

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.weatherData.weatherData);
    const city = useSelector((state) => state.weatherCity.city)


    React.useEffect(() => {
        try {
            dispatch(fetchWeatherData(city));
        }
        catch (e) {
            console.log(e.message);
        }

    }, [])

    return (
        <div className={'content'}>
             {data && <WeatherWidget data={data}/>}
            <SideBar/>
        </div>
    );
};

export default Home;