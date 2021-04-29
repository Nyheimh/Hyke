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

          </div>
          <Form className="addSeries-form-container" >
          {/* onSubmit={handleSubmit} */}
            <h2 className="addSeries-form-title">Add Trail</h2>
            <Form.Group>
              <label>Trail Name:</label>
              <input
                placeholder
                type="text"
                placeholder="Trail Name"
                name="name"
                value={trail.name}
                onChange={handleChange}
                // id="input-title"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="addSeries-form-label">Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location of Trail"
                name="trail"
                value={trail.location}
                onChange={handleChange}
                // id="input-duration"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="addSeries-form-label">Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Duration to Complete"
                name="imgURL"
                value={trail.duration}
                required
                autoFocus
                onChange={handleChange}
                // id="input-image"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="addSeries-form-label">
                Trail Details
              </Form.Label>
              <textarea
                type="text"
                placeholder="Details (2-4 sentences)"
                name="details"
                value={trail.details}
                onChange={handleChange}
                // id="input-plot"
              />
            </Form.Group>
            <Button type="submit" id="add-button">
              Add
            </Button>
          </Form>
        </Layout>
      </div>
    </div>
  );
};

export default CreateShow;
