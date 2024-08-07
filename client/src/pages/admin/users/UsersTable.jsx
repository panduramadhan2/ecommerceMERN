import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const columns = [
  {
    id: 1,
    label: "No",
    width: 30,
  },
  {
    id: 2,
    label: "ID",
    width: 150,
  },
  {
    id: 3,
    label: "Avatar",
    width: 90,
  },
  {
    id: 4,
    label: "Nama",
    width: 120,
  },
  {
    id: 5,
    label: "Email",
    width: 120,
  },
  {
    id: 6,
    label: "No HP",
    width: 120,
  },
  {
    id: 7,
    label: "Aksi",
    width: 100,
  },
];

const UsersTable = () => {
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  align="center"
                  key={column.id}
                  sx={{ minWidth: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UsersTable;
