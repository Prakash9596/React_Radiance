import {createSlice} from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  }
});  //initially sare items ko server se fetch krke display krwane ke liye

export const itemsActions = itemsSlice.actions;

export default itemsSlice;