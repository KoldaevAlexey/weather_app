import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    city: 'Москва',
}

const weatherCitySlice = createSlice({
    name: 'weatherCity',
    initialState,
    reducers: {
        setCity (state, action) {
            state.city = action.payload
        },
    },
})

export const { setCity } = weatherCitySlice.actions
export default weatherCitySlice.reducer