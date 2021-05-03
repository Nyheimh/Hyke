import React, { useState } from "react";
import "./TrailCreate.css";

export default function TrailCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    duration: "",
    details: "",
    imgURL: "",
  });

  const { name, location, duration, details } = useState(false);
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
            <h2 className="title">Add Trail</h2>
            <label>
              Trail Name:
              <input
                placeholder="Trail Name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                
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
              
              />
          </label>
          <label>
            Miles (Total)
            <input
              type="number"
              placeholder="Total Miles"
              name="duration"
              value={duration}
              onChange={handleChange}
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
