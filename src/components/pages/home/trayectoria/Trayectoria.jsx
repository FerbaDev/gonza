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
      <Card
        sx={{
          maxWidth: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ height: "300px", width: "300px", margin: "20px" }}
          image="https://firebasestorage.googleapis.com/v0/b/gonza-lopez-almada.appspot.com/o/gonzalo.lopez-almada.jpeg?alt=media&token=088f09a9-0c1b-42c7-8e61-b6d888bdd784&_gl=1*1i2lavx*_ga*ODUyNzA4NDA5LjE2ODgwMDA1NzM.*_ga_CW55HF8NVT*MTY5OTM3OTM2Ny42Ny4xLjE2OTkzODI2NDEuMTYuMC4w"
          title="Gonzalo Lopez Almada"
        />
        <CardContent sx={{ width: { xs: "100%", md: "70%" } }}>
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
            ¡Hola! Soy Gonzalo López Almada. Nací el 12 de agosto de 1983 en la
            ciudad de Córdoba, aunque mis padres vivían en San Francisco, una
            ciudad cercana, en donde en donde viví hasta que vine a estudiar a
            Córdoba en donde decidí establecerme. Inicialmente, cursé un tiempo
            en la Facultad de Historia, carrera que posteriormente abandoné,
            aunque conservé una línea cronológica mental que me sería útil en el
            futuro.
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            paragraph
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
            Después, me adentré en el mundo de la Psicología y obtuve una
            licenciatura en una universidad privada, lo cual encajó
            perfectamente con mi naturaleza introspectiva y perspicaz, que puede
            pasar desapercibida a primera vista.
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            paragraph
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
            Más adelante, realicé un posgrado de dos años en Psicología
            Transpersonal y una Adscripción a la cátedra de Introducción a la
            Filosofía en la carrera de Psicología. Sin embargo, nunca dejé de
            leer obras, en su mayoría clásicas, y de escribir textos; una pasión
            que sigo cultivando hasta el día de hoy.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
