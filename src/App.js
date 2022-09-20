import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// COMPONENTS
import Main from "./components/main/Main";
import Homepage from "./components/homepage/Homepage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <Routes>
          {/* <Route path="/" element={<Main />} exact /> */}
          <Route path="/" element={<Homepage />} />
          <Route path="*" element = {<Page404/>}/>
         
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
