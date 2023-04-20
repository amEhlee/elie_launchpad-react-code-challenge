import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/layout/Navbar";
import UniversitiesPage from "./pages/UniversitiesPage";
import PostalLookupPage from "./pages/PostalLookupPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="university" element={<UniversitiesPage />} />
          <Route path="postallookup" element={<PostalLookupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
