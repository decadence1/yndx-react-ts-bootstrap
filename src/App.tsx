import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";

function App() {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleSelectStatus = (status: string) => {
    setSelectedStatus(status);
  };

  return (
    <div className="app">
      <Navbar onSelectStatus={handleSelectStatus} />{" "}
      <MainSection selectedStatus={selectedStatus} />{" "}
    </div>
  );
}

export default App;
