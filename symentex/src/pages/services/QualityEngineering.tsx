import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const QualityEngineering = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quality Engineering & Assurance</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Ensure exceptional digital experiences with comprehensive quality engineering and testing solutions.
            </p>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Build Quality From the Start</h2>
                <p className="text-lg mb-4 text-gray-700">
                  In today's fast-paced digital world, quality is no longer just about finding defects—it's about preventing them. As businesses accelerate their development cycles and deploy continuously, traditional quality assurance approaches are giving way to modern quality engineering practices that embed quality throughout the development lifecycle.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  SYMENTEX's Quality Engineering & Assurance services help you transform testing from a validation activity to an integrated engineering discipline. We combine automation, analytics, and engineering expertise to build quality into every stage of development, ensuring your digital products and services deliver exceptional experiences.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  From strategy to execution, our comprehensive approach helps you accelerate releases, reduce costs, and enhance customer satisfaction through superior quality and reliability.
                </p>
                <Button className="btn-symentex mt-4">Explore our quality engineering solutions</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/quality-engineering.webp"
                    alt="Quality engineering dashboard with test automation and metrics"
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
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Quality Engineering Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Quality Engineering Strategy</h3>
                <p className="text-gray-700">
                  Develop comprehensive quality strategies, frameworks, and transformation roadmaps that align with your business objectives and technology landscape.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Test Automation</h3>
                <p className="text-gray-700">
                  Build scalable, maintainable test automation frameworks that accelerate testing cycles, increase coverage, and provide rapid feedback across UI, API, and performance testing.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Performance Engineering</h3>
                <p className="text-gray-700">
                  Ensure your applications deliver optimal performance through load testing, stress testing, scalability analysis, and performance optimization across all layers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">DevOps Quality</h3>
                <p className="text-gray-700">
                  Integrate quality practices into DevOps pipelines with continuous testing, shift-left methodologies, and quality gates that enable fast, reliable delivery.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Specialized Testing</h3>
                <p className="text-gray-700">
                  Address specific quality needs with specialized testing services, including security testing, accessibility compliance, usability testing, and compatibility testing.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Quality Analytics</h3>
                <p className="text-gray-700">
                  Gain insights into quality metrics, defect patterns, and testing efficiency through advanced analytics, dashboards, and AI-powered predictive quality models.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Testing Approach Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Modern Testing Approach</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img
                  src="https://ext.same-assets.com/452092240/quality-engineering-approach.webp"
                  alt="Modern quality engineering approach visualization"
                  className="rounded-md shadow-lg w-full"
                />
              </div>

              <div className="md:w-1/2">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary flex items-center">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      Shift-Left Quality
                    </h3>
                    <p className="text-gray-700">
                      We embed quality from the beginning with requirements validation, early testing, and continuous feedback that catches issues before they become costly defects.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary flex items-center">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      Intelligent Automation
                    </h3>
                    <p className="text-gray-700">
                      Our smart automation frameworks prioritize maintainability, reusability, and self-healing capabilities that adapt to application changes and reduce maintenance overhead.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary flex items-center">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      Risk-Based Testing
                    </h3>
                    <p className="text-gray-700">
                      We optimize testing efforts by focusing on high-risk areas based on business impact, user journeys, and technical complexity to deliver maximum value.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary flex items-center">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      Continuous Quality
                    </h3>
                    <p className="text-gray-700">
                      Our integrated quality gates and continuous testing practices provide immediate feedback throughout the development pipeline, enabling rapid, confident releases.
                    </p>
                  </div>
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
                    src="https://ext.same-assets.com/452092240/test-automation-transformation.webp"
                    alt="Enterprise test automation transformation"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Enterprise Test Automation Transformation</h3>
                  <p className="text-gray-700 mb-4">
                    We implemented a comprehensive test automation framework for a global financial services organization, replacing fragmented manual testing with a scalable, cloud-based automation solution. The framework automated 80% of regression tests, integrated with CI/CD pipelines, and implemented AI-based self-healing capabilities. This transformation reduced testing cycles from 2 weeks to 24 hours, decreased testing costs by 60%, and improved defect detection by 45%.
                  </p>
                  <a href="/case-studies/test-automation" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/performance-engineering.webp"
                    alt="E-commerce performance engineering"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">E-commerce Performance Engineering</h3>
                  <p className="text-gray-700 mb-4">
                    Our team helped a leading retailer prepare their e-commerce platform for peak holiday traffic by implementing a comprehensive performance engineering solution. We conducted load testing, identified bottlenecks, and optimized the application architecture, database queries, and caching strategies. The solution enabled the platform to handle 300% more traffic, reduced average page load time by 65%, and prevented an estimated $4.2M in lost sales from potential outages.
                  </p>
                  <a href="/case-studies/ecommerce-performance" className="text-secondary font-medium flex items-center">
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
            <h2 className="text-3xl font-semibold mb-6">Ready to transform your quality engineering approach?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX's Quality Engineering & Assurance services can help you deliver exceptional digital experiences with speed and confidence.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our Quality Engineering Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QualityEngineering;
