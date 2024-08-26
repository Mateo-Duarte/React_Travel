import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Pages/Login";
import LoginV from "./Pages/LoginV";
import Register from "./Pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="LoginV" element={<LoginV />} /> 
      <Route  path="Register" element={<Register/>}></Route>
    </Routes>
  );
}

export default App;
