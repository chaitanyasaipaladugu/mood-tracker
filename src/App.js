// src/App.js
import React from "react";
import MoodForm from "./components/MoodForm";
import MoodHistory from "./components/MoodHistory";
import MoodGraph from "./components/MoodGraph";
import MoodSummary from "./components/MoodSummary";

export default function App() {
  return (
    <div>
      <h1>Daily Mood Tracker</h1>
      <MoodForm />
      <MoodSummary />
      <MoodHistory />
      <MoodGraph />
    </div>
  );
}
