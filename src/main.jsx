import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Account from "./pages/profile/Account.jsx";
import AuthLayouts from "./layouts/AuthLayouts.jsx";
import Main from "./layouts/Main.jsx";
import Detail from "./pages/Detail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />}/> */}
        <Route path="/auth" element={<AuthLayouts />}>
          <Route index element={<Login />} />
          <Route path="new" element={<Register />} />
        </Route>
        <Route element={<Main />}>
          <Route index element={<Home />} />
          <Route path="movie">
            <Route path=":id" element={<Detail />} />
          </Route>
        </Route>

        {/* <Route path="profile">
        <Route index element={<Account />}/>
        <Route path="history" element={<History />}/>
      </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
