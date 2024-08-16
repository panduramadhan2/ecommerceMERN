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
import OrdersPage from "./pages/admin/orders/OrdersPage";
import LoginPage from "./components/login/LoginPage";
import Signup from "./components/signup/Signup";
import ReportPage from "./pages/admin/report/ReportPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/daftar" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-pelanggan" element={<UsersPage />} />
        <Route path="/admin-produk" element={<ProductsPage />} />
        <Route path="/admin-pesanan" element={<OrdersPage />} />
        <Route path="/admin-laporan" element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
