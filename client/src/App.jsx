import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DetailProduct from "./pages/product/DetailProduct";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/order/Orders";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import UsersPage from "./pages/admin/users/UsersPage";
import ProductsPage from "./pages/admin/products/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-pelanggan" element={<UsersPage />} />
        <Route path="/admin-produk" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
