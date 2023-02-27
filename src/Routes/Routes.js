import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home/Home";
import Contacto from "../Pages/Contacto/Contacto";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import Checkout from "../Pages/Checkout/Checkout";
import MisOrdenes from "../Pages/MisOrdenes/MisOrdenes";
import RecuperarPassword from "../Pages/RecuperarPassword/RecuperarPassword";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Congrats from "../Pages/Congrats/Congrats";
import Resumen from "../Pages/Resumen/Resumen";

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute redirectTo="/register">
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="/recuperarpassword" element={<RecuperarPassword />} />
      <Route path="/misordenes" element={<MisOrdenes />} />
      <Route path="/congrats" element={<Congrats />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/resumen" element={<Resumen />} />
    </ReactDomRoutes>
  );
};

export default Routes;
