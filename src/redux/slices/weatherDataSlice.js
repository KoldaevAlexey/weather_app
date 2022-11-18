import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import {API_KEY_WEATHER} from "../../utils/consts";

export const fetchWeatherData = createAsyncThunk(
    'weatherData/fetchWeatherData',
    async (city,{rejectWithValue}) => {
        const { data } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY_WEATHER}&q=${city}&aqi=no&lang=ru`);
        return data;
    }
)

const initialState = {
    weatherData: null,
}

export const weatherDataSlice = createSlice({
    name: 'weatherData',
    initialState,
    reducers: {},
    status: null,
    error: null,
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
           state.weatherData = action.payload;
            })
        },

})

export default weatherDataSlice.reducer;