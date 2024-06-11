import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./itemsSlice";

export const myntraStore = configureStore({
  reducer: { items: itemsSlice.reducer },
});
