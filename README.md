# 📝 Mood Tracker App (React + Redux)

A simple **Mood Tracker** built with **React** and **Redux** for state management.  
Users can select their mood for the day, view a history of moods, and filter the history.

---

## 📌 Features
- **Log your mood** for the day
- **View all moods** in a history list
- **Filter moods** by Happy, Neutral, or Sad
- **Persistent state management** using Redux (instead of local component state)

---

## 📂 Project Structure
src/
│── components/
│ ├── MoodSelector.js # Select mood for the day
│ ├── MoodHistory.js # View & filter mood history
│── features/
│ ├── moodSlice.js # Redux slice for moods
│── store.js # Redux store configuration
│── App.js # Main app component
│── index.js # App entry point

yaml
Copy code

---

## 🛠️ Tech Stack
- **React** – UI library
- **Redux Toolkit** – State management
- **React-Redux** – Binding between React and Redux

---

## 🚀 Installation & Setup
1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/mood-tracker.git
   cd mood-tracker
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm start
Open http://localhost:3000 in your browser
