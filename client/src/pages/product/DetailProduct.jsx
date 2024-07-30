import { Box } from "@mui/material";
import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";

const DetailProduct = () => {
  const product = {
    _id: {
      $oid: "6566c165801e99be12650c13",
    },
    name: "Rodrick Schwant",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    category: "Grocery",
    price: 6562674,
    capital: 6552674,
    profit: 10000,
    stock: 10,
    weight: 1708,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba8982c1",
        rating: 5,
        comment:
          "Revision of Extraluminal Device in Ureter, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898250",
        rating: 3,
        comment:
          "Supplement Right Brachial Artery with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
      },
    ],
  };

  return (
    <Box>
      <Appbar />
      <Box sx={{ display: "flex", height: "85vh" }}>
        <Box sx={{ display: "flex", flex: 2 }}>
          <Box
            sx={{ flex: 1, display: "flex", justifyContent: "center", p: 2 }}
          >
            <img
              src={product.image[0].link}
              alt={product.name}
              style={{ height: "500px", width: "500px" }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>{product.name}</Box>
        </Box>
        <Box sx={{ display: "flex", flex: 1 }}>Counter</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default DetailProduct;
