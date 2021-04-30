import React, { useState } from "react";
// import { createShow } from "../../services/shows";
import Layout from "../../layout/Layout";
import "./TrailCreate.css";

export default function TrailCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    duration: "",
    details: "",
    imgURL: "",
  });

  const { name, location, duration, details, imgURL } = useState(false);
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <div className="form">
          <div className="field">
            {/* onSubmit={handleSubmit} */}
            <h2 className="title">Add Trail</h2>
            <label>
              Trail Name:
              <input
                placeholder="Trail Name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                // id="input-title"
              />
            </label>
          <label>
            Location
            <input
              placeholder="Location of Trail"
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
              // id="input-duration"
              />
          </label>
          <label>
            Duration
            <input
              type="text"
              placeholder="Duration to Complete"
              name="duration"
              value={duration}
              onChange={handleChange}
              // id="input-image"
              />
          </label>
          <label>
            {" "}
            Trail Details
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
              </div>
      </form>
    </div>
  );
}
