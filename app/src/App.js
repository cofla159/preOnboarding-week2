import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="container">
          <Routes>
            <Route path="/" element={<Board />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
