import React from "react";
import Nav from "./components/nav";
import Home from "./pages/home";
import Doctors from "./pages/landingPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
         <Nav />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
