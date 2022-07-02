import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Join } from "./components";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Join />}>
          <Route path="join" element={<Join />} />
        </Route>
        <Route exact path="/chat" element={<Join />} />
      </Routes>
    </div>
  );
};

export default App;
