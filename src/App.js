import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// COMPONENTS
import Main from "./components/main/Main";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/Home" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
