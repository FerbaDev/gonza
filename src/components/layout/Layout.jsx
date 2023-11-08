import { Link, Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          paddingTop: "36px",
          width: "100%",
          minHeight: "90vh",
        }}
        className="background"
      >
        <Outlet />
        <Link to={"https://www.instagram.com/gonzalo_clinicopsy/"}>
          <InstagramIcon
            sx={{
              position: "fixed",
              right: "20px",
              bottom: "20px",
              height: "2em",
              width: "auto",
            }}
            className="instagram"
          />
        </Link>
      </Box>
      <Footer />
    </div>
  );
};
