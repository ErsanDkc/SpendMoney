import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
    name: "money",
    initialState: {
        value: 1000000000,
        pieces: 0,
    },
    reducers: {
        incereasePiece: (state,action) =>  {
            const {amount,price,title} = action.payload
            state.pieces = -(amount*price)
            state.value += state.pieces
        }
    }
})

export const {incereasePiece} = moneySlice.reducer
export default moneySlice.reducer