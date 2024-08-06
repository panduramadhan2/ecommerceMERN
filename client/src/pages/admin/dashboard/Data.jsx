import { Box, Button } from "@mui/material";

const Data = () => {
  return (
    <Box
      sx={{
        width: "95%",
        height: "15%",
        borderRadius: "5px",
        boxShadow: 4,
        p: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Button
        variant="outlined"
        color="warning"
        sx={{ height: 80, width: 130 }}
      >
        data 1
      </Button>
      <Button
        variant="outlined"
        color="warning"
        sx={{ height: 80, width: 130 }}
      >
        data 2
      </Button>
      <Button
        variant="outlined"
        color="warning"
        sx={{ height: 80, width: 130 }}
      >
        data 3
      </Button>
      <Button
        variant="outlined"
        color="warning"
        sx={{ height: 80, width: 130 }}
      >
        data 4
      </Button>
      <Button
        variant="outlined"
        color="warning"
        sx={{ height: 80, width: 130 }}
      >
        data 5
      </Button>
    </Box>
  );
};

export default Data;
