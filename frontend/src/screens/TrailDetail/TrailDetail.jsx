import { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import { Link, useParams } from "react-router-dom";
import "./TrailDetail.css";

export default function TrailDetail(props) {
  const [trail, setTrail] = useState(null);
  const { allTrails, removeTrail } = props;
  const { id } = useParams();

  useEffect(() => {
    if (allTrails.length) {
      const oneTrail = allTrails.find((trail) => trail.id === Number(id));
      setTrail(oneTrail);
    }
  }, [allTrails, id]);

  return (
    <Layout>
      <div className="trail-detail">
        {/* <img className="trail-image" src={trail.imgURL} alt={trail.title} /> */}
        {trail && (
          <div className="card">
            <h3>{trail.name}</h3>
            <img src={trail.img_url} alt={trail.name} />
            <p>{trail.title}</p>
            <Link to={`/trails/${trail.id}/edit`}>
              <button>Update</button>
            </Link>
            <button onClick={() => removeTrail(trail.id)}>Release</button>
          </div>
        )}
      </div>
    </Layout>
  );
}
