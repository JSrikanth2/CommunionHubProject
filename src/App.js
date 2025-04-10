import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBarHeader from "./Componets/AppBarHeader";
import HomePage from "./Componets/HomePage";
import EventsPage from "./Pages/EventsPage";
import AboutPage from "./Pages/AboutPage";
import { Box } from "@mui/material";

function App() {
  return (
    <Router>
      <AppBarHeader />
      <Box sx={{ pt: "80px" }}>
        {" "}
        {/* This offset should match the AppBar height */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
