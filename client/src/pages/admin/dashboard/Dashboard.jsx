import { Fragment } from "react";
import AdminBar from "../components/appbar/AdminBar";
import { Box } from "@mui/material";
import Data from "./Data";
import Transactions from "./Transactions";
import { useGetOrdersQuery } from "../../../state/api/orderApi";
import { useGetProductsQuery } from "../../../state/api/productApi";
import { useGetUsersQuery } from "../../../state/api/userApi";

const Dashboard = () => {
  const { data: orders } = useGetOrdersQuery();
  const { data: products } = useGetProductsQuery();
  const { data: users } = useGetUsersQuery();
  return (
    <Fragment>
      <AdminBar />
      <Box
        sx={{
          height: "calc(100Vh - 100px)",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Data orders={orders} products={products} users={users}/>
        <Transactions />
      </Box>
    </Fragment>
  );
};

export default Dashboard;
