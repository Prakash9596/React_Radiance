//sare store ka baap yani bagslice, fetchstatusslice & itemSlice ko ek jagah krne wala

import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,                        //1
    fetchStatus: fetchStatusSlice.reducer,            //2
    bag: bagSlice.reducer,                            //3
  }
});

export default myntraStore;