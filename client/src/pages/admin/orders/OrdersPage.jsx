import { Box, Input } from "@mui/material";
import AdminBar from "../components/appbar/AdminBar";
import OrderTable from "./OrderTable";

const OrdersPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <AdminBar />
      {/* search function */}
      <Box sx={{ p: 2 }}>
        <Input placeholder="Cari Pesanan" sx={{ p: 1 }} />
      </Box>
      <Box sx={{ p: 2 }}>
        <OrderTable />
      </Box>
    </Box>
  );
};

export default OrdersPage;
