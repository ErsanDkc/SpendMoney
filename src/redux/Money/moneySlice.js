import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
    name: "money",
    initialState: {
        value: 1000000000,
    },
    reducers: {}
})

export default moneySlice.reducer