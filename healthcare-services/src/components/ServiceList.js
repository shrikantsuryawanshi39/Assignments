import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ services, updateService, deleteService }) => {
  return (
    <div className="service-list">
      {services.length === 0 ? (
        <p>No services available. Add one!</p>
      ) : (
        services.map((service, index) => (
          <ServiceItem
            key={index}
            service={service}
            index={index}
            updateService={updateService}
            deleteService={deleteService}
          />
        ))
      )}
    </div>
  );
};

export default ServiceList;