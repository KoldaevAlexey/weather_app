import React from 'react';
import DetailedWeatherWidget from "../Components/DetailedWeatherWidget/DetailedWeatherWidget";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetailedWeatherData} from "../redux/slices/detailedWeatherDataSlice";
import {Link} from "react-router-dom";

const WeatherFull = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.detailedWeatherData.detailedWeatherData)

    React.useEffect(() => {
        dispatch(fetchDetailedWeatherData())
    }, [])

    return (
        <div>
            <h1 style={{display:'flex', justifyContent: 'center', marginTop: 20}} >
                {data && data.location.name} погода на три дня
            </h1>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {data && data.forecast.forecastday.map((item) => (
                    <DetailedWeatherWidget key={item.date_epoch} data={item}/>
                ))}
            </div>
            <Link to={'/'} >
                <button className={'gradient-btn'}>
                    На главную
                </button>
            </Link>
        </div>
    );
};

export default WeatherFull;