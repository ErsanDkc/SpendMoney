import { createSlice } from "@reduxjs/toolkit";

// export const moneySlice = createSlice({
//     name: "money",
//     initialState: {
//         value: 1000000000,
//         difference:0,
//         items:[]
//     },
//     reducers: {
//         buy: (state,action) => {
//         let {price,amount} = action.payload
//         state.difference = parseInt(price) *parseInt(amount)
//         state.value = state.value - state.difference
        
//         let addedItem = state.items.find(
//             (item) => item.title === action.payload.title
//           );
//           if (addedItem) {
//             addedItem.amount += action.payload.amount;
//           } else {
//             state.items = [...state.items, action.payload];
//           }
        
//         },
//         sell: (state,action) => {
//             let {price,amount} = action.payload
//             state.difference = parseInt(price) *parseInt(amount)
//             state.value = state.value + state.difference
            
//             let addedItem = state.items.find(
//                 (item) => item.title === action.payload.title
//               );
//               if (addedItem) {
//                 if (addedItem.amount - action.payload.amount === 0) {
//                   state.items = state.items.filter(
//                     (item) => item.title !== addedItem.title
//                   );
//                 } else {
//                   addedItem.amount -= action.payload.amount;
//                 }
//               }
            
            
//             }
//     }
// })

// export const selectItems = (state) => state.money.items;
// export const selectValue = (state) => state.money.value;
// export const {buy,sell} = moneySlice.actions
// export default moneySlice.reducer
export const moneySlice = createSlice({
    name: "money",
    initialState: {
      value: 100000000000,
      items: [],
      difference: 0,
    },
    reducers: {
      buy: (state, action) => {
        state.difference =
          -parseInt(action.payload.amount) * parseInt(action.payload.price);
        state.value += state.difference;
  
        let addedItem = state.items.find(
          (item) => item.title === action.payload.title
        );
        if (addedItem) {
          addedItem.amount += action.payload.amount;
        } else {
          state.items = [...state.items, action.payload];
        }
      },
      sell: (state, action) => {
        state.difference =
          parseInt(action.payload.amount) * parseInt(action.payload.price);
        state.value += state.difference;
  
        let addedItem = state.items.find(
          (item) => item.title === action.payload.title
        );
        if (addedItem) {
          if (addedItem.amount - action.payload.amount === 0) {
            state.items = state.items.filter(
              (item) => item.title !== addedItem.title
            );
          } else {
            addedItem.amount -= action.payload.amount;
          }
        }
      },
    },
  });
  
  export const selectItems = (state) => state.money.items;
  export const selectValue = (state) => state.money.value;
  
  export default moneySlice.reducer;
  
  export const { buy, sell } = moneySlice.actions;
  