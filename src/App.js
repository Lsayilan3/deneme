import "./index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeuturedProducts from "./components/FeuturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/auth";
import { RequireAuth } from "./components/RequireAuth";
import Product from "./components/category/Product";
import Category from "./components/category/Category";
import { Box, Grid } from "@mui/material";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Yükleniyor...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeuturedProducts />} />
          <Route path="featured" element={<FeuturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        {/* <Route path='login' element={<Login/>}/> */}
        <Route path="*" element={<NoMatch />} />

              <Route exact path="/category" element={<Product />} />
              {/* <Route exact path="product" element={<Category />} /> */}
              <Route exact path="/category/:categoryId" element={<Product />} />
              
         
      </Routes>
    </AuthProvider>
  );
}

export default App;
