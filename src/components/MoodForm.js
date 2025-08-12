// Select + submit mood
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMoodEntry } from "../features/moodSlice";

export default function MoodForm() {
  const [mood, setMood] = useState("");
  const dispatch = useDispatch();
}
