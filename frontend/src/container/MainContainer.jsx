import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
// import Reviews from "../screens/Reviews";
import TrailCreate from "../screens/TrailCreate/TrailCreate";
import TrailDetail from "../screens/TrailDetail/TrailDetail";
import EditTrail from "../screens/EditTrail/EditTrail";
import Trails from "../screens/Trails/Trails";
import { getAllReviews } from "../services/reviews";
import {
  deleteTrail,
  getAllTrails,
  postTrail,
  putTrail,
} from "../services/trails";
import Reviews from "../screens/Review/Review";
import Home from "../screens/Home/Home";

export default function MainContainer(props) {
  const [trails, setTrails] = useState([]);
  const [reviews, setReviews] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewData = await getAllReviews();
      setReviews(reviewData);
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    const fetchTrails = async () => {
      const foodData = await getAllTrails();
      setTrails(foodData);
    };
    fetchTrails();
  }, []);

  const handleCreate = async (formData) => {
    const trailData = await postTrail(formData);
    setTrails((prevState) => [...prevState, trailData]);
    history.push("/trails");
  };

  const handleEdit = async (id, formData) => {
    const trailData = await putTrail(id, formData);
    setTrails((prevState) =>
      prevState.map((trail) => {
        return trail.id === Number(id) ? trailData : trail;
      })
    );
    history.push("/trails");
  };

  const handleDelete = async (id) => {
    await deleteTrail(id);
    setTrails((prevState) => prevState.filter((trail) => trail.id !== id));
    history.push("/trails");
  };

  return (
    <Switch>
      <Route path="/reviews">
        <Reviews reviews={reviews} />
      </Route>
      <Route path="/trails/:id/edit">
        <EditTrail allTrails={trails} handleEdit={handleEdit} />
      </Route>
      <Route path="/trails/new">
        <TrailCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/trails/:id">
        <TrailDetail
          allTrails={trails}
          reviews={reviews}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path="/trails">
        <Trails
          trails={trails}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
