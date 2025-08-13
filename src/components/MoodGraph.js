// src/components/MoodGraph.js
import React from "react";
import { useSelector } from "react-redux";

export default function MoodGraph() {
  const moods = useSelector((state) => state.mood);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weekData = days.map((day) => ({
    day,
    Happy: moods.filter(
      (m) =>
        new Date(m.date).getDay() === days.indexOf(day) && m.mood === "Happy"
    ).length,
    Neutral: moods.filter(
      (m) =>
        new Date(m.date).getDay() === days.indexOf(day) && m.mood === "Neutral"
    ).length,
    Sad: moods.filter(
      (m) => new Date(m.date).getDay() === days.indexOf(day) && m.mood === "Sad"
    ).length,
  }));

  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
      {weekData.map((dayData, index) => {
        const total = dayData.Happy + dayData.Neutral + dayData.Sad;
        return (
          <div key={index} style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                height: "100px",
                width: "20px",
                border: "1px solid black",
              }}
            >
              <div
                style={{
                  background: "green",
                  height: `${dayData.Happy * 20}px`,
                }}
              ></div>
              <div
                style={{
                  background: "blue",
                  height: `${dayData.Neutral * 20}px`,
                }}
              ></div>
              <div
                style={{ background: "red", height: `${dayData.Sad * 20}px` }}
              ></div>
            </div>
            <small>{dayData.day}</small>
          </div>
        );
      })}
    </div>
  );
}
