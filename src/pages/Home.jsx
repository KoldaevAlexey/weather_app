import React from 'react';
import WeatherWidget from "../Components/WeatherWidget/WeatherWidget";
import axios from "axios";

const Home = () => {

    const [data, setData] = React.useState({})


    React.useEffect(() => {
        try {
            const getData = async () => {
                const { data } = await axios.get("http://api.weatherapi.com/v1/current.json?key=5fb8d8d2b511466a816171917221011&q=Madrid&aqi=no&lang=ru");
                setData(data)
            }
            getData()
            console.log(data)
        }
        catch (e) {
            console.log(e.message)
        }


    }, [])

    return (
        <div>
            <WeatherWidget data={data}/>
        </div>
    );
};

export default Home;