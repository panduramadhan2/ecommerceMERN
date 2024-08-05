import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const SelectOptions = ({ provinsi, kota, kurir, layanan, alamat }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [courier, setCourier] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");

  const handleProvince = (event) => {
    setProvince(event.target.value);
    provinsi(event.target.value);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
    kota(event.target.value);
  };
  const handleCourier = (event) => {
    setCourier(event.target.value);
    kurir(event.target.value);
  };
  const handleService = (event) => {
    setService(event.target.value);
    layanan(event.target.value);
  };

  useEffect(() => {
    console.log(address);
    alamat(address);
  }, [address]);

  return (
    <Box
      sx={{
        minWidth: 120,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Provinsi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={province}
          label="Provinsi"
          onChange={handleProvince}
        >
          <MenuItem value="Jawa Barat">Jawa Barat</MenuItem>
          <MenuItem value="Jawa Tengah">Jawa Tengah</MenuItem>
          <MenuItem value="Jawa Timur">Jawa Timur</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kota / Kabupaten</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Kota / Kabupaten"
          onChange={handleCity}
        >
          <MenuItem value="Kota Bogor">Kota Bogor</MenuItem>
          <MenuItem value="Kabupaten Bogor">Kabupaten Bogor</MenuItem>
          <MenuItem value="Depok">Depok</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kurir</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={courier}
          label="Kurir"
          onChange={handleCourier}
        >
          <MenuItem value="pos">pos</MenuItem>
          <MenuItem value="jne">jne</MenuItem>
          <MenuItem value="tiki">tiki</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Layanan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="Layanan"
          onChange={handleService}
        >
          <MenuItem value="Layanan 1">Layanan 1</MenuItem>
          <MenuItem value="Layanan 2">Layanan 2</MenuItem>
          <MenuItem value="Layanan 3">Layanan 3</MenuItem>
        </Select>
      </FormControl>

      <textarea
        placeholder="Masukkan ALamat"
        style={{ padding: "10px" }}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </Box>
  );
};

export default SelectOptions;
