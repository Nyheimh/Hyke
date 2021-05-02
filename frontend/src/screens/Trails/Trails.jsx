import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./Trails.css";
// import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    // maxWidth: "100%",
  },
  media: {
    height: 300,
    // width: 200,
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


        {/* ===========================================================================================================================         */}
        
        {/* <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia id="box"
                component={Link} to="/trails/:id"
                className={classes.media}
                image="https://images.unsplash.com/photo-1524904382563-42060a3c6bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                title="Mount Tamalpais"
              />
            </CardActionArea>
          </Card>
        </Grid> */}

        {/* =========================================================================================================================== */}

        {/* <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia id="box"
                className={classes.media}
                image="https://images.unsplash.com/photo-1571162362234-0a92e908cca9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                title="South Lake Tahoe"
              />
            </CardActionArea>
          </Card>
        </Grid> */}
        
        {/* =========================================================================================================================== */}

      </Grid>
    </Container>
  );
}
