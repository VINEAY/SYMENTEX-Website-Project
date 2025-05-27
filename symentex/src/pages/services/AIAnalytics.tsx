import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const AIAnalytics = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI & Analytics</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Transform your business with advanced artificial intelligence and data analytics solutions.
            </p>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Unlock the Power of Data</h2>
                <p className="text-lg mb-4 text-gray-700">
                  In today's data-driven world, the ability to extract insights and intelligence from your data is a critical competitive advantage. SYMENTEX's AI & Analytics services help you unlock the full potential of your data assets.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  From data strategy and engineering to advanced analytics and AI implementation, we provide end-to-end solutions that drive operational excellence, enhance customer experiences, and accelerate innovation.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our team of data scientists, engineers, and AI specialists combine deep technical expertise with industry knowledge to deliver solutions that create measurable business impact across industries.
                </p>
                <Button className="btn-symentex mt-4">Explore our AI capabilities</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/1854721563.webp"
                    alt="AI and data visualization"
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
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our AI & Analytics Capabilities</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Advanced Analytics</h3>
                <p className="text-gray-700">
                  Transform raw data into actionable insights with descriptive, predictive, and prescriptive analytics that drive informed decision-making across your organization.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Artificial Intelligence</h3>
                <p className="text-gray-700">
                  Build and deploy AI solutions including machine learning, deep learning, computer vision, and natural language processing to automate processes and enhance decision-making.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Data Engineering</h3>
                <p className="text-gray-700">
                  Design and implement modern data architectures, pipelines, and platforms that provide the foundation for advanced analytics and AI initiatives.
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
                <h3 className="text-xl font-semibold mb-4 text-primary">AI-Powered Automation</h3>
                <p className="text-gray-700">
                  Streamline operations and reduce costs by automating routine tasks and complex processes with intelligent automation solutions powered by AI and machine learning.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Intelligent Customer Experiences</h3>
                <p className="text-gray-700">
                  Enhance customer engagement and satisfaction with AI-powered personalization, recommendation engines, chatbots, and intelligent customer service solutions.
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
                    src="https://ext.same-assets.com/452092240/1484517890.webp"
                    alt="Retail AI implementation"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">AI-Powered Retail Personalization</h3>
                  <p className="text-gray-700 mb-4">
                    We implemented a machine learning-based personalization engine for a global retailer, resulting in a 35% increase in conversion rates, 28% higher average order value, and 45% improvement in customer retention.
                  </p>
                  <a href="/case-studies/retail-ai" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/0654875121.webp"
                    alt="Healthcare predictive analytics"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Predictive Analytics for Healthcare</h3>
                  <p className="text-gray-700 mb-4">
                    Our predictive analytics solution helped a major healthcare provider identify high-risk patients with 85% accuracy, leading to proactive interventions that reduced hospital readmissions by 42% and saved millions in healthcare costs.
                  </p>
                  <a href="/case-studies/healthcare-analytics" className="text-secondary font-medium flex items-center">
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

        {/* Approach Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Our Approach to AI & Analytics</h2>
                <p className="text-lg mb-6 text-gray-700">
                  We believe in a strategic, outcome-driven approach to AI and analytics that starts with understanding your business goals and challenges, then developing solutions that create measurable value.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-secondary font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">Discover & Define</h3>
                      <p className="text-gray-700">We begin by understanding your business objectives and identifying high-value opportunities where AI and analytics can create impact.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-secondary font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">Data Foundation</h3>
                      <p className="text-gray-700">We help you build a robust data foundation with the right architecture, governance, and quality controls to support your AI initiatives.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-secondary font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">Design & Develop</h3>
                      <p className="text-gray-700">Our team designs and builds custom AI and analytics solutions using the latest technologies and methodologies, tailored to your specific needs.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-secondary font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">Deploy & Scale</h3>
                      <p className="text-gray-700">We implement solutions in your environment and provide the support needed to scale them across your organization for maximum impact.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg">
                  <img
                    src="https://ext.same-assets.com/452092240/7654875555.webp"
                    alt="AI implementation approach"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to unlock the power of your data?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX's AI & Analytics services can help you drive innovation and business growth.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our AI Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAnalytics;
