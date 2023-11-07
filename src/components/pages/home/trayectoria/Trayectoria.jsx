import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Trayectoria = () => {
  return (
    <Box
      sx={{
        paddingInline: "20px",
        paddingBlock: "50px",
        backgroundColor: "#EAEAEA",
      }}
    >
      <Card sx={{ maxWidth: "100%", display: "flex", flexWrap: "wrap" }}>
        <CardMedia
          sx={{ height: "250px", width: { xs: "100%", lg: "250px" } }}
          image="https://firebasestorage.googleapis.com/v0/b/gonza-lopez-almada.appspot.com/o/gonzalo.lopez-almada.jpeg?alt=media&token=088f09a9-0c1b-42c7-8e61-b6d888bdd784&_gl=1*1i2lavx*_ga*ODUyNzA4NDA5LjE2ODgwMDA1NzM.*_ga_CW55HF8NVT*MTY5OTM3OTM2Ny42Ny4xLjE2OTkzODI2NDEuMTYuMC4w"
          title="Gonzalo Lopez Almada"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontFamily: "'Bebas Neue', sans-serif;" }}
          >
            Sobre mí
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
            paragraph
          >
            Nací el 12 de agosto de 1983 en la ciudad de Córdoba, aunque mis
            padres viviesen en San Francisco, una ciudad cercana dónde more
            hasta que vine a estudiar a Córdoba, dónde preferí vivir. Primero
            estuve muy interesado en Historia carrera que abandone, no sin
            obtener una línea cronológica mental que me serviría más adelante.
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            paragraph
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
            Luego, me sentí más interesado por la Psicología y realicé una
            licenciatura, pero en esta ocasión fue en una universidad privada,
            lo que me fue más cómodo por mi forma un poco parca de ser, la cual
            no es muy atrayente.
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            paragraph
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
            Más tarde, realice un posgrado bianual en Psicología Transpersonal y
            una Adscripción a la cátedra de Introducción a la Filosofía de la
            carrera de psicología; pero nunca deje de leer obras casi siempre
            clásicas, y de escribir textos; hasta el presente.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
