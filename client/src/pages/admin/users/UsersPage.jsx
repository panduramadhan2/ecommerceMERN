import AdminBar from "../components/appbar/AdminBar";
import { Box, Input } from "@mui/material";
import UsersTable from "./UsersTable";
import { useGetUsersQuery } from "../../../state/api/userApi";
import { useState } from "react";

const UsersPage = () => {
  const { data: users } = useGetUsersQuery();

  const [searchTerm, setSearchTerm] = useState("");

  const searchFunction = (e) => setSearchTerm(e.target.value);

  const filtered = (user) => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredUsers = users?.filter(filtered);

  

  return (
    <Box sx={{ height: "100vh" }}>
      <AdminBar />
      {/* SEARCH FUNCTION */}
      <Box sx={{ p: 2 }}>
        <Input
          placeholder="Cari Pelanggan"
          sx={{ p: 1 }}
          value={searchTerm}
          onChange={searchFunction}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <UsersTable users={filteredUsers} />
      </Box>
    </Box>
  );
};

export default UsersPage;
