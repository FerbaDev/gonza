import { Box } from "@mui/material";
import { CardMarcas } from "./CardMarcas";
import marcas from "./marcas.json";

export const Marcas = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box sx={{ paddingBottom: "30px" }}>
        <h2 className="bebas titulos-medios">Mis novelas</h2>
        <p className="montserrat" style={{ fontWeight: "bold" }}>
          Sumérgete en un mundo de emociones, aventuras y misterios a través de
          mis novelas. Cada una de mis historias es un viaje único, lleno de
          personajes memorables y tramas envolventes. Desde antiguos mitos hasta
          tecnología extraterrestre, mis obras exploran diversos géneros,
          capturando movimientos y paradigmas de pensamiento a lo largo de las
          eras. Descubre el poder de las palabras y acompáñame en un viaje
          literario que te transportará a lugares inimaginables
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1em",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "center",

          alignItems: "center",
        }}
      >
        {marcas.map((marca) => (
          <CardMarcas key={marca.id} {...marca} />
        ))}
      </Box>
    </Box>
  );
};
