import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage/Homepage";
import Productpage from "./Productpage";
import SingleProductPage from "./SingleProductPage";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import SignIn from "./SignIn";
import PaymentPage from "./PaymentPage";
import LoginAdmin from "../Pages/Admin Page/LoginAdmin";
import AdminAdd from "./Admin Page/AdminAdd";
import AdminDash from "./Admin Page/AdminDash";
import AdminUpdate from "./Admin Page/AdminUpdate";
import PrivateRoute from "./PrivateRoute";
import Orders from "./Orders";
import AdminDataAnalytics from "./Admin Page/AdminDataAnalytics";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Productpage />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/order"
        element={
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        }
      />
      <Route path="/Admin" element={<LoginAdmin />} />
      <Route path="/AdminAdd" element={<AdminAdd />} />
      <Route path="/AdminDashboard" element={<AdminDash />} />
      <Route path="/AdminUpdate" element={<AdminUpdate />} />
      <Route path="/AdminDataAnalytics" element={<AdminDataAnalytics />} />
    </Routes>
  );
};

export default AllRoutes;
