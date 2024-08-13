import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { blue, orange, red, yellow } from "@mui/material/colors";
import ChatIcon from "@mui/icons-material/Chat";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";

const Products = () => {
  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        component="img"
        height={224}
        image="http://dummyimage.com/650x650.png/ff4444/ffffff"
        // Cannot GET /images/5c55cba8-a016-43c7-b3ec-f5f75f7c37b0-1701780388411-1703488315388.jpg
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography fontWeight="bold" align="center" fontSize={18}>
            Kemeja
          </Typography>
          <Typography
            fontWeight="bold"
            align="center"
            fontSize={14}
            fontStyle="italic"
          >
            100.000
          </Typography>
          <Stack spacing={2}>
            <Rating value={5} readOnly />
          </Stack>
        </Box>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton>
            <MoreVertIcon sx={{ color: blue[500] }} />
          </IconButton>
          <IconButton>
            <ChatIcon sx={{ color: orange[500] }} />
          </IconButton>
          <IconButton>
            <EditIcon sx={{ color: yellow[500] }} />
          </IconButton>
          <IconButton>
            <RemoveIcon sx={{ color: red[500] }} />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Products;
