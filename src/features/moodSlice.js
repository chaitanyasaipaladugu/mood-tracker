// Redux slice for moods
import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem("moods");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("moods", JSON.stringify(state));
  } catch {}
};

const moodSlice = createSlice({
  name: "moods",
  initialState: loadFromLocalStorage(),
  reducers: {
    addMoodEntry: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    deleteMoodEntry: (state, action) => {
      const updated = state.filter((entry) => entry.id !== action.payload);
      saveToLocalStorage(updated);
      return updated;
    },
  },
});
export const { addMoodEntry, deleteMoodEntry } = moodSlice.actions;
export default moodSlice.reducer;
