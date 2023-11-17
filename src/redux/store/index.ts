// src/redux/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import aiReducer from "../reducers/aiReducer";

const store = configureStore({
  reducer: {
    ai: aiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
