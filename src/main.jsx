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
import MoviesAll from "./pages/MoviesAll.jsx";
import Order from "./pages/Order.jsx";
// import UserProvider from "./context/userContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UserProvider> */}
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
            <Route path="all" element={<MoviesAll />} />
            <Route path=":id" element={<Detail />} />
          </Route>
        <Route path="order" element={<Order />} />
        </Route>
        <Route path="order" element={<Order />} />
        <Route path="profile">
          <Route index element={<Account />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* </UserProvider> */}
  </StrictMode>
);
