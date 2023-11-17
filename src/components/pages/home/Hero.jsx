import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

export const Hero = () => {
  const [isClicked, setIsClicked] = useState(true);
  const gisandria =
    "https://firebasestorage.googleapis.com/v0/b/gonza-lopez-almada.appspot.com/o/gisandria.jpg?alt=media&token=77c4aaa6-3d2d-4c92-9d2a-dc6a4670ba97&_gl=1*vlt5e2*_ga*ODUyNzA4NDA5LjE2ODgwMDA1NzM.*_ga_CW55HF8NVT*MTY5OTM3OTM2Ny42Ny4xLjE2OTkzODE3OTguNjAuMC4w";
  const espiral = "https://m.media-amazon.com/images/I/91uXKX6W3EL._SY342_.jpg";

  const url = isClicked ? gisandria : espiral;

  return (
    <Box
      sx={{
        height: { xs: "95vh", md: "100vh", lg: "100vh" },
        width: "100%",
        backgroundImage: `url(${url})`,
        backgroundPosition: "50% 70%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "end",
          marginTop: { lg: "8px" },
          padding: "20px",
        }}
      >
        <Link to={"/shop"}>
          <Button
            variant="contained"
            sx={{ fontFamily: "serif" }}
            color="primary"
          >
            Ver libros
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: { lg: "8px" },
          padding: "20px",
        }}
      >
        <Box></Box>
        <Button
          sx={{ color: "black" }}
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          <ArrowForwardIosIcon sx={{}} />
        </Button>
      </Box>
    </Box>
  );
};
