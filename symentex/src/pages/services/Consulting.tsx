import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const Consulting = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consulting</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Strategic advisory and transformation services to navigate complexity and drive sustainable growth.
            </p>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Transform with Confidence</h2>
                <p className="text-lg mb-4 text-gray-700">
                  In today's rapidly evolving business landscape, organizations face unprecedented challenges and opportunities. SYMENTEX Consulting helps you navigate this complexity with clarity and confidence.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our consultants combine deep industry expertise, strategic insight, and technical knowledge to help you reimagine your business, optimize operations, and accelerate growth in the digital age.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  From strategy development to implementation and beyond, we partner with you at every stage of your transformation journey to unlock new sources of value and build resilience for the future.
                </p>
                <Button className="btn-symentex mt-4">Explore our consulting services</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/0854721563.webp"
                    alt="Business consulting session"
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
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Consulting Capabilities</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Strategy & Transformation</h3>
                <p className="text-gray-700">
                  Define your vision and roadmap for success with our strategic advisory services, from digital strategy and business model innovation to large-scale transformation initiatives.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Operations Excellence</h3>
                <p className="text-gray-700">
                  Optimize core business processes, enhance efficiency, and reduce costs through operational redesign, automation, and intelligent workflows powered by digital technologies.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Organizational Transformation</h3>
                <p className="text-gray-700">
                  Build the organization of the future with our human-centered approach to change management, talent strategy, culture transformation, and new ways of working.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Technology Strategy</h3>
                <p className="text-gray-700">
                  Align your technology investments with business goals through strategic technology planning, architecture design, vendor selection, and technology roadmap development.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Customer Experience</h3>
                <p className="text-gray-700">
                  Create compelling, differentiated customer experiences that drive loyalty and growth through journey mapping, experience design, and customer-centric transformation.
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
                    src="https://ext.same-assets.com/452092240/0484517890.webp"
                    alt="Financial services transformation"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Financial Services Transformation</h3>
                  <p className="text-gray-700 mb-4">
                    We helped a global financial institution reimagine their retail banking business model and customer experience, resulting in a 40% increase in digital engagement, 25% reduction in operating costs, and 15-point improvement in NPS.
                  </p>
                  <a href="/case-studies/financial-transformation" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/9654875121.webp"
                    alt="Supply chain optimization"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Supply Chain Transformation</h3>
                  <p className="text-gray-700 mb-4">
                    Our consulting team helped a global manufacturer redesign their supply chain strategy and operations, implementing digital technologies that increased visibility, reduced lead times by 35%, and improved on-time delivery by 28%.
                  </p>
                  <a href="/case-studies/supply-chain-transformation" className="text-secondary font-medium flex items-center">
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

        {/* Methodology Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Consulting Approach</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Discover</h3>
                <p className="text-gray-700 text-center">
                  We begin by understanding your business challenges, goals, and current state through deep analysis and stakeholder engagement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Design</h3>
                <p className="text-gray-700 text-center">
                  Together, we design the future state vision, strategy, and transformation roadmap tailored to your unique needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Deliver</h3>
                <p className="text-gray-700 text-center">
                  We implement the strategy through agile delivery methods, ensuring quick wins while building toward long-term objectives.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Sustain</h3>
                <p className="text-gray-700 text-center">
                  We ensure lasting impact through capability building, change management, and continuous improvement frameworks.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-white p-8 rounded-md shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Our Difference</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">Industry Expertise</h4>
                  <p className="text-gray-700">Our consultants bring deep industry knowledge and functional expertise to every engagement.</p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">Technology Edge</h4>
                  <p className="text-gray-700">We combine strategic thinking with technical expertise to deliver solutions that drive real results.</p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">Human-Centered</h4>
                  <p className="text-gray-700">We put people at the center of transformation, ensuring sustainable change that sticks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to transform your business?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX's consulting services can help you navigate change and unlock new opportunities for growth.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our Consulting Team
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Consulting;
