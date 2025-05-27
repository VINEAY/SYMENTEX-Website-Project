import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const ApplicationServices = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Application Services</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Modernize, optimize, and manage your application portfolio for enhanced business agility and innovation.
            </p>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Transform Your Applications</h2>
                <p className="text-lg mb-4 text-gray-700">
                  In today's rapidly evolving digital landscape, your applications are the foundation of your business operations and customer interactions. SYMENTEX Application Services helps you maximize the value of your application investments.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  We provide end-to-end application services that span modernization, development, integration, and management, enabling you to accelerate innovation, enhance customer experiences, and drive operational excellence.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our approach combines deep technical expertise, industry knowledge, and modern delivery methods to create resilient, scalable applications that meet your current needs and adapt to future requirements.
                </p>
                <Button className="btn-symentex mt-4">Explore our application solutions</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/1239854721.webp"
                    alt="Application development team working on code"
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
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Application Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Application Modernization</h3>
                <p className="text-gray-700">
                  Transform legacy applications into modern, cloud-native solutions that enhance agility, reduce costs, and accelerate innovation through refactoring, rearchitecting, or rebuilding approaches.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Custom Application Development</h3>
                <p className="text-gray-700">
                  Create purpose-built applications tailored to your unique business needs, leveraging modern technologies, agile methodologies, and user-centered design principles.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Application Integration</h3>
                <p className="text-gray-700">
                  Connect and orchestrate your application ecosystem with enterprise integration solutions, APIs, and microservices architectures that enable seamless data flow and business process automation.
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
                <h3 className="text-xl font-semibold mb-4 text-primary">Application Management</h3>
                <p className="text-gray-700">
                  Optimize application performance, availability, and user experience through managed services that include monitoring, maintenance, support, and continuous improvement.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Digital Experience Engineering</h3>
                <p className="text-gray-700">
                  Create engaging, intuitive user experiences across web, mobile, and emerging platforms that drive customer satisfaction, loyalty, and business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Application Delivery Approach</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Discover</h3>
                <p className="text-gray-700 text-center">
                  Understand your business needs, technical landscape, and user requirements through comprehensive assessment and analysis.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Design</h3>
                <p className="text-gray-700 text-center">
                  Create solution architecture, user experience, and technical design aligned with your business goals and industry best practices.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Develop</h3>
                <p className="text-gray-700 text-center">
                  Build and integrate applications using agile methodologies, DevOps practices, and modern engineering tools for quality and speed.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Deliver & Evolve</h3>
                <p className="text-gray-700 text-center">
                  Deploy to production and continuously enhance application value through managed services, analytics, and improvement cycles.
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
                    src="https://ext.same-assets.com/452092240/5847517890.webp"
                    alt="Banking application modernization"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Banking Application Modernization</h3>
                  <p className="text-gray-700 mb-4">
                    We helped a global financial institution modernize their legacy lending platform to a cloud-native architecture, resulting in 60% faster time-to-market for new features, 40% reduction in operating costs, and improved customer experience metrics.
                  </p>
                  <a href="/case-studies/banking-app-modernization" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/3654875121.webp"
                    alt="Healthcare patient portal development"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Healthcare Patient Portal Development</h3>
                  <p className="text-gray-700 mb-4">
                    Our team created a comprehensive patient engagement platform for a leading healthcare provider, incorporating telehealth, medical records access, and appointment management. The solution increased patient engagement by 75% and improved satisfaction scores by 40%.
                  </p>
                  <a href="/case-studies/healthcare-portal" className="text-secondary font-medium flex items-center">
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
            <h2 className="text-3xl font-semibold mb-6">Ready to transform your applications?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX's Application Services can help you modernize, optimize, and manage your application portfolio.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our Application Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ApplicationServices;
