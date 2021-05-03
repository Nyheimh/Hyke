import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./Trails.css";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  media: {
    height: 300,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
}));

export default function Trails(props) {
  const classes = useStyles();
  const { trails } = props;

  return (
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <h3 className="title">Trails</h3>
      <Grid container spacing={3}>
        {trails.map((trail) => (
          <React.Fragment key={trail.id}>

          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia id="box"
                    component={Link} to={`/trails/${trail.id}`}
                className={classes.media}
                image={trail.img_url}
                title={trail.name}
                />
            </CardActionArea>
          </Card>
        </Grid>
                </React.Fragment>
                ))}
      </Grid>
    </Container>
  );
}
