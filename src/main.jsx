import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Account from "./pages/profile/Account.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />}/>
      {/* <Route index element={<Home />}/> */}
      <Route path="profile">
        <Route index element={<Account />}/>
        <Route path="history" element={<History />}/>
      </Route>
      <Route path="register" element={<Register />}/>
      <Route path="login"  element={<Login />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
