import { Box, Button, Paper, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import InventoryIcon from "@mui/icons-material/Inventory";
import "./styles.css";

const Data = ({ orders, products, users }) => {
  const compliteOrder = orders?.filter(
    (order) => order.paymentStatus === "settlement"
  );
  const totalSells = compliteOrder?.reduce(
    (acc, order) =>
      acc +
      order.products.reduce((acc, product) => acc + product.totalPrice, 0),
    0
  );
  const totalProfit = compliteOrder?.reduce(
    (acc, order) =>
      acc + order.products.reduce((acc, product) => acc + product.profit, 0),
    0
  );
  return (
    <Box className="layout" sx={{ marginBottom: "3vh" }}>
      <Paper className="paper" sx={{ bgcolor: "#62FF31" }}>
        <GroupIcon className="icon" sx={{ fontSize: 50 }} />
        <Box className="text">
          <Typography>Pelanggan</Typography>
          <Typography>{users?.length}</Typography>
        </Box>
      </Paper>
      <Paper className="paper" sx={{ bgcolor: "#606DFF" }}>
        <InventoryIcon className="icon" sx={{ fontSize: 50 }} />
        <Box className="text">
          <Typography>Produk</Typography>
          <Typography>{products?.length}</Typography>
        </Box>
      </Paper>
      <Paper className="paper" sx={{ bgcolor: "#FF9440" }}>
        <AccountBalanceIcon className="icon" sx={{ fontSize: 50 }} />
        <Box className="text">
          <Typography>Total Transaksi</Typography>
          <Typography>{orders?.length}</Typography>
        </Box>
      </Paper>
      <Paper className="paper" sx={{ bgcolor: "#FDB0AF" }}>
        <MonetizationOnIcon className="icon" sx={{ fontSize: 50 }} />
        <Box className="text">
          <Typography>Transaksi Berhasil</Typography>
          <Typography>{compliteOrder?.length}</Typography>
        </Box>
      </Paper>

      <Paper className="paper" sx={{ bgcolor: "#88FEFF" }}>
        <AccountBalanceIcon className="icon" sx={{ fontSize: 50 }} />
        <Box className="text">
          <Typography>Penjualan</Typography>
          <Typography>
            Rp {parseFloat(totalSells).toLocaleString("id-ID")}
          </Typography>
        </Box>
      </Paper>
      <Paper className="paper" sx={{ bgcolor: "#39FF83" }}>
        <MonetizationOnIcon className="icon" sx={{ fontSize: 50 }} />
        <Box className="text">
          <Typography>Profit</Typography>
          <Typography>
            Rp {parseFloat(totalProfit).toLocaleString("id-ID")}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Data;
