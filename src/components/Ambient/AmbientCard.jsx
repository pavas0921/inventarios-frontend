import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAmbients,
  selectAmbientState,
} from "../../features/ambient/ambientSlice";
import styles from "./styles/ambient.card.module.scss";

const AmbientCard = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAmbientState);
  const { ambient } = data;
  const { item, status } = ambient;

  useEffect(() => {
    dispatch(getAllAmbients());
  }, []);

  useEffect(() => {
    if (data) console.log("data****", item);
  }, [data]);

  return (
    <Box className={styles.box_main}>
      {item &&
        item.map((row, index) => (
          <Card
            sx={{ maxWidth: 345, marginBottom: 2, marginTop: 2 }}
            key={index}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={row.ambientImg}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {row.ambientName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
};

export default AmbientCard;
