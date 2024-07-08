
"use client"
import React, { useEffect, useState } from 'react';
import './form.css'; // Ensure your CSS file is properly linked

const Form = () => {
//   const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    rollNumber: '',
    phoneNumber: ''
  });

//   useEffect(() => {
//     fetch('/path-to-your-formData.json')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
  };

//   if (!data) {
//     return <div>Loading...</div>;
//   }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {data.fields.map((field, index) => (
        <div key={index} className="form-group">
          <label>{field.label}</label>
          <input 
            type={field.type} 
            name={field.name} 
            value={formData[field.name]} 
            onChange={handleChange} 
          />
        </div>
      ))}
      <button type="submit" className="form-button">{data.button.text}</button>
    </form>
  );
};

export default Form;

let data = {
    "fields": [
      {
        "label": "Roll Number",
        "type": "text",
        "name": "rollNumber"
      },
      {
        "label": "Phone Number",
        "type": "text",
        "name": "phoneNumber"
      }
    ],
    "button": {
      "text": "Search"
    }
  }
  
