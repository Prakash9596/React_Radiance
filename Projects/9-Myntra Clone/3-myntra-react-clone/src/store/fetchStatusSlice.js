//ye pura slice spinner ke liye bnaya gya hai 

import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false, // false: 'PENDING' and true: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;         //fethcing done to true kr do
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;       //avi fethcing kr rha to true kr do
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;      //avi fethcing nhi kr rha to false kr do
    }
  }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;