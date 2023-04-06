import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./Money/moneySlice"

export const store = configureStore({
    reducer: {
        money: moneyReducer,
    }
})