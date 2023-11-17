import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export const CardNovelas = ({ nombre, descripcion, img, path }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="tarjeta-novelas">
      <Link to={path}>
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={img}
            alt={nombre}
            style={{ objectFit: "cover", padding: "5px" }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
