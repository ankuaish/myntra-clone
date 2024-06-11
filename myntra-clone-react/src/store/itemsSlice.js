import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (action) => {
      return action.payload;
    },
  },
});

export const itemActions = itemsSlice.actions;
