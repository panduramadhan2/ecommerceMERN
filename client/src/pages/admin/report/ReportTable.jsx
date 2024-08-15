import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const columns = [
  {
    label: "No",
    width: 100,
  },
  {
    label: "Order ID",
    width: 100,
  },
  {
    label: "Tanggal",
    width: 100,
  },
  {
    label: "Pelanggan",
    width: 100,
  },
  {
    label: "Produk",
    width: 100,
  },
  {
    label: "Jumlah",
    width: 100,
  },
  {
    label: "Harga",
    width: 100,
  },
  {
    label: "Ongkir",
    width: 100,
  },
  {
    label: "Total Harga",
    width: 100,
  },
  {
    label: "Profit",
    width: 100,
  },
  {
    label: "Total Profit",
    width: 100,
  },
];

const ReportTable = () => {
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{ minWidth: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
                <Box sx={{ width: "100%" }}>
                  <p>Tanggal :</p>
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ReportTable;
