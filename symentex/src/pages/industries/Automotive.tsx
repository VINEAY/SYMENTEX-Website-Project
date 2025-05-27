import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const Automotive = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-full h-full">
            <div
              className="absolute right-0 bottom-0 w-3/4 h-full bg-secondary/20 transform -skew-x-12"
              style={{ transformOrigin: 'bottom right' }}
            />
            <div
              className="absolute right-0 bottom-0 w-1/2 h-full bg-secondary/30 transform -skew-x-12"
              style={{ transformOrigin: 'bottom right' }}
            />
          </div>

          <div className="container-wide relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Automotive</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Driving innovation and digital transformation in the automotive industry.
            </p>
          </div>
        </section>

        {/* Industry Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Transforming the Automotive Industry</h2>
                <p className="text-lg mb-4 text-gray-700">
                  The automotive industry is experiencing unprecedented disruption and transformation. From connected vehicles and autonomous driving to electrification and new mobility services, automotive companies face complex challenges and exciting opportunities.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  SYMENTEX partners with leading automotive manufacturers, suppliers, and mobility providers to navigate this evolving landscape, accelerate innovation, and reimagine the future of mobility.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our comprehensive solutions span the entire automotive value chain, helping you enhance customer experiences, optimize operations, and build new business models that drive growth and competitive advantage.
                </p>
                <Button className="btn-symentex mt-4">Explore our automotive solutions</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/automotive-concept.webp"
                    alt="Automotive digital manufacturing and innovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Focus Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Automotive Solutions</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Connected Vehicle Services</h3>
                <p className="text-gray-700">
                  Create seamless connected experiences that enhance vehicle performance, safety, and user satisfaction through IoT platforms, telematics, and advanced analytics.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Autonomous Driving Technologies</h3>
                <p className="text-gray-700">
                  Accelerate autonomous vehicle development through AI, machine learning, computer vision, and simulation capabilities that enhance safety and functionality.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Electric Vehicle Ecosystems</h3>
                <p className="text-gray-700">
                  Build comprehensive EV ecosystems spanning vehicle systems, charging infrastructure, battery management, and energy optimization solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Smart Manufacturing</h3>
                <p className="text-gray-700">
                  Transform automotive production with Industry 4.0 technologies including IoT, digital twins, AI, and robotics to improve quality, efficiency, and flexibility.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Digital Customer Experience</h3>
                <p className="text-gray-700">
                  Create seamless omnichannel customer journeys from digital showrooms and personalized marketing to connected ownership experiences and mobility services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Case Studies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col h-full">
                <div className="rounded-t-md overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/connected-car-platform.webp"
                    alt="Connected vehicle platform development"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Connected Vehicle Platform for Global OEM</h3>
                  <p className="text-gray-700 mb-4">
                    We developed a comprehensive connected vehicle platform for a leading global automotive manufacturer, enabling real-time vehicle monitoring, predictive maintenance, and enhanced driver experiences that increased customer satisfaction by 35% and service revenue by 28%.
                  </p>
                  <a href="/case-studies/connected-vehicle" className="text-secondary font-medium flex items-center">
                    Read case study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col h-full">
                <div className="rounded-t-md overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/automotive-manufacturing.webp"
                    alt="Automotive manufacturing digital transformation"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Digital Manufacturing Transformation</h3>
                  <p className="text-gray-700 mb-4">
                    Our team helped a tier-1 automotive supplier implement an Industry 4.0 solution across their manufacturing facilities, incorporating IoT sensors, digital twins, and AI analytics that reduced quality defects by 45%, improved operational efficiency by 30%, and decreased maintenance costs by 25%.
                  </p>
                  <a href="/case-studies/automotive-manufacturing" className="text-secondary font-medium flex items-center">
                    Read case study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Insights Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-8 text-primary">Industry Insights</h2>
            <p className="text-lg mb-8 text-gray-700">
              Explore our latest thinking on the automotive industry trends and innovations shaping the future of mobility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/ev-trends.webp"
                  alt="Electric vehicle trends"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">The Future of Electric Mobility</h3>
                  <p className="text-gray-700 mb-4">Exploring the technologies and trends accelerating electric vehicle adoption and ecosystem development.</p>
                  <a href="/insights/electric-mobility" className="text-secondary font-medium">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/autonomous-driving.webp"
                  alt="Autonomous driving technologies"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Autonomous Driving: From Vision to Reality</h3>
                  <p className="text-gray-700 mb-4">Navigating the technical, regulatory, and ethical challenges of autonomous vehicle deployment.</p>
                  <a href="/insights/autonomous-driving" className="text-secondary font-medium">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/automotive-digital-experience.webp"
                  alt="Automotive digital customer experience"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Reimagining the Automotive Customer Experience</h3>
                  <p className="text-gray-700 mb-4">How digital technologies are transforming every aspect of the customer journey.</p>
                  <a href="/insights/automotive-cx" className="text-secondary font-medium">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to accelerate your automotive innovation?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX can help your organization thrive in the automotive industry's digital future.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our Automotive Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Automotive;
