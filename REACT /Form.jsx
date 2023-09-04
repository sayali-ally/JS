import React, { useState } from 'react';
import App from "./App";
import "./index.css"
const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

  const handleChange = (e) => {
     setFormData({
        ...formData,
        [e.target.name]: e.target.value
     });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, such as sending data to the server

    // Reset form fields
    setFormData({
      name: '',
      email: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label className="form-label">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default MyForm;
