import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewsData = createAsyncThunk (
    "news/fetchNewsData",
    async(_, { rejectWithValue }) => {
        const { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=ru&apiKey=a6b504b238504b96903540f62b28a154');
        return data;
    }
)

const initialState = {
    news: null,
}

export const newsDataSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers:  (builder) => {
        builder.addCase(fetchNewsData.fulfilled, (state, action) => {
            state.news = action.payload;
            state.news.articles.length = 5;
        })
    },
})

export default newsDataSlice.reducer;