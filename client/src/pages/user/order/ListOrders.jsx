import {
  Box,
  IconButton,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import OrdersData from "../../../data/OrdersData";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { blue } from "@mui/material/colors";

const Headers = [
  { name: "Order" },
  { name: "Detail" },
  { name: "Bill" },
  { name: "Date" },
  { name: "Status" },
  { name: "Shipment" },
  { name: "Cost" },
  { name: "Resi" },
  { name: "Action" },
];

const ListOrders = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Pesanan Kamu
        </Typography>
        <Box>
          <Input type="text" placeholder="Search By Order" />
        </Box>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 570 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {Headers.map((item) => (
                  <TableCell key={item.name} align="center">
                    {item.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {OrdersData.map((item) => {
                const date = new Date(item.createdAt.$date);
                const options = {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                };
                const formattedDate = date.toLocaleDateString("id-ID", options);
                return (
                  <TableRow key={item.order}>
                    <TableCell align="center">{item.order}</TableCell>
                    <TableCell align="center">
                      <IconButton>
                        <LocalMallIcon sx={{ color: blue[500] }} />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">{`Rp ${parseFloat(
                      item.payment
                    ).toLocaleString("id-ID")}`}</TableCell>
                    <TableCell align="center">{formattedDate}</TableCell>
                    <TableCell align="center">{item.status}</TableCell>
                    <TableCell align="center">{item.status_order}</TableCell>
                    <TableCell align="center">{`Rp ${parseFloat(
                      item.shipping_cost
                    ).toLocaleString("id-ID")}`}</TableCell>
                    <TableCell align="center">{item.resi}</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default ListOrders;
