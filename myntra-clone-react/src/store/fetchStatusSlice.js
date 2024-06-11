import { createSlice } from "@reduxjs/toolkit";

export const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetchDone: false, currentlyFetching: false }, //Pending :false, Done : true
  reducers: {
    markFetchDone: (state) => {
      return (state.fetchDone = true);
    },
    markFetchStarted: (state) => {
      return (state.currentlyFetching = true);
    },
    markFetchFinished: (state) => {
      return (state.currentlyFetching = false);
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
