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
      {/* <img className="trail-image" src={trail.imgURL} alt={trail.title} /> */}
      {trail && (
        <section className="form">
          <img className="img" src={trail.img_url} alt={trail.name} />
          <h3>{trail.name}</h3>
          <p>{trail.location}</p>
          <p>{trail.duration}</p>
          <p>{trail.details}</p>
          <Review reviews={trail.reviews} />
          <Link to={`/trails/${trail.id}/edit`}>
            <div className="search-buttons">
              <button className="search-buttons">Update</button>
            </div>
          </Link>
          {/* toggle moddle, then toggle handle delete */}
          <div className="search-buttons">
            <button class onClick={() => handleDelete(trail.id)}>
              Release
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
