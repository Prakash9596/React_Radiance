import {createSlice} from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: 'bag',
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);              //ye ek ek item add krega (ID based)
    },
    removeFromBag: (state, action) => {
      return state.filter(itemId => itemId !== action.payload);   //ye ek ek item delete krega bag se (ID based)
    },
  }
});

export const bagActions = bagSlice.actions;

export default bagSlice;