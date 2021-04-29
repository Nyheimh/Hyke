import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { createShow } from "../../services/shows";
import Layout from "../../components/Layout/Layout";
// import "./CreateShow.css";

const TrailCreate = (props) => {
  const [trail, setTrail] = useState({
    name: "",
    location: "",
    duration: "",
    details: "",
    imgURL: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setTrail({
      ...trail,
      [name]: value,
    });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const created = await createTrail(trail);
  //   setCreated({ created });
  // };

  if (isCreated) {
    return <Redirect to={`/trails`} />;
  }
  return (
    <div class="ui form">
      <div class="two fields">
        <Layout user={props.user}>
          <div class="field error">

          {/* onSubmit={handleSubmit} */}
            <h2>Add Trail</h2>
              <label>Trail Name:</label>
              <input
                placeholder="Trail Name"
                type="text"
                // name="name"
                value={trail.name}
                onChange={handleChange}
                // id="input-title"
                />
                </div>
                <label>Location</label>
                <input
                placeholder="Location of Trail"
                type="text"
                // name="trail"
                value={trail.location}
                onChange={handleChange}
                // id="input-duration"
              />
              <label>Duration</label>
              <input
                type="text"
                placeholder="Duration to Complete"
                // name="imgURL"
                value={trail.duration}
                onChange={handleChange}
                // id="input-image"
              />
              <label> Trail Details</label>
              <input
                type="text"
                placeholder="Details (2-4 sentences)"
                name="details"
                value={trail.details}
                onChange={handleChange}
                // id="input-plot"
              />
            <Button type="submit" id="add-button">
              Add
            </Button>
        </Layout>
      </div>
    </div>
  );
};

export default CreateShow;
