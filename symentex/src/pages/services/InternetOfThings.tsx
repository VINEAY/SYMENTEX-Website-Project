import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const InternetOfThings = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Internet of Things</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Transform your business with intelligent, connected solutions that drive efficiency and innovation.
            </p>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Connect, Analyze, Transform</h2>
                <p className="text-lg mb-4 text-gray-700">
                  The Internet of Things (IoT) is revolutionizing how businesses operate, connect with customers, and create value. By connecting physical devices, sensors, and machines to digital networks, organizations can unlock unprecedented insights, automate processes, and create new service models.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  SYMENTEX's IoT services help you navigate the complex IoT landscape, from strategy and architecture to implementation and management. We combine deep domain expertise, engineering capabilities, and analytics to create end-to-end IoT solutions that deliver tangible business outcomes.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Whether you're exploring your first IoT initiative or scaling existing deployments, our comprehensive approach ensures you realize the full potential of connected technologies while addressing security, scalability, and integration challenges.
                </p>
                <Button className="btn-symentex mt-4">Explore our IoT solutions</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/iot-solutions.webp"
                    alt="Connected IoT devices and sensors with digital visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our IoT Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">IoT Strategy & Consulting</h3>
                <p className="text-gray-700">
                  Develop comprehensive IoT roadmaps, business cases, and implementation strategies aligned with your organizational goals and industry context.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">IoT Solution Engineering</h3>
                <p className="text-gray-700">
                  Design and develop complete IoT solutions, including hardware integration, embedded software, connectivity, and cloud platforms tailored to your specific requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">IoT Security</h3>
                <p className="text-gray-700">
                  Implement comprehensive security measures across your IoT ecosystem, from device-level protection to secure connectivity, data encryption, and vulnerability management.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">IoT Data Analytics</h3>
                <p className="text-gray-700">
                  Transform IoT data into actionable insights with advanced analytics, real-time monitoring, predictive capabilities, and visual dashboards that drive business decision-making.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Edge Computing</h3>
                <p className="text-gray-700">
                  Optimize your IoT infrastructure with edge computing solutions that process data locally, reduce latency, conserve bandwidth, and enable real-time decision making at the point of action.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">IoT Managed Services</h3>
                <p className="text-gray-700">
                  Ensure the continuous performance, reliability, and evolution of your IoT ecosystem with our end-to-end managed services, including monitoring, maintenance, and optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">IoT Industry Solutions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/iot-manufacturing.webp"
                    alt="Industrial IoT in manufacturing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Industrial IoT</h3>
                  <p className="text-gray-700 mb-4">
                    Connect production equipment, monitor performance, optimize maintenance, and improve operational efficiency with smart manufacturing solutions.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Predictive maintenance
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Quality assurance automation
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Asset tracking and optimization
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/iot-healthcare.webp"
                    alt="Healthcare IoT solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Healthcare IoT</h3>
                  <p className="text-gray-700 mb-4">
                    Enhance patient care, streamline operations, and improve outcomes with connected healthcare solutions for providers and life sciences organizations.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Remote patient monitoring
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Medical equipment tracking
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Medication adherence monitoring
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/iot-retail.webp"
                    alt="Retail IoT applications"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Retail IoT</h3>
                  <p className="text-gray-700 mb-4">
                    Transform customer experiences, optimize inventory, and enhance store operations with connected retail technologies.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Smart shelves and inventory
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Connected customer experiences
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Supply chain optimization
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/iot-energy.webp"
                    alt="Energy and utilities IoT solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Energy & Utilities IoT</h3>
                  <p className="text-gray-700 mb-4">
                    Improve grid reliability, optimize resource usage, and enable smart metering with connected solutions for energy and utility companies.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Smart grid management
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Energy usage optimization
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Predictive maintenance for infrastructure
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/iot-transportation.webp"
                    alt="Transportation and logistics IoT"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Transportation IoT</h3>
                  <p className="text-gray-700 mb-4">
                    Enhance fleet management, optimize logistics, and improve safety with connected solutions for transportation and logistics organizations.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Fleet tracking and management
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Supply chain visibility
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Vehicle health monitoring
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/iot-agriculture.webp"
                    alt="Smart agriculture IoT solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Smart Agriculture</h3>
                  <p className="text-gray-700 mb-4">
                    Increase crop yields, optimize resource usage, and improve sustainability with connected solutions for agriculture and food production.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Precision farming
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Livestock monitoring
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Environmental monitoring
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Case Studies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col h-full">
                <div className="rounded-t-md overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/iot-manufacturing-case.webp"
                    alt="Industrial IoT predictive maintenance solution"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Industrial IoT Predictive Maintenance</h3>
                  <p className="text-gray-700 mb-4">
                    We implemented a comprehensive IoT predictive maintenance solution for a global automotive manufacturer, connecting over 5,000 machines across 12 plants. Using edge computing, advanced analytics, and machine learning algorithms, the system predicts equipment failures 24-48 hours before they occur, reducing unplanned downtime by 35%, extending machine life by 20%, and saving $45M annually in maintenance costs.
                  </p>
                  <a href="/case-studies/industrial-iot" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/iot-smart-city.webp"
                    alt="Smart city IoT solution"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Smart City Infrastructure Management</h3>
                  <p className="text-gray-700 mb-4">
                    Our team developed a comprehensive smart city platform for a major metropolitan area, integrating IoT sensors for traffic management, environmental monitoring, utility management, and public safety. The solution delivers real-time insights through a centralized dashboard, optimizes resource allocation, improves emergency response times by 40%, reduces energy consumption by 25%, and enhances overall quality of life for citizens.
                  </p>
                  <a href="/case-studies/smart-city" className="text-secondary font-medium flex items-center">
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

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to unlock the power of connected solutions?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX's IoT services can help transform your business processes, create new revenue streams, and drive innovation.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our IoT Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InternetOfThings;
