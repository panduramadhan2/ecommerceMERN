import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SelectOptions from "./SelectOptions";
import { useEffect, useState } from "react";
import {
  useGetCitiesQuery,
  useGetProvincesQuery,
  useGetServicesQuery,
} from "../../state/api/shipmentApi";

const Order = ({ product }) => {
  const [qty, setQty] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
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
      weight: product?.weight,
      courier,
    },
    { skip: !city || !courier }
  );

  const services = servicesData && servicesData[0]?.costs;
  // const services = servicesData[0]?.costs;

  const total = subtotal + service;

  const increaseQty = () => {
    if (qty < product?.stock) {
      setQty(qty + 1);
      setSubtotal(product?.price * (qty + 1));
    }
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
      setSubtotal(product?.price * (qty - 1));
    }
  };

  useEffect(() => {
    if (product) {
      setSubtotal(product?.price);
    }
  }, [product]);

  return (
    <Box
      sx={{
        width: "80%",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        height: "700px",
        boxShadow: 6,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Atur Jumlah
      </Typography>
      <Box sx={{ display: "flex", gap: "15px", padding: "5px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            padding: "2px",
          }}
        >
          <IconButton onClick={() => decreaseQty()}>
            <RemoveIcon />
          </IconButton>
          <Box
            sx={{
              width: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {qty}
          </Box>
          <IconButton onClick={() => increaseQty()}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Total Stok: {product?.stock}
        </Box>
      </Box>
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
          {`Rp ${parseFloat(subtotal).toLocaleString("id-ID")}`}
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
          Rp {parseFloat(service).toLocaleString("id-ID")}
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
      <Button variant="contained">Keranjang</Button>
      <Button variant="outlined">Beli</Button>
    </Box>
  );
};

export default Order;
