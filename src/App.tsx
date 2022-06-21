import React from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import "./App.css";
import { ContractPage } from "./pages/ContractPage";
import { FormPage } from "./pages/FormPage";
import { Main } from "./pages/Main";
import { TablePage } from "./pages/TablePage";

function App() {
  return (
    <Router basename="tablealis">
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="form" element={<FormPage />} />
          <Route path="contract" element={<ContractPage />} />
          <Route path="table" element={<TablePage />} />

          <Route index element={<Navigate to="form" />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
