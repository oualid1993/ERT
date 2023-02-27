import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Admin/Header";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/invoice";
import Hero from "./components/publicWebSite/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Admin" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
