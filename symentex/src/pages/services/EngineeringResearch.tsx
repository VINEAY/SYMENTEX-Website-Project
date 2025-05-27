import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const EngineeringResearch = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Engineering Research & Development</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Transform ideas into innovations with our advanced engineering and R&D capabilities.
            </p>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Accelerate Innovation</h2>
                <p className="text-lg mb-4 text-gray-700">
                  In today's rapidly evolving technology landscape, research and development capabilities are critical differentiators for organizations looking to lead their industries through innovation. SYMENTEX's Engineering Research & Development services help you transform ideas into market-ready products and solutions faster.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our multidisciplinary teams bring together deep expertise across software engineering, hardware design, AI, IoT, and emerging technologies to accelerate your innovation journey from concept to commercialization.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Whether you need to develop next-generation products, enhance existing solutions, or explore cutting-edge technologies, our comprehensive R&D capabilities provide the technical expertise and innovation frameworks to turn your vision into reality.
                </p>
                <Button className="btn-symentex mt-4">Explore our R&D capabilities</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/engineering-research.webp"
                    alt="Advanced engineering research lab with team collaborating on innovations"
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
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Engineering R&D Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Innovation Strategy & Consulting</h3>
                <p className="text-gray-700">
                  Develop comprehensive innovation roadmaps, technology strategies, and R&D frameworks that align with your business objectives and market opportunities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Product Engineering</h3>
                <p className="text-gray-700">
                  Design, develop, and optimize hardware and software products across their entire lifecycle, from concept and prototyping to testing and deployment.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Embedded Systems & IoT</h3>
                <p className="text-gray-700">
                  Create intelligent, connected devices and systems with our expertise in embedded software, firmware development, IoT architectures, and edge computing solutions.
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
                <h3 className="text-xl font-semibold mb-4 text-primary">AI & Machine Learning R&D</h3>
                <p className="text-gray-700">
                  Research, design, and implement cutting-edge AI and machine learning solutions, from algorithm development and model training to deployment and optimization.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Cloud & Edge Computing</h3>
                <p className="text-gray-700">
                  Develop advanced cloud architectures, edge computing solutions, and distributed systems that enable scalable, resilient, and high-performance applications.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Immersive Technologies</h3>
                <p className="text-gray-700">
                  Explore and implement virtual reality, augmented reality, and mixed reality solutions for training, visualization, remote collaboration, and customer experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Labs Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">SYMENTEX Innovation Labs</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img
                  src="https://ext.same-assets.com/452092240/innovation-lab.webp"
                  alt="SYMENTEX Innovation Lab with researchers and engineers collaborating"
                  className="rounded-md shadow-lg w-full"
                />
              </div>

              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Where Breakthrough Ideas Come to Life</h3>
                <p className="text-lg mb-4 text-gray-700">
                  Our global network of Innovation Labs serves as collaborative spaces where our researchers, engineers, and industry experts work together with clients to explore emerging technologies, develop proof-of-concepts, and accelerate innovation.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                  Each lab is equipped with state-of-the-art facilities for hardware prototyping, software development, testing, and experimentation across multiple domains including AI, IoT, cloud, mobile, and immersive technologies.
                </p>
                <p className="text-lg text-gray-700">
                  Through our labs, we provide a structured yet creative environment that fosters rapid ideation, experimentation, and technology transfer to help you turn cutting-edge research into competitive advantages.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-center text-3xl font-bold text-primary mb-2">12+</div>
                    <p className="text-center text-gray-700">Global Innovation Labs</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-center text-3xl font-bold text-primary mb-2">250+</div>
                    <p className="text-center text-gray-700">Research Engineers</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-center text-3xl font-bold text-primary mb-2">75+</div>
                    <p className="text-center text-gray-700">Patents Filed</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-center text-3xl font-bold text-primary mb-2">100+</div>
                    <p className="text-center text-gray-700">Client Innovations</p>
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
                    src="https://ext.same-assets.com/452092240/manufacturing-iot.webp"
                    alt="Smart manufacturing IoT solution"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Smart Manufacturing IoT Platform</h3>
                  <p className="text-gray-700 mb-4">
                    Our team developed an innovative IoT platform for a global manufacturing company that connects thousands of machines across multiple plants. The solution incorporates edge computing, real-time analytics, and predictive maintenance capabilities, resulting in 30% reduction in downtime, 25% improvement in equipment efficiency, and $15M annual savings in maintenance costs.
                  </p>
                  <a href="/case-studies/manufacturing-iot" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/healthcare-ai.webp"
                    alt="AI-powered medical imaging solution"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">AI-Powered Medical Imaging Platform</h3>
                  <p className="text-gray-700 mb-4">
                    We partnered with a leading healthcare provider to research and develop an AI-powered medical imaging platform that assists radiologists in detecting abnormalities. The solution combines advanced deep learning algorithms with cloud-based image processing to analyze medical scans with 96% accuracy, reducing diagnostic time by 50% and improving early detection rates by 35%.
                  </p>
                  <a href="/case-studies/medical-imaging-ai" className="text-secondary font-medium flex items-center">
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
            <h2 className="text-3xl font-semibold mb-6">Ready to accelerate your innovation journey?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX's Engineering Research & Development services can help turn your ideas into market-leading innovations.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our R&D Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EngineeringResearch;
