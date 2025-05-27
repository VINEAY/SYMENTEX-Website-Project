import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const Experience = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Create exceptional digital experiences that engage customers, empower employees, and drive business growth.
            </p>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Transform Every Digital Interaction</h2>
                <p className="text-lg mb-4 text-gray-700">
                  In today's digital-first world, experiences are the currency of business success. Exceptional user experiences create emotional connections, build brand loyalty, and drive sustainable growth across customer and employee journeys.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  SYMENTEX's Experience services help you reinvent digital interactions across channels, touchpoints, and devices. We combine human-centered design, cutting-edge technology, and deep industry expertise to create intuitive, personalized, and memorable digital experiences.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  From customer-facing applications and websites to employee portals and workplace solutions, our comprehensive approach delivers meaningful experiences that solve business challenges, transform relationships, and create lasting value.
                </p>
                <Button className="btn-symentex mt-4">Explore our experience solutions</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/digital-experience.webp"
                    alt="Modern digital experience design with multiple device interfaces"
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
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Experience Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Experience Strategy</h3>
                <p className="text-gray-700">
                  Develop comprehensive experience visions and roadmaps aligned with your brand strategy, customer insights, and business objectives to guide your digital transformation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">User Experience Design</h3>
                <p className="text-gray-700">
                  Create intuitive, accessible, and engaging user interfaces with our human-centered design approach that puts users at the heart of every solution.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Digital Product Engineering</h3>
                <p className="text-gray-700">
                  Build exceptional digital products and applications that deliver seamless experiences across web, mobile, and emerging platforms with our full-stack development capabilities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Content & Commerce</h3>
                <p className="text-gray-700">
                  Deliver personalized content and seamless commerce experiences through integrated content management and e-commerce solutions that drive engagement and conversion.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Customer Experience</h3>
                <p className="text-gray-700">
                  Transform customer journeys across touchpoints with omnichannel solutions that create consistent, personalized, and emotionally engaging brand experiences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Employee Experience</h3>
                <p className="text-gray-700">
                  Create digital workplaces and tools that enhance productivity, collaboration, and engagement through intuitive interfaces and intelligent workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Experience Design Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

              <div className="bg-white p-6 rounded-md shadow-md relative z-10">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-3 text-primary text-center">Discover</h3>
                <p className="text-gray-700 text-center text-sm">
                  Research user needs, business requirements, and market trends to identify opportunities for innovation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md shadow-md relative z-10">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-3 text-primary text-center">Define</h3>
                <p className="text-gray-700 text-center text-sm">
                  Synthesize insights into experience strategy, user journeys, and solution requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md shadow-md relative z-10">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-3 text-primary text-center">Design</h3>
                <p className="text-gray-700 text-center text-sm">
                  Create intuitive, engaging, and accessible interfaces through collaborative design iterations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md shadow-md relative z-10">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold mb-3 text-primary text-center">Develop</h3>
                <p className="text-gray-700 text-center text-sm">
                  Build high-quality digital solutions using modern frameworks, APIs, and best practices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md shadow-md relative z-10">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">5</div>
                <h3 className="text-lg font-semibold mb-3 text-primary text-center">Deliver & Evolve</h3>
                <p className="text-gray-700 text-center text-sm">
                  Launch, measure, and continuously improve experiences based on user feedback and analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Experience Solutions by Industry</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-md overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/financial-services-experience.webp"
                    alt="Financial services digital experience"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Financial Services</h3>
                  <p className="text-gray-700 mb-4">
                    Create secure, intuitive digital banking and investment experiences that build trust, enhance financial wellness, and deliver personalized service across channels.
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Mobile banking applications
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Wealth management platforms
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Digital onboarding solutions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/healthcare-experience.webp"
                    alt="Healthcare digital experience"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Healthcare</h3>
                  <p className="text-gray-700 mb-4">
                    Design human-centered digital health experiences that empower patients, enhance provider efficiency, and improve health outcomes across the care continuum.
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Patient engagement platforms
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Telehealth solutions
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Clinical workflow interfaces
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/retail-experience.webp"
                    alt="Retail digital experience"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Retail & Consumer</h3>
                  <p className="text-gray-700 mb-4">
                    Deliver immersive shopping experiences that blend digital and physical touchpoints, drive conversion, and build lasting customer relationships.
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Omnichannel commerce platforms
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Mobile shopping applications
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Personalized loyalty experiences
                    </li>
                  </ul>
                </div>
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
                    src="https://ext.same-assets.com/452092240/banking-app-experience.webp"
                    alt="Mobile banking app redesign"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Mobile Banking Experience Transformation</h3>
                  <p className="text-gray-700 mb-4">
                    We redesigned and rebuilt a mobile banking experience for a top-10 U.S. bank, creating an intuitive, feature-rich application that simplified complex financial tasks. The solution reimagined core banking journeys, incorporated biometric security, and delivered personalized insights. Post-launch, the bank saw a 45% increase in mobile engagement, 62% increase in digital transactions, and achieved the highest app store ratings in its history.
                  </p>
                  <a href="/case-studies/banking-experience" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/employee-experience-platform.webp"
                    alt="Employee experience platform"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Global Employee Experience Platform</h3>
                  <p className="text-gray-700 mb-4">
                    We created a unified employee experience platform for a multinational corporation with 85,000 employees across 40 countries. The solution streamlined HR processes, enhanced collaboration, and personalized learning experiences. Built on a modern tech stack with intelligent search and AI-powered recommendations, the platform increased employee satisfaction by 40%, reduced operational costs by $12M annually, and improved talent retention by 25%.
                  </p>
                  <a href="/case-studies/employee-experience" className="text-secondary font-medium flex items-center">
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
            <h2 className="text-3xl font-semibold mb-6">Ready to transform your digital experiences?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX's Experience services can help you create meaningful digital interactions that engage customers, empower employees, and drive business growth.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our Experience Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
