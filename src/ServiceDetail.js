// ServiceDetail.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

const services = [
  {
    title: 'Laser Scanning',
    icon: 'fas fa-scan',
    description: 'State-of-the-art laser scanning technology for capturing highly accurate 3D data.',
    image: '/laser.jpg', // Replace with actual image path
    detailedDescription: [
      'Precision measurements for large-scale projects.',
      'Detailed point clouds for 3D models.',
      'Ideal for complex and hard-to-reach structures.',
      'Improves efficiency and accuracy in survey data collection.',
      'Produces highly accurate 3D models for construction and design.'
    ],
    path: '/services/laser-scanning',
  },
  // Add more services as needed
];

const ServiceDetail = () => {
  const { serviceId } = useParams(); // Capture serviceId from the URL parameters

  // Find the service based on the serviceId
  const service = services.find((s) => s.path === `/services/${serviceId}`);

  // If no service is found, return a "Service not found" message
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <section className="py-16 bg-black text-white min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Column - Service Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left lg:mr-8">
          <h2 className="text-4xl font-bold mb-8">{service.title}</h2>
          <p className="text-lg mb-6">{service.description}</p>

          {/* Detailed Description */}
          <div className="space-y-4">
            {service.detailedDescription.map((point, index) => (
              <div key={index} className="text-lg">
                <p>- {point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={service.image}  // Ensure this is the correct image path
            alt={service.title}
            className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

// Export the ServiceDetail component as the default export
export default ServiceDetail;
