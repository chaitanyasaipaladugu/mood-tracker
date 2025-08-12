// Redux store setup
import moodReducer from "../features/moodSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    moods: moodReducer,
  },
});
export default store;
