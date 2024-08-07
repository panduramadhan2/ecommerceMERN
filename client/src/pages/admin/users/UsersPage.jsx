import AdminBar from "../components/appbar/AdminBar";
import { Box, Input } from "@mui/material";
import UsersTable from "./UsersTable";

const UsersPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <AdminBar />
      {/* SEARCH FUNCTION */}
      <Box sx={{ p: 2 }}>
        <Input placeholder="Cari Pelanggan" sx={{ p: 1 }} />
      </Box>
      <Box sx={{ p: 2 }}>
        <UsersTable />
      </Box>
    </Box>
  );
};

export default UsersPage;
