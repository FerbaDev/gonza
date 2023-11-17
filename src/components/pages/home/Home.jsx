import { Box } from "@mui/material";
import { Trayectoria } from "./trayectoria/Trayectoria";
import { Novelas } from "./novelas/Novelas";
import { SeccionCatalogo } from "./seccionCatalogo/SeccionCatalogo";
import { Hero } from "./Hero";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Trayectoria />
      <Novelas />
      <SeccionCatalogo />
    </Box>
  );
};

export default Home;
