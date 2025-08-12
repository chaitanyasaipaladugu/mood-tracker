// List of entries + filters
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function MoodHistory() {
  const moods = useSelector((state) => state.moods);
  const [filter, setFilter] = useState("");
  const filtered = filter
    ? moods.filter((mood) => mood.mood === filter)
    : moods;
  return (
    <div>
      <h3>Mood history</h3>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="Happy">😊 Happy</option>
        <option value="Neutral">😐 Neutral</option>
        <option value="Sad">😢 Sad</option>
      </select>
      <ul>
        {filtered.map((entry, index) => {
          <li key={index}>
            {" "}
            {entry.date} - {entry.mood}
          </li>;
        })}
      </ul>
    </div>
  );
}
