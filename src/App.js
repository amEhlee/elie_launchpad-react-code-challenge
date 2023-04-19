import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import UniversitiesPage from "./pages/UniversitiesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="university" element={<UniversitiesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
