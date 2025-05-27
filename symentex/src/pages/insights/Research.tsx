import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const Research = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Research</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                In-depth analysis and insights on emerging technologies and their impact on business and society.
              </p>
            </div>
          </div>
        </section>

        {/* Research Filters */}
        <section className="py-8 border-b">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full bg-primary text-white">All Research</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Reports</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">White Papers</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Industry Studies</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Surveys</button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search research..."
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full md:w-64"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Research */}
        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary">Featured Research</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Report 1 */}
              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg h-full">
                <div className="bg-primary/5 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-primary/10 text-primary px-3 py-1 text-xs font-medium rounded">
                      Research Report
                    </div>
                    <span className="text-gray-500 text-sm">April 2025</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    The Future of AI: Transforming Business in 2025 and Beyond
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Our comprehensive research on how artificial intelligence is reshaping industries, creating new opportunities, and driving unprecedented business value.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="https://ext.same-assets.com/452092240/author-team.webp"
                        alt="Research Team"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium text-primary">SYMENTEX Research</p>
                        <p className="text-sm text-gray-600">8 contributors</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">45 pages</span>
                  </div>
                </div>
                <div className="p-6 bg-white flex-grow flex flex-col">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Insights</h4>
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Generative AI will create $4.4 trillion in economic value by 2027</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">85% of enterprises plan to increase AI investments in the next 12 months</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Organizations need a comprehensive AI governance framework to manage risks</span>
                    </li>
                  </ul>
                  <Button className="btn-symentex w-full">Download Full Report</Button>
                </div>
              </div>

              {/* Featured Report 2 */}
              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg h-full">
                <div className="bg-primary/5 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-primary/10 text-primary px-3 py-1 text-xs font-medium rounded">
                      White Paper
                    </div>
                    <span className="text-gray-500 text-sm">March 2025</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    Digital Transformation: From Strategy to Execution
                  </h3>
                  <p className="text-gray-700 mb-6">
                    A practical guide to implementing successful digital transformation initiatives, with insights from over 500 global organizations across multiple industries.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="https://ext.same-assets.com/452092240/author-emma.webp"
                        alt="Emma Rodriguez"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium text-primary">Emma Rodriguez</p>
                        <p className="text-sm text-gray-600">Chief Digital Strategist</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">32 pages</span>
                  </div>
                </div>
                <div className="p-6 bg-white flex-grow flex flex-col">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Insights</h4>
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">70% of digital transformations fail due to poor change management</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Successful transformations align technology, people, and processes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Iterative approach with quick wins increases transformation success by 2.5x</span>
                    </li>
                  </ul>
                  <Button className="btn-symentex w-full">Download White Paper</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Research */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary">Recent Research</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Research Item 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      Industry Study
                    </div>
                    <span className="text-gray-500 text-xs">February 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    The Evolution of Cloud-Native Architectures
                  </h3>
                  <p className="text-gray-700 mb-4">
                    An in-depth look at how cloud-native architectures are evolving to meet the demands of modern applications.
                  </p>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">28 pages</span>
                    <span className="text-sm text-gray-500">3,240 downloads</span>
                  </div>
                  <Button className="mt-auto">View Research</Button>
                </div>
              </div>

              {/* Research Item 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      Research Report
                    </div>
                    <span className="text-gray-500 text-xs">February 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Cybersecurity in the Age of Quantum Computing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Exploring the implications of quantum computing on cybersecurity and strategies for quantum-resistant security.
                  </p>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">36 pages</span>
                    <span className="text-sm text-gray-500">5,187 downloads</span>
                  </div>
                  <Button className="mt-auto">View Research</Button>
                </div>
              </div>

              {/* Research Item 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      Survey Report
                    </div>
                    <span className="text-gray-500 text-xs">January 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Sustainability in Tech: The Green IT Revolution
                  </h3>
                  <p className="text-gray-700 mb-4">
                    How technology companies are leading the way in sustainable practices and reducing their environmental footprint.
                  </p>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">24 pages</span>
                    <span className="text-sm text-gray-500">4,456 downloads</span>
                  </div>
                  <Button className="mt-auto">View Research</Button>
                </div>
              </div>

              {/* Research Item 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      White Paper
                    </div>
                    <span className="text-gray-500 text-xs">January 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Edge Computing: The New Frontier of Data Processing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    How edge computing is revolutionizing data processing across industries from manufacturing to healthcare.
                  </p>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">31 pages</span>
                    <span className="text-sm text-gray-500">2,895 downloads</span>
                  </div>
                  <Button className="mt-auto">View Research</Button>
                </div>
              </div>

              {/* Research Item 5 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      Industry Study
                    </div>
                    <span className="text-gray-500 text-xs">December 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Digital Health Transformation: State of the Industry
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A comprehensive review of how digital technologies are revolutionizing healthcare delivery and patient outcomes.
                  </p>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">42 pages</span>
                    <span className="text-sm text-gray-500">6,127 downloads</span>
                  </div>
                  <Button className="mt-auto">View Research</Button>
                </div>
              </div>

              {/* Research Item 6 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      Survey Report
                    </div>
                    <span className="text-gray-500 text-xs">December 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    The State of DevOps: Practices and Challenges
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Results from our annual survey on DevOps adoption, best practices, and obstacles across different industries.
                  </p>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">38 pages</span>
                    <span className="text-sm text-gray-500">5,832 downloads</span>
                  </div>
                  <Button className="mt-auto">View Research</Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button className="btn-symentex">Load more research</Button>
            </div>
          </div>
        </section>

        {/* Research Partners */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-4 text-primary text-center">Our Research Partners</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              We collaborate with leading academic institutions, industry associations, and technology partners to produce cutting-edge research.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <img src="https://ext.same-assets.com/452092240/partner-mit.webp" alt="MIT" className="h-12" />
              </div>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <img src="https://ext.same-assets.com/452092240/partner-stanford.webp" alt="Stanford" className="h-12" />
              </div>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <img src="https://ext.same-assets.com/452092240/partner-ieee.webp" alt="IEEE" className="h-12" />
              </div>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <img src="https://ext.same-assets.com/452092240/partner-wef.webp" alt="World Economic Forum" className="h-12" />
              </div>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <img src="https://ext.same-assets.com/452092240/partner-acm.webp" alt="ACM" className="h-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Research Newsletter */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-semibold mb-4">Stay informed of our latest research</h2>
                <p className="text-lg">
                  Subscribe to our research newsletter to receive early access to our latest reports, studies, and insights.
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

export default Research;
