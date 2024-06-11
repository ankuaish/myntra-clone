import { createSlice } from "@reduxjs/toolkit";

export const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetchDone: false, currentlyFetching: false }, //Pending :false, Done : true
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
