import React, { useState } from "react";
import "./TrailCreate.css";

export default function TrailCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    duration: "",
    details: "",
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
        <div className="create-form">
          <div className="field">
            <h2 className="create-title">Add Trail</h2>
            <br/>
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
            <br/>
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
            <br/>
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
            <br/>
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
            <div className="create-button">

            <button type="submit" id="add-button">
              Add Trail
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
