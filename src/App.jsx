//App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Page(s)
import Landing from "./components/Pages/Landing";
import Error from "./components/Pages/Error";
import SignIn from "./components/Pages/Authentication Pages/SignIn";

//Page Component
import Header from "./components/Page Components/Header";
import Footer from "./components/Page Components/Footer";
import HideHeaderFooter from "./components/Page Components/HideHeaderFooter";

//Stytle
import "./App.css";
import VerifyEmail from "./components/Pages/Authentication Pages/SignUp/VerifyEmail";
import StepOne from "./components/Pages/Authentication Pages/SignUp/Join";
import StepTwo from "./components/Pages/Authentication Pages/SignUp/StepOne";

function App() {
  return (
    <>
      <Router>
        <HideHeaderFooter HeaderComponent={Header} FooterComponent={Footer}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Landing />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up">
              <Route path="join" element={<StepOne />}></Route>
              <Route path="step-1" element={<StepTwo />}></Route>
              <Route path="verify-email" element={<VerifyEmail />} />
            </Route>
          </Routes>
        </HideHeaderFooter>
      </Router>
    </>
  );
}

export default App;
