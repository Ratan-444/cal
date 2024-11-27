import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:5000/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React and Express Integration</h1>
        <p>Message from Backend: {message}</p>
      </header>
    </div>
  );
};

export default App;
