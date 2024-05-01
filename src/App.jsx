import { styled } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import HomePage from "./pages/HomePage/HomePage";
import DataContext from "./contexts/DataContext";
import { useState } from "react";

function App() {

  const [data, setData] = useState([]);
  console.log(data);

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


export const PagesContainer = styled.main`
  padding: 0 auto;
  margin: 0 auto;
  background: rgba(240, 240, 240, 1);
  min-height: 100vh;
/*   padding-bottom: 50px; */
`