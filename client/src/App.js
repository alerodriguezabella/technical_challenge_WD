import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";
import PhonesPage from "./pages/PhonesPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/phones' element={<PhonesPage></PhonesPage>}></Route>
        <Route path='/phones/:id' element={<PhoneDetailsPage></PhoneDetailsPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
