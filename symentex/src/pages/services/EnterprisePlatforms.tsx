import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const EnterprisePlatforms = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Platforms</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Build, optimize, and manage powerful platforms that accelerate digital business transformation.
            </p>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Empower Your Digital Enterprise</h2>
                <p className="text-lg mb-4 text-gray-700">
                  In today's digital economy, enterprise platforms form the foundation of business agility, innovation, and competitive advantage. Modern organizations need robust, scalable, and integrated platform ecosystems that connect data, applications, and people across the enterprise.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  SYMENTEX's Enterprise Platforms services help you design, implement, and optimize platform solutions that digitize core business functions, enhance user experiences, and enable rapid innovation. Our expertise spans leading enterprise technologies including CRM, ERP, HCM, commerce, and industry-specific platforms.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  With our platform-centric approach, we help you navigate complex technology landscapes, reduce implementation risks, accelerate time-to-value, and create adaptable digital foundations that evolve with your business needs.
                </p>
                <Button className="btn-symentex mt-4">Explore our platform solutions</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/enterprise-platforms.webp"
                    alt="Modern enterprise platforms and digital systems visualization"
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
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Enterprise Platform Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Platform Strategy & Advisory</h3>
                <p className="text-gray-700">
                  Develop comprehensive platform strategies, roadmaps, and technology selection frameworks aligned with your business objectives and digital transformation goals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">CRM Platforms</h3>
                <p className="text-gray-700">
                  Implement and optimize Salesforce, Microsoft Dynamics, SAP CRM, and other customer relationship management platforms to enhance sales, service, and marketing capabilities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">ERP Solutions</h3>
                <p className="text-gray-700">
                  Transform core business operations with integrated enterprise resource planning platforms including SAP S/4HANA, Oracle ERP Cloud, and Microsoft Dynamics 365.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Human Capital Management</h3>
                <p className="text-gray-700">
                  Modernize HR processes and employee experiences with leading HCM platforms including Workday, SAP SuccessFactors, and Oracle HCM Cloud.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Commerce Platforms</h3>
                <p className="text-gray-700">
                  Create seamless omnichannel commerce experiences with platforms like Salesforce Commerce Cloud, Adobe Commerce, and SAP Commerce Cloud.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Low-Code/No-Code Platforms</h3>
                <p className="text-gray-700">
                  Accelerate application development and business process automation with platforms like Microsoft Power Platform, OutSystems, and ServiceNow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Platform Implementation Approach</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Discover</h3>
                <p className="text-gray-700 text-center">
                  Understand your business requirements, technology landscape, and transformation objectives through comprehensive assessment and analysis.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Design</h3>
                <p className="text-gray-700 text-center">
                  Create platform architectures, solution designs, and implementation roadmaps aligned with your business processes and industry best practices.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Deliver</h3>
                <p className="text-gray-700 text-center">
                  Implement platforms using agile methodologies, DevOps practices, and accelerators that ensure quality, speed, and business alignment.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Evolve</h3>
                <p className="text-gray-700 text-center">
                  Continuously enhance platform value through managed services, optimization, and innovation that adapts to changing business needs.
                </p>
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
                    src="https://ext.same-assets.com/452092240/crm-transformation.webp"
                    alt="CRM platform transformation"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Global CRM Platform Transformation</h3>
                  <p className="text-gray-700 mb-4">
                    We helped a Fortune 500 financial services company implement a next-generation Salesforce CRM platform across 25 countries and 15,000 users. The solution unified customer data, streamlined sales processes, and enhanced service capabilities. The transformation increased sales productivity by 35%, improved customer satisfaction scores by 28%, and delivered $75M in annual business value.
                  </p>
                  <a href="/case-studies/crm-transformation" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/erp-digital-core.webp"
                    alt="ERP digital core transformation"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Manufacturing ERP Digital Core</h3>
                  <p className="text-gray-700 mb-4">
                    Our team implemented an SAP S/4HANA digital core for a global manufacturing company, transforming finance, supply chain, production, and logistics processes. The cloud-based platform replaced 12 legacy systems, standardized processes across 8 business units, and provided real-time insights through embedded analytics. The solution reduced month-end close time by 40%, improved inventory accuracy by 25%, and generated over $120M in operational savings.
                  </p>
                  <a href="/case-studies/manufacturing-erp" className="text-secondary font-medium flex items-center">
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
            <h2 className="text-3xl font-semibold mb-6">Ready to transform your enterprise platforms?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX's Enterprise Platform services can help you build digital foundations for business growth and innovation.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our Platform Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EnterprisePlatforms;
