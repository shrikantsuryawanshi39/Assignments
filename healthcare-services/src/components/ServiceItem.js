import React, { useState } from 'react';

const ServiceItem = ({ service, index, updateService, deleteService }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedService, setUpdatedService] = useState(service);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedService({ ...updatedService, [name]: value });
  };

  const handleUpdate = () => {
    updateService(index, updatedService);
    setIsEditing(false);
  };

  return (
    <div className="service-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={updatedService.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={updatedService.description}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={updatedService.price}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>Price: ${service.price}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteService(index)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ServiceItem;