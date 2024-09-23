import {
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const column = [
  { id: 1, label: "No", minWidth: 20 },
  { id: 2, label: "Order", minWidth: 50 },
  { id: 3, label: "Pelanggan", minWidth: 80 },
  { id: 5, label: "Tanggal", minWidth: 80 },
  { id: 6, label: "Status Pembayaran", minWidth: 80 },
];

const Transactions = ({ orders }) => {
  return (
    <Paper>
      <TableHead>
        <TableRow>
          {column.map((column) => (
            <TableCell
              align="center"
              key={column.id}
              sx={{ minWidth: column.minWidth }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {orders?.map((order, index) => (
          <TableRow key={index}>
            <TableCell align="center">{index + 1}</TableCell>
            <TableCell align="center">{order.orderId}</TableCell>
            <TableCell align="center">{order.user.name}</TableCell>
            <TableCell align="center">
              {new Date(order.createdAt).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </TableCell>
            <TableCell align="center">{order.paymentStatus}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Paper>
  );
};

export default Transactions;
