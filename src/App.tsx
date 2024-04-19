import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";

function App() {
  const [selectedStatus, setSelectedStatus] = useState(""); // Состояние для хранения выбранного статуса

  const handleSelectStatus = (status: string) => {
    setSelectedStatus(status);
  };

  return (
    <div className="app">
      <Navbar onSelectStatus={handleSelectStatus} />{" "}
      {/* Передача обработчика onSelectStatus в компонент Navbar */}
      <MainSection selectedStatus={selectedStatus} />{" "}
      {/* Передача выбранного статуса в компонент MainSection */}
    </div>
  );
}

export default App;
