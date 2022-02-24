import React from "react";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
