import { useState, useEffect } from "react";
import Layout from "../../layout/Layout"
// import { getShow } from "../../services/shows";
// import { addToWatchlist } from "../../services/users";
import { useParams, useHistory } from "react-router-dom";
// import { Button } from "react-bootstrap";
import "./TrailDetail.css";

const [isLoaded, setIsLoaded] = useState(false);
  const [trail, setTrail] = useState(null);
  // const [watchlistButton, setWatchlistButton] = useState("+Watchlist")
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchShow = async () => {
      const anime = await getShow(id);
      setShow(anime);
      setIsLoaded(true);
    };
    fetchShow();
  }, [id]);

  // const handleWatchlist = (e) => {
  //   e.preventDefault();
  //   addToWatchlist(user.id, show._id);
  //   setWatchlistButton("added")
  // };

  // if (!isLoaded) {
  //   return <h1>Loading...</h1>;
  // }

export default function TrailDetail() {
  return (
    <div>
      <Layout user={user}>
        <div className="trail-detail">
          <img className="trail-image" src={trail.imgURL} alt={trail.title} />
          <div className="detail">
            <div className="info-container">
              <div className="name">{show.title}</div>
              <div className="location">
                <strong>({`${show.duration}`})</strong>
              </div>
              <div className="detail">{show.plot}</div>
            </div>
            <div className="button-container">
              {/* {user ? (
                <Button id="watchlist-button" onClick={handleWatchlist}>
                  {watchlistButton}
                </Button>
              ) : null}
              <Button
                id="edit-button"
                className="edit-button"
                onClick={() => {
                  history.push(`/shows/${show._id}/edit`);
                }}
              >
                Edit
              </Button> */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
