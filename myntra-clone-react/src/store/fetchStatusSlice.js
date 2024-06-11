import { createSlice } from "@reduxjs/toolkit";

export const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetchDone: false, currentlyFetching: false }, //Pending :false, Done : true
  reducers: {
    markFetchDone: (state) => {
      return void (state.fetchDone = true);
    },
    markFetchStarted: (state) => {
      return void (state.currentlyFetching = true);
    },
    markFetchFinished: (state) => {
      return void (state.currentlyFetching = false);
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
