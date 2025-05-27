import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const Featured = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
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
            <div className="md:max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Featured Insights</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Discover our most impactful research, reports, and thought leadership on emerging technology trends and business innovations.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Insights Section */}
        <section className="py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-16">
              {/* Featured Item 1 */}
              <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-lg">
                <div className="lg:w-1/2">
                  <img
                    src="https://ext.same-assets.com/452092240/3093596075.jpeg"
                    alt="AI and Machine Learning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 bg-white">
                  <div className="bg-secondary text-white px-3 py-1 text-sm font-medium inline-block mb-4">
                    Research Report
                  </div>
                  <h2 className="text-3xl font-semibold mb-4 text-primary">The Future of AI: Transforming Business in 2025 and Beyond</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Our comprehensive research on how artificial intelligence is reshaping industries, creating new opportunities, and driving unprecedented business value.
                  </p>
                  <p className="text-gray-600 mb-6">
                    This landmark study draws on insights from over 2,000 organizations globally and examines how AI technologies are transforming business models, enhancing customer experiences, and creating competitive advantages. The report includes detailed case studies, implementation frameworks, and strategic recommendations for business leaders navigating the AI landscape.
                  </p>
                  <Button className="btn-symentex">Download the full report</Button>
                </div>
              </div>

              {/* Featured Item 2 */}
              <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-lg">
                <div className="lg:w-1/2">
                  <img
                    src="https://ext.same-assets.com/452092240/4176732882.jpeg"
                    alt="Digital Transformation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 bg-white">
                  <div className="bg-secondary text-white px-3 py-1 text-sm font-medium inline-block mb-4">
                    White Paper
                  </div>
                  <h2 className="text-3xl font-semibold mb-4 text-primary">Digital Transformation: From Strategy to Execution</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    A practical guide to implementing successful digital transformation initiatives, with insights from over 500 global organizations across multiple industries.
                  </p>
                  <p className="text-gray-600 mb-6">
                    This comprehensive white paper provides a structured approach to digital transformation, addressing key challenges, success factors, and practical steps for execution. It includes a detailed transformation framework, technology evaluation guidelines, and organizational change strategies to help businesses navigate their digital journey effectively.
                  </p>
                  <Button className="btn-symentex">Download the white paper</Button>
                </div>
              </div>

              {/* Featured Item 3 */}
              <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-lg">
                <div className="lg:w-1/2">
                  <img
                    src="https://ext.same-assets.com/452092240/quantum-computing.webp"
                    alt="Quantum Computing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 bg-white">
                  <div className="bg-secondary text-white px-3 py-1 text-sm font-medium inline-block mb-4">
                    Industry Report
                  </div>
                  <h2 className="text-3xl font-semibold mb-4 text-primary">Quantum Computing: Preparing for the Next Computing Revolution</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    An in-depth analysis of quantum computing's potential impact on industries, current state of development, and strategic preparation guidelines for organizations.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our research explores how quantum computing will transform industries from pharmaceuticals to finance, the timeline for practical applications, and how organizations can prepare today. The report includes expert interviews, industry-specific use cases, and a strategic roadmap for quantum readiness.
                  </p>
                  <Button className="btn-symentex">Download the full report</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary">Featured Videos</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative pb-[56.25%]">
                  <img
                    src="https://ext.same-assets.com/452092240/ai-ethics-video.webp"
                    alt="AI Ethics video"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    The Ethics of AI in Business Decision Making
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our CTO discusses the ethical implications of AI in critical business decisions and frameworks for responsible AI governance.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>32:15</span>
                    <span className="mx-2">•</span>
                    <span>April 2025</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative pb-[56.25%]">
                  <img
                    src="https://ext.same-assets.com/452092240/cloud-native-video.webp"
                    alt="Cloud Native Architecture video"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    Cloud-Native Architecture: Building for Scale and Resilience
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A technical overview of modern cloud-native patterns and practices for enterprises seeking to modernize their infrastructure.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>45:22</span>
                    <span className="mx-2">•</span>
                    <span>March 2025</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative pb-[56.25%]">
                  <img
                    src="https://ext.same-assets.com/452092240/blockchain-enterprise-video.webp"
                    alt="Blockchain in Enterprise video"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    Blockchain in Enterprise: Beyond the Hype
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Practical applications of blockchain technology in supply chain, finance, and healthcare with real-world implementation strategies.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>38:45</span>
                    <span className="mx-2">•</span>
                    <span>February 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-semibold mb-4">Stay ahead of emerging trends</h2>
                <p className="text-lg">
                  Subscribe to our newsletter to receive the latest insights, research, and thought leadership delivered to your inbox.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-3 rounded-md flex-grow"
                />
                <Button className="bg-secondary text-white hover:bg-secondary/90 px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Featured;
