import { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import { Link, useParams } from "react-router-dom";
import "./TrailDetail.css";
// import Trails from "../Trails/Trails";
import Review from "../Review/Review";

export default function TrailDetail(props) {
  const [trail, setTrail] = useState(null);
  const { allTrails, handleDelete } = props;
  const { id } = useParams();

  useEffect(() => {
    if (allTrails.length) {
      const oneTrail = allTrails.find((trail) => trail.id === Number(id));
      setTrail(oneTrail);
    }
  }, [allTrails, id]);

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
          {/* toggle moddle, then toggle handle delete */}
            <button onClick={() => handleDelete(trail.id)}>
              Delete
            </button>
            <br />

          </div>
          <Review className="trail-reviews" reviews={trail.reviews} />
          </div>
        </section>
      )}
    </div>
  );
}
