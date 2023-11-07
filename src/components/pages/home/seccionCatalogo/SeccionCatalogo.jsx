import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const SeccionCatalogo = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3C4048",
        paddingBlock: "20px",
        paddingLeft: "20px",
      }}
    >
      <h1 className="bebas" style={{ color: "#EAEAEA" }}>
        Catálogo
      </h1>
      <Link to={"/shop"}>
        <Button variant="contained" color="secondary">
          Ver libros
        </Button>
      </Link>
    </Box>
  );
};
