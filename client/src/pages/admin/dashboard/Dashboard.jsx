import { Fragment } from "react";
import AdminBar from "../components/appbar/AdminBar";
import { Box } from "@mui/material";
import Data from "./Data";
import Transactions from "./Transactions";
import { useGetOrdersQuery } from "../../../state/api/orderApi";

const Dashboard = () => {
  const { data: orders } = useGetOrdersQuery();
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
        <Data orders={orders} />
        <Transactions />
      </Box>
    </Fragment>
  );
};

export default Dashboard;
