import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import HomePage from "./pages/HomePage/HomePage";
import DataContext from "./contexts/DataContext";
import { useState } from "react";
import { PagesContainer } from "./App-Styles";

function App() {

  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{data, setData}}>
          <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </PagesContainer>
    </DataContext.Provider>
  )
}

export default App
