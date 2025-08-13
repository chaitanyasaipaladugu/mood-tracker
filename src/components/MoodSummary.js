// Shows today's mood
// src/components/MoodSummary.js
import React from "react";
import { useSelector } from "react-redux";

export default function MoodSummary() {
  const moods = useSelector((state) => state.mood);
  const today = new Date().toISOString().split("T")[0];
  const todayMood = moods.find((m) => m.date === today);

  return (
    <div>
      <h3>Today's Mood</h3>
      {todayMood ? <p>{todayMood.mood}</p> : <p>No mood recorded today</p>}
    </div>
  );
}
