import { configureStore} from "@reduxjs/toolkit";
import weatherDataSlice from "./slices/weatherDataSlice";
import detailedWeatherDataSlice from "./slices/detailedWeatherDataSlice";

export const store = configureStore({
    reducer: {
        weatherData: weatherDataSlice,
        detailedWeatherData: detailedWeatherDataSlice,
    },
})