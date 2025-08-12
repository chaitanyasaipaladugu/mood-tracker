// Select + submit mood
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMoodEntry } from "../features/moodSlice";

export default function MoodForm() {
  const [mood, setMood] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];
    dispatch(addMoodEntry({ id: today, mood }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="Happy">😊 Happy</option>
        <option value="Neutral">😐 Neutral</option>
        <option value="Sad">😢 Sad</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
