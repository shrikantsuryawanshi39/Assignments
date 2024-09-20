import React, { useState } from 'react';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';
import './App.css';

function App() {
  // State to hold the services
  const [services, setServices] = useState([]);

  // Function to add a new service
  const addService = (newService) => {
    setServices([...services, newService]);
  };

  // Function to update a service
  const updateService = (index, updatedService) => {
    const updatedServices = services.map((service, i) =>
      i === index ? updatedService : service
    );
    setServices(updatedServices);
  };

  // Function to delete a service
  const deleteService = (index) => {
    const remainingServices = services.filter((_, i) => i !== index);
    setServices(remainingServices);
  };

  return (
    <div className="app-container">
      <h1>Healthcare Services Management</h1>
      <ServiceForm addService={addService} />
      <ServiceList
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      />
    </div>
  );
}

export default App;