import React, { useState } from 'react';

const ServiceForm = ({ addService }) => {
  // State to hold the new service input
  const [service, setService] = useState({ name: '', description: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (service.name && service.description && service.price) {
      addService(service);
      setService({ name: '', description: '', price: '' }); // Clear the form after submission
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Service Name"
        value={service.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Service Description"
        value={service.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Service Price"
        value={service.price}
        onChange={handleChange}
      />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default ServiceForm;