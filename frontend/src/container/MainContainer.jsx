import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Flavors from "../screens/Flavors";
import TrailCreate from "../screens/TrailCreate";
import TrailDetail from "../screens/TrailDetail";
import TrailEdit from "../screens/TrailEdit";
import Trails from "../screens/Trails";
import { getAllFlavors } from "../services/flavors";
import {
  deleteTrail,
  getAllTrails,
  postTrail,
  putTrail,
} from "../services/trails";

export default function MainContainer(props) {
  const [trails, setTrails] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchFlavors = async () => {
      const flavorData = await getAllFlavors();
      setFlavors(flavorData);
    };
    fetchFlavors();
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
  };

  return (
    <Switch>
      <Route path="/flavors">
        <Flavors flavors={flavors} />
      </Route>
      <Route path="/trails/:id/edit">
        <TrailEdit trails={trails} handleEdit={handleEdit} />
      </Route>
      <Route path="/trails/new">
        <TrailCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/trails/:id">
        <TrailDetail flavors={flavors} />
      </Route>
      <Route path="/trails">
        <Trails
          trails={trails}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Route>
    </Switch>
  );
}
