import React from "react";
import { Routes, Route } from "react-router-dom";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";
import PhonesPage from "./pages/PhonesPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PhonesPage></PhonesPage>}></Route>
        <Route path='/:id' element={<PhoneDetailsPage></PhoneDetailsPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
