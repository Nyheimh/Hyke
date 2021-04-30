import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";

export default function EditTrail(props) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    duration: "",
    details: "",
    imgURL: "",
  });

  const { name, location, duration, details, imgURL } = formData;
  const { handleEdit, allTrails } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneTrail = allTrails.find((trail) => {
        return trail.id === Number(id);
      });
      const { name, location, duration, details, imgURL } = oneTrail;
      setFormData({ name, location, duration, details, imgURL });
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
    <Layout>
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit(id, formData);
          }}
        >
          <h3>Update Trail</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          {/* location, duration, details, imgURL */}
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
            />
          </label>
          <label>
            Duration:
            <input
              type="text"
              name="duration"
              value={duration}
              onChange={handleChange}
            />
          </label>
          <label>
            Details:
            <input
              type="text"
              name="details"
              value={details}
              onChange={handleChange}
            />
          </label>
          <label>
            Image Url:
            <input
              type="text"
              name="imgURL"
              value={imgURL}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
}
