// import { Route, Switch } from "react-router-dom";
import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import {SpellCheckerPage} from "./pages/SpellCheckerPage/SpellCheckerPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path="/" exact>
            <SpellCheckerPage />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
