import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./TrailDetail.css";
import Review from "../Review/Review";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TrailDetail(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [trail, setTrail] = useState(null);
  const { allTrails, handleDelete } = props;
  const { id } = useParams();

  useEffect(() => {
    if (allTrails.length) {
      const oneTrail = allTrails.find((trail) => trail.id === Number(id));
      setTrail(oneTrail);
    }
  }, [allTrails, id]);
  const handleRemove = (trail_id) => {
    handleDelete(trail_id);
    handleOpen();
  };
  return (
    <div className="trail-detail">
      {trail && (
        <section className="trail-detail-form">
          <div className="trail-detail-container">
            <img className="img" src={trail.img_url} alt={trail.name} />
            <h3>{trail.name}</h3>
            <p>{trail.location}</p>
            <p>{trail.duration} Miles (Round Trip)</p>
            <p>{trail.details}</p>
            <div className="trail-detail-buttons">
              <Link to={`/trails/${trail.id}/edit`}>
                <button className="trail-detail-search-buttons">Update</button>
              </Link>

              <button onClick={() => handleRemove(trail.id)}>Delete</button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 25,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <h2 id="transition-modal-title">
                      This trail has been deleted.
                    </h2>
                    <p id="transition-modal-description">
                      Return to Hykes to continue.
                    </p>
                  </div>
                </Fade>
              </Modal>
              <br />
            </div>
            <Review className="trail-reviews" reviews={trail.reviews} />
          </div>
        </section>
      )}
    </div>
  );
}
