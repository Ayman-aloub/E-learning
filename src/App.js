import logo from "./logo.svg";
import "./App.css";
import Login from "./components/accounting/Login";
import Registeration from "./components/accounting/Registeration";
import ChangePassword from "./components/accounting/ChangePassword";
import ResetPassword from "./components/accounting/ResetPassword";
import ResetCode from "./components/accounting/ResetCode";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/regesteration" element={<Registeration />}></Route>
        <Route path="/changePassword" element={<ChangePassword />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/resetcode" element={<ResetCode />}></Route>
      </Routes>
    </div>
  );
}

export default App;
