import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditTrail.css";

export default function EditTrail(props) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    duration: "",
    details: "",
  });

  const { name, location, duration, details } = formData;
  const { handleEdit, allTrails } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneTrail = allTrails.find((trail) => {
        return trail.id === Number(id);
      });
      const { name, location, duration, details } = oneTrail;
      setFormData({ name, location, duration, details });
    };
    if (allTrails.length) {
      prefillFormData();
    }
  }, [allTrails, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="edit-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit(id, formData);
        }}
      >
        <h3>Update Trail</h3>
        <div className="edit-trail-label">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Total Miles:
            <input
              type="number"
              name="duration"
              value={duration}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Details:
            <input
              className="edit-details-input"
              type="text"
              name="details"
              size="25"
              value={details}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="edit-button">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
