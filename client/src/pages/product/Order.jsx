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
import { useSelector } from "react-redux";
import iziToast from "izitoast";
import { useGetTokenMutation } from "../../state/api/paymentApi";

const Order = ({ product }) => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const [getToken, { isLoading, data, status }] = useGetTokenMutation();

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

  const cartHandler = () => {
    if (!isAuth) {
      iziToast.error({
        title: "Error",
        message: "Login dulu",
        position: "topRight",
        timeout: 3000,
      });
    }
    if (!address) {
      iziToast.error({
        title: "Error",
        message: "Masukan alamat",
        position: "topRight",
        timeout: 3000,
      });
    }
  };
  const buyHandler = () => {
    if (!isAuth) {
      iziToast.error({
        title: "Error",
        message: "Login dulu",
        position: "topRight",
        timeout: 3000,
      });
    }
    if (!address) {
      iziToast.error({
        title: "Error",
        message: "Masukan alamat",
        position: "topRight",
        timeout: 3000,
      });
    }
    const data = {
      orderId: Date.now(),
      amount: total,
      name: user?.name,
      email: user?.username,
      phone: user?.phone,
    };
    getToken(data);
  };

  useEffect(() => {
    if (status === "fulfilled") {
      window.snap.pay(data?.token, {
        onSuccess: (result) => {},
      });
    }
  }, []);

  useEffect(() => {
    // You can also change below url value to any script url you wish to load,
    // for example this is snap.js for Sandbox Env (Note: remove `.sandbox` from url if you want to use production version)
    const midtransScriptUrl = import.meta.env.VITE_MIDTRANS_URL;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    // Optional: set script attribute, for example snap.js have data-client-key attribute
    // (change the value according to your client-key)
    const myMidtransClientKey = import.meta.env.VITE_MIDTRANS_KEY;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  // Then somewhere else on your React component, `window.snap` global object will be available to use
  // e.g. you can then call `window.snap.pay( ... )` function.

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
      <Button variant="contained" onClick={cartHandler}>
        Keranjang
      </Button>
      <Button variant="outlined" onClick={buyHandler}>
        {isLoading ? "..." : "Beli"}
      </Button>
    </Box>
  );
};

export default Order;
