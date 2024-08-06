import { Box, Paper, TableCell, TableHead, TableRow } from "@mui/material";

const column = [
  { id: 1, label: "No", minWidth: 30 },
  { id: 2, label: "Order", minWidth: 100 },
  { id: 3, label: "Pelanggan", minWidth: 150 },
  { id: 4, label: "Tagihan", minWidth: 150 },
  { id: 5, label: "Tanggal", minWidth: 150 },
  { id: 6, label: "Status", minWidth: 150 },
  { id: 7, label: "Pengiriman", minWidth: 133 },
  { id: 8, label: "Alamat", minWidth: 150 },
];

const Transactions = () => {
  return (
    <Box
      sx={{
        width: "95%",
        height: "80%",
        p: 1,
        borderRadius: "5px",
        boxShadow: 4,
      }}
    >
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
      </Paper>
    </Box>
  );
};

export default Transactions;
