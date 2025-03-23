import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/homepage/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Account from "./pages/profile/Account.jsx";
import AuthLayouts from "./layouts/AuthLayouts.jsx";
import Main from "./layouts/Main.jsx";
import Detail from "./pages/Movies/Detail.jsx";
import MoviesAll from "./pages/Movies/MoviesAll.jsx";
import Order from "./pages/Order.jsx";
import ErrorPage from "./pages/Error.jsx";
import Payment from "./pages/Payment.jsx";
import Ticket from "./pages/Ticket.jsx";
import AdminLayouts from "./layouts/AdminLayouts.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import AddMovie from "./pages/admin/AddMovie.jsx";
import ListMovie from "./pages/admin/ListMovie.jsx";
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
          <Route path="payment" element={<Payment />} />
          <Route path="ticket" element={<Ticket />} />
        </Route>
        <Route path="profile">
          <Route index element={<Account />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route element={<AdminLayouts />}>
          <Route path="admin">
            <Route index element={<Dashboard />} />
            <Route path="add" element={<AddMovie />} />
            <Route path="list" element={<ListMovie />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    {/* </UserProvider> */}
  </StrictMode>
);
