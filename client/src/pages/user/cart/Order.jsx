import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SelectOptions from "./SelectOptions";
import { useState } from "react";
import {
  useGetCitiesQuery,
  useGetProvincesQuery,
  useGetServicesQuery,
} from "../../../state/api/shipmentApi";

const Order = ({ subtotal, totalWeight }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [courier, setCourier] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");

  const origin = "78";

  const { data: provinces } = useGetProvincesQuery();
  const { data: cities } = useGetCitiesQuery(province, { skip: !province });
  const { data: servicesData } = useGetServicesQuery(
    {
      origin,
      destination: city,
      weight: totalWeight,
      courier,
    },
    { skip: !city || !courier }
  );

  const services = servicesData && servicesData[0]?.costs;

  const total = subtotal + service;

  return (
    <Box
      sx={{
        width: "80%",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        height: "560px",
        boxShadow: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={18}>
          Subtotal
        </Typography>
        <Typography fontWeight="bold" fontSize={20}>
          Rp {subtotal && subtotal.toLocaleString("id-ID")}
        </Typography>
      </Box>
      <Typography fontWeight="bold">Alamat Pengiriman</Typography>
      <Box>
        <SelectOptions
          provinsi={(p) => setProvince(p)}
          kota={(c) => setCity(c)}
          kurir={(c) => setCourier(c)}
          layanan={(s) => setService(s)}
          alamat={(a) => setAddress(a)}
          provinces={provinces}
          cities={cities}
          services={services}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={18}>
          Ongkir
        </Typography>
        <Typography fontWeight="bold" fontSize={20}>
          Rp {parseFloat(service ? service : 0).toLocaleString("id-ID")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={20}>
          Total
        </Typography>
        <Typography fontWeight="bold" fontSize={20}>
          Rp {parseFloat(total).toLocaleString("id-ID")}
        </Typography>
      </Box>

      <Button variant="contained">Beli</Button>
    </Box>
  );
};

export default Order;
