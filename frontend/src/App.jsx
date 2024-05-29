//App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Page(s)
import Landing from "./components/Pages/Landing";
import Error from "./components/Pages/Error";

//Page Component
import Header from "./components/Page Components/Header";
import Footer from "./components/Page Components/Footer";

//Stytle
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Error />} />
          <Route path="/home" element={<Landing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
