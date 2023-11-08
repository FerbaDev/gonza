import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Box
      sx={{
        height: { xs: "95vh", md: "100vh", lg: "100vh" },
        width: "100%",
        backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/gonza-lopez-almada.appspot.com/o/gisandria.jpg?alt=media&token=77c4aaa6-3d2d-4c92-9d2a-dc6a4670ba97&_gl=1*vlt5e2*_ga*ODUyNzA4NDA5LjE2ODgwMDA1NzM.*_ga_CW55HF8NVT*MTY5OTM3OTM2Ny42Ny4xLjE2OTkzODE3OTguNjAuMC4w")`,
        backgroundPosition: "50% 30%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "end",
        marginTop: { lg: "8px" },
        padding: "20px",
      }}
    >
      <Link to={"/shop"}>
        <Button variant="contained" sx={{ backgroundColor: "#1c1c1c" }}>
          Ver libros
        </Button>
      </Link>
    </Box>
  );
};
