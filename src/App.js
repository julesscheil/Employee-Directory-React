import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Home from './Pages/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Home />
      </Wrapper>
    </div>
  );
}

export default App;
