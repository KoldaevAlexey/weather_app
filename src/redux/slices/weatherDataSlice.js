import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    weatherData: null,
}

export const fetchWeatherData = createAsyncThunk(
    'weatherData/fetchWeatherData',
    async (city,{rejectWithValue}) => {
        const { data } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=5fb8d8d2b511466a816171917221011&q=${city ?? 'Moscow'}&aqi=no&lang=ru`);
        return data;
    }
)

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