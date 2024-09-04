import { Box } from "@mui/material";
import Appbar from "../../../components/appbar/Appbar";
import Footer from "../../../components/footer/Footer";
import ListOrders from "./ListOrders";
import { useGetMyOrderMutation } from "../../../state/api/orderApi";
import { useEffect } from "react";

const Orders = () => {
  const [getMyOrder, { data }] = useGetMyOrderMutation();

  useEffect(() => {
    getMyOrder();
  }, []);
  return (
    <Box>
      <Appbar />
      <Box sx={{ height: 620, padding: "30px" }}>
        <ListOrders orders={data} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Orders;
