import { configureStore} from "@reduxjs/toolkit";
import weatherDataSlice from "./slices/weatherDataSlice";
import detailedWeatherDataSlice from "./slices/detailedWeatherDataSlice";
import weatherCitySlice from "./slices/weatherCitySlice";
import newsDataSlice from "./slices/newsDataSlice";

export const store = configureStore({
    reducer: {
        weatherData: weatherDataSlice,
        detailedWeatherData: detailedWeatherDataSlice,
        weatherCity: weatherCitySlice,
        newsData: newsDataSlice,
    },
})