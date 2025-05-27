import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const InformationServices = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Information Services</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Transforming information into insights and value with advanced digital solutions.
            </p>
          </div>
        </section>

        {/* Industry Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Powering the Information Economy</h2>
                <p className="text-lg mb-4 text-gray-700">
                  In today's data-driven world, the ability to collect, process, analyze, and deliver information effectively is a critical competitive advantage. Information services companies face both unprecedented opportunities and complex challenges in managing the growing volume, velocity, and variety of data.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  SYMENTEX partners with information service providers, data companies, publishers, research firms, and analytics organizations to navigate this evolving landscape and harness the full potential of digital technologies.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our comprehensive solutions leverage AI, cloud, advanced analytics, and modern software engineering to help you transform raw data into valuable insights, deliver compelling information products, and create exceptional user experiences.
                </p>
                <Button className="btn-symentex mt-4">Explore our information services solutions</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/information-services-overview.webp"
                    alt="Information services digital transformation"
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
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Information Services Solutions</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Data Engineering & Architecture</h3>
                <p className="text-gray-700">
                  Design and implement robust data infrastructures, pipelines, and platforms that enable efficient data collection, processing, integration, and management at scale.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Advanced Analytics & AI</h3>
                <p className="text-gray-700">
                  Transform data into actionable insights with AI, machine learning, natural language processing, and advanced analytics capabilities that create value and competitive advantage.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Information Product Development</h3>
                <p className="text-gray-700">
                  Create innovative, high-value information products and services with modern software engineering, API development, and platform strategies that deliver exceptional user experiences.
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
                <h3 className="text-xl font-semibold mb-4 text-primary">Data Governance & Compliance</h3>
                <p className="text-gray-700">
                  Implement comprehensive data governance frameworks, security controls, and compliance solutions that protect sensitive information and maintain trust in your services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Cloud & Infrastructure Modernization</h3>
                <p className="text-gray-700">
                  Optimize performance, scalability, and cost-effectiveness with cloud-native architectures, microservices, and modern infrastructure solutions tailored for information services.
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
                    src="https://ext.same-assets.com/452092240/financial-data-platform.webp"
                    alt="Financial data platform transformation"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Financial Data Platform Modernization</h3>
                  <p className="text-gray-700 mb-4">
                    We partnered with a leading financial information provider to modernize their data platform architecture, implementing a cloud-native, microservices-based solution with advanced analytics capabilities. The transformation improved data processing speed by 70%, reduced time-to-market for new features by 60%, and enabled real-time delivery of financial insights to clients.
                  </p>
                  <a href="/case-studies/financial-data-platform" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/research-analytics-platform.webp"
                    alt="Research and analytics platform"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">AI-Powered Research Platform</h3>
                  <p className="text-gray-700 mb-4">
                    Our team developed an intelligent research and analytics platform for a global market research firm, incorporating natural language processing, machine learning, and advanced visualization capabilities. The solution enhanced research quality and speed by 45%, expanded content coverage by 60%, and created new monetization opportunities through personalized, AI-driven insights.
                  </p>
                  <a href="/case-studies/research-platform" className="text-secondary font-medium flex items-center">
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
              Explore our latest thinking on information services trends, innovations, and strategic imperatives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/data-monetization.webp"
                  alt="Data monetization strategies"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">The Future of Data Monetization</h3>
                  <p className="text-gray-700 mb-4">Innovative strategies and business models for creating sustainable value from data assets in the digital economy.</p>
                  <a href="/insights/data-monetization" className="text-secondary font-medium">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/ai-information-services.webp"
                  alt="AI in information services"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">AI-Driven Information Services</h3>
                  <p className="text-gray-700 mb-4">How artificial intelligence is transforming content creation, curation, discovery, and delivery in the information services industry.</p>
                  <a href="/insights/ai-information-services" className="text-secondary font-medium">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/data-governance.webp"
                  alt="Data governance and privacy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Balancing Innovation and Governance</h3>
                  <p className="text-gray-700 mb-4">Strategies for managing data privacy, compliance, and ethical considerations while driving innovation in information services.</p>
                  <a href="/insights/data-governance" className="text-secondary font-medium">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to transform your information services?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX can help your organization harness the power of data and technology to create exceptional information products and services.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our Information Services Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InformationServices;
