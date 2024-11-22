
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GeometricLogo from './GeometricLogo'; // Import your 3D logo component
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/effect-fade'; // Import fade effect styles
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import ServiceDetail from './ServiceDetail';
// Home Page Component
function Home() {
  // State to manage the current text
  const [currentText, setCurrentText] = useState('CADASTRU');

  useEffect(() => {
    // Set up an interval to change text every 4 seconds
    const textInterval = setInterval(() => {
      setCurrentText(prevText => {
        switch (prevText) {
          case 'CADASTRU':
            return 'URBANISM';
          case 'URBANISM':
            return 'TOPOGRAFIE';
          case 'TOPOGRAFIE':
            return 'PROIECTARE';
          default:
            return 'CADASTRU';
        }
      });
    }, 4000); // Change every 4 seconds

    // Clean up the interval when component is unmounted or when effect is rerun
    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="h-screen flex items-start justify-center bg-black text-white text-center pt-40">
      <div className="container mx-auto">
        {/* Procad Logo with Gradient and Shadow */}
        <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-xl mb-6">
          Procad
        </div>
        {/* Welcome Text */}
        <p className="text-xl mb-6">Welcome to Procad. Click on the navigation links to explore our services.</p>

        {/* Swiper Section */}
        <Swiper
          spaceBetween={50} // Space between slides
          slidesPerView={1} // Number of slides visible at once
          loop={true} // Continuous loop mode
          autoplay={{
            delay: 4000, // Change slide every 4 seconds (4000 ms)
            disableOnInteraction: false, // Keep autoplay even after interaction
          }}
          effect="fade" // Fade effect for smooth transition
        >
          <SwiperSlide>
            <div
              className="h-[300px] bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: "url('path_to_your_image1.jpg')", // Replace with your image URL
              }}
            >
              <p className="text-2xl text-white font-bold">{currentText}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: "url('path_to_your_image2.jpg')", // Replace with your image URL
              }}
            >
              <p className="text-2xl text-white font-bold">{currentText}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: "url('path_to_your_image3.jpg')", // Replace with your image URL
              }}
            >
              <p className="text-2xl text-white font-bold">{currentText}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: "url('path_to_your_image4.jpg')", // Replace with your image URL
              }}
            >
              <p className="text-2xl text-white font-bold">{currentText}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

// About Page Component
function About() {
  return (
    <section id="about" className="py-16 bg-black min-h-screen overflow-hidden">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-6">About Procad</h2>
        <p className="text-lg max-w-xl mx-auto">
          BUN VENIT pe pagina noastră. Suntem onorați să vă punem la dispoziție cele mai de calitate servicii în domeniul - CADASTRU, URBANISM, TOPOGRAFIE și PROIECTARE.
          <br />
          <br />
          Firma PROCAD a fost înființată în anul 2005 și este autorizată de către Agenția Națională de Cadastru și Publicitate Imobiliară fiind certificată în Clasa I pentru domeniile cadastrului, geodeziei și cartografiei. Societatea este certificată pentru proiectarea de drumuri județene, locale, străzi și construcții anexe; de asemenea un rol important în activitatea firmei o reprezintă și lucrarile de urbanism, respectiv dezvoltările imobiliare în domeniul rezidențial, comercial, industrial, logistic și agrement.
          <br />
          <br />
          Pentru orice detaliu si nelămurire echipa noastră de profesioniști vă stă la dispoziție cu orice soluție pentru problema dumneavoastră.
          <br />
          <br />
          Echipa Procad
        </p>
      </div>
    </section>
  );
}

// Services Page Component


// Contact Page Component
function Contact() {
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg mb-6">
          Have a project or question? Reach out to us today and get a free consultation.
        </p>

        <form className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-xl font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-xl font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
              placeholder="Your Email Address"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-xl font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

// Main App Component with Routing
function Services() {
  const services = [
    {
      title: 'Laser Scanning',
      icon: 'fas fa-scan',
      description: 'State-of-the-art laser scanning technology for capturing highly accurate 3D data.',
      image: '/laser.jpg',  // Add the path to the image here
      detailedDescription: [
        'Precision measurements for large-scale projects.',
        'Detailed point clouds for 3D models.',
        'Ideal for complex and hard-to-reach structures.',
        'Improves efficiency and accuracy in survey data collection.',
        'Produces highly accurate 3D models for construction and design.'
      ],
      path: '/services/laser-scanning',
    },
    {
      title: 'Measured Building Surveys',
      icon: 'fas fa-building',
      description: 'Detailed building surveys for accurate measurements and floor plans.',
      image: 'path_to_measured_building_image.jpg',  // Add the path to the image here
      detailedDescription: [
        'Redevelopment and refurbishment projects.',
        'Space planning and lease plans.',
        'Accurate floor plans, elevations, and sections.',
        '3D Laser Scanning used for detailed measurements.',
        'Deliverables in AutoCAD DWG or PDF format.',
        'Detailed and well-presented drawings within time and budget.'
      ],
      path: '/services/measured-building-surveys',
    },
    // Add image URLs for the other services in a similar way
  ];
  

  return (
    <section id="services" className="py-16 bg-black min-h-screen">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="service-card p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
            >
              <div className="mb-4 text-5xl text-blue-500">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg mb-4">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main App Component with Routing
function App() {
  return (
    <Router>
      <div className="bg-black text-white overflow-x-hidden">
        {/* Header with Navigation */}
        <header className="bg-black text-white p-6">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-xl">
                Procad
              </div>
              <div className="text-2xl font-bold">
                <GeometricLogo className="h-12 w-12" />
              </div>
            </div>
            {/* Navigation Links */}
            <nav>
              <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
                <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} /> {/* Dynamic service detail route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
