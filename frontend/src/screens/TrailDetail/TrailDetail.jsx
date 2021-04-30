import { useState, useEffect } from "react";
import Layout from "../../layout/Layout"
// import { getShow } from "../../services/shows";
// import { addToWatchlist } from "../../services/users";
import { useParams } from "react-router-dom";
// import { Button } from "react-bootstrap";
import "./TrailDetail.css";

// const [isLoaded, setIsLoaded] = useState(false);
  // const [trail, setTrail] = useState(null);
  // const [watchlistButton, setWatchlistButton] = useState("+Watchlist")
  // const { id } = useParams();
  // const history = useHistory();

  
  // const handleWatchlist = (e) => {
    //   e.preventDefault();
    //   addToWatchlist(user.id, show._id);
    //   setWatchlistButton("added")
    // };
    
    // if (!isLoaded) {
      //   return <h1>Loading...</h1>;
      // }
      
      export default function TrailDetail(props) {
        const [trail, setTrail] = useState(null);
        const { allTrails, removeTrail } = props
        const { id } = useParams()
        
        useEffect(() => {
          if (allTrails.length) {
            const oneTrail = allTrails.find((trail) => trail.id === Number(id))
            setTrail(oneTrail)
          }
        }, [allTrails, id])

        return (
      <Layout>
        <div className="trail-detail">
              {/* <img className="trail-image" src={trail.imgURL} alt={trail.title} /> */}
              {
                trail &&

                <div className="card">
                  <h3>{trail.name}</h3>
                  <img src={trail.img_url} alt={trail.name} />
                  <p>{trail.title}</p>
                  <Link to={`/trails/${trail.id}/edit`}
                </div>
              }
        </div>
      </Layout>
  )
}
