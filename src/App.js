import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Home from './Pages/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Wrapper>
            <Home />
          </Wrapper>
      </div>
    </Router>
  );
}

export default App;
