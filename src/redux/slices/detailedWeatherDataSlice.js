import {createAsyncThunk, createSlice, isRejectedWithValue} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY_WEATHER} from "../../utils/consts";

export const fetchDetailedWeatherData = createAsyncThunk(
    'users/fetchByIdStatus',
    async (city, {rejectWithValue}) => {
        const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY_WEATHER}&q=${city}&days=3&aqi=no&alerts=no&lang=ru`);
        return data;
    }
)

const initialState = {
    detailedWeatherData: null,
}

const detailedWeatherDataSlice = createSlice({
    name: 'detailedWeatherData',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDetailedWeatherData.fulfilled, (state, action) => {
            state.detailedWeatherData = action.payload;
        })
    },
})

export default detailedWeatherDataSlice.reducer;