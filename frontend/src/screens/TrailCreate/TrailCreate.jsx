import React, { useState } from "react";
// import { createShow } from "../../services/shows";
import Layout from "../../layout/Layout";
// import "./CreateShow.css";

export default function TrailCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    duration: "",
    details: "",
    imgURL: "",
  });

  const { name, location, duration, details, imgURL } = useState(false);
  const { createTrail } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const created = await postTrail(trail);
  //   setCreated({ created });
  // };

  // if (isCreated) {
  //   return <Redirect to={`/trails`} />;
  // }
  return (
    <Layout>
      <form onSubmit={(e) => {
        e.preventDefault()
        createTrail(formData)
      }}>
        <div className="form">
            <div className="field-error">
              {/* onSubmit={handleSubmit} */}
              <h2>Add Trail</h2>
              <label>Trail Name:
              <input
                placeholder="Trail Name"
                type="text"
                // name="name"
                value={name}
                onChange={handleChange}
                // id="input-title"
                />
                </label>
            </div>
            <label>Location
            <input
              placeholder="Location of Trail"
              type="text"
              // name="trail"
              value={location}
              onChange={handleChange}
              // id="input-duration"
              />
              </label>
            <label>Duration
            <input
              type="text"
              placeholder="Duration to Complete"
              // name="imgURL"
              value={duration}
              onChange={handleChange}
              // id="input-image"
              />
              </label>
            <label> Trail Details
            <input
              type="text"
              placeholder="Details (2-4 sentences)"
              name="details"
              value={details}
              onChange={handleChange}
              // id="input-plot"
              />
              </label>
            <button type="submit" id="add-button">
              Add
            </button>
          </div>
      </form>
    </Layout>
  );
}
