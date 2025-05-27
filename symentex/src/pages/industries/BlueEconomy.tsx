import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const BlueEconomy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blue Economy</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Driving sustainable innovation and digital transformation in ocean-based industries.
            </p>
          </div>
        </section>

        {/* Industry Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">The Future of Ocean Resources</h2>
                <p className="text-lg mb-4 text-gray-700">
                  The blue economy represents the sustainable use of ocean resources for economic growth, improved livelihoods, and ocean ecosystem health. It encompasses industries such as maritime transport, renewable energy, fisheries, aquaculture, coastal tourism, and biotechnology.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  With growing global focus on sustainability and climate change, the blue economy presents vast opportunities for innovation and technological advancement. SYMENTEX partners with organizations across the marine and coastal sectors to drive digital transformation while preserving our oceans.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our comprehensive solutions enable organizations to harness the power of data, AI, IoT, and cloud technologies to optimize operations, improve resource management, reduce environmental impact, and create new sustainable business models.
                </p>
                <Button className="btn-symentex mt-4">Explore our blue economy solutions</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/blue-economy-overview.webp"
                    alt="Ocean resources and sustainable innovation"
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
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Blue Economy Solutions</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Sustainable Fisheries Management</h3>
                <p className="text-gray-700">
                  Leverage data analytics, IoT, and AI to improve fisheries management, enhance traceability, reduce bycatch, and combat illegal, unreported, and unregulated fishing.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Ocean Renewable Energy</h3>
                <p className="text-gray-700">
                  Accelerate the development and deployment of offshore wind, tidal, wave, and other marine renewable energy technologies through digital innovation and operational excellence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Smart Maritime Logistics</h3>
                <p className="text-gray-700">
                  Optimize shipping operations, port management, and supply chains with digital technologies to reduce emissions, improve efficiency, and enhance safety and security.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Ocean Health Monitoring</h3>
                <p className="text-gray-700">
                  Deploy advanced sensing technologies, satellite imagery, and analytics to monitor ocean health, biodiversity, pollution, and climate impacts in real-time.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Sustainable Aquaculture</h3>
                <p className="text-gray-700">
                  Transform aquaculture with IoT, analytics, and automation to increase production efficiency, improve animal welfare, and reduce environmental impacts.
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
                    src="https://ext.same-assets.com/452092240/sustainable-fishery.webp"
                    alt="Sustainable fishery management platform"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Digital Transformation for Sustainable Fisheries</h3>
                  <p className="text-gray-700 mb-4">
                    We developed an integrated digital platform for a major seafood producer, implementing IoT sensors, blockchain-based traceability, and AI analytics that improved operational efficiency by 35%, reduced bycatch by 40%, and enhanced supply chain transparency.
                  </p>
                  <a href="/case-studies/sustainable-fisheries" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/offshore-wind.webp"
                    alt="Offshore wind farm digital twin"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Digital Twin for Offshore Wind Operations</h3>
                  <p className="text-gray-700 mb-4">
                    Our team created a comprehensive digital twin solution for an offshore wind operator, integrating real-time sensor data, weather analytics, and predictive maintenance algorithms that increased energy production by 15%, reduced maintenance costs by 25%, and extended asset lifecycle by 20%.
                  </p>
                  <a href="/case-studies/offshore-wind-digital-twin" className="text-secondary font-medium flex items-center">
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
              Explore our latest thinking on the blue economy trends, innovations, and sustainable development opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/ocean-data-revolution.webp"
                  alt="Ocean data revolution"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">The Ocean Data Revolution</h3>
                  <p className="text-gray-700 mb-4">How new sensing technologies and analytics are transforming our understanding of the oceans and enabling sustainable development.</p>
                  <a href="/insights/ocean-data-revolution" className="text-secondary font-medium">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/blue-carbon.webp"
                  alt="Blue carbon technologies"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Blue Carbon: Ocean-Based Climate Solutions</h3>
                  <p className="text-gray-700 mb-4">Exploring the technologies and strategies for harnessing the ocean's power to combat climate change.</p>
                  <a href="/insights/blue-carbon" className="text-secondary font-medium">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/sustainable-shipping.webp"
                  alt="Sustainable shipping innovations"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">The Future of Sustainable Shipping</h3>
                  <p className="text-gray-700 mb-4">Digital technologies and innovations reshaping maritime transport for a sustainable future.</p>
                  <a href="/insights/sustainable-shipping" className="text-secondary font-medium">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to unlock the potential of the blue economy?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX can help your organization drive sustainable innovation in the marine and coastal sectors.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our Blue Economy Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlueEconomy;
