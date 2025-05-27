import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const Insights = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Explore our latest research, reports, and perspectives on emerging technology trends and business innovations.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary">Featured Insights</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src="https://ext.same-assets.com/452092240/3093596075.jpeg"
                    alt="AI and Machine Learning"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 text-sm font-medium">
                    Research Report
                  </div>
                </div>
                <div className="flex-grow p-6 bg-white">
                  <h3 className="text-2xl font-semibold mb-3 text-primary">The Future of AI: Transforming Business in 2025 and Beyond</h3>
                  <p className="text-gray-600 mb-4">
                    Our comprehensive research on how artificial intelligence is reshaping industries, creating new opportunities, and driving unprecedented business value.
                  </p>
                  <a href="/insights/ai-future" className="link-with-arrow mt-auto">Read the full report</a>
                </div>
              </div>

              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src="https://ext.same-assets.com/452092240/4176732882.jpeg"
                    alt="Digital Transformation"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 text-sm font-medium">
                    White Paper
                  </div>
                </div>
                <div className="flex-grow p-6 bg-white">
                  <h3 className="text-2xl font-semibold mb-3 text-primary">Digital Transformation: From Strategy to Execution</h3>
                  <p className="text-gray-600 mb-4">
                    A practical guide to implementing successful digital transformation initiatives, with insights from over 500 global organizations across multiple industries.
                  </p>
                  <a href="/insights/digital-transformation" className="link-with-arrow mt-auto">Download the white paper</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Research */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-semibold text-primary">Latest Research</h2>
              <a href="/insights/research" className="link-with-arrow">View all research</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <div className="text-secondary font-medium text-sm mb-2">April 2025</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    The Evolution of Cloud-Native Architectures
                  </h3>
                  <p className="text-gray-600 mb-4">
                    An in-depth look at how cloud-native architectures are evolving to meet the demands of modern applications.
                  </p>
                  <a href="/insights/cloud-native" className="link-with-arrow">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <div className="text-secondary font-medium text-sm mb-2">March 2025</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Cybersecurity in the Age of Quantum Computing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Exploring the implications of quantum computing on cybersecurity and strategies for quantum-resistant security.
                  </p>
                  <a href="/insights/quantum-cybersecurity" className="link-with-arrow">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <div className="text-secondary font-medium text-sm mb-2">February 2025</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Sustainability in Tech: The Green IT Revolution
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How technology companies are leading the way in sustainable practices and reducing their environmental footprint.
                  </p>
                  <a href="/insights/green-it" className="link-with-arrow">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container-wide">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-semibold text-primary">Case Studies</h2>
              <a href="/insights/case-studies" className="link-with-arrow">View all case studies</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img
                      src="https://ext.same-assets.com/452092240/678828995.webp"
                      alt="Healthcare case study"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-secondary/10 text-secondary px-2 py-1 text-xs font-medium rounded">
                        Healthcare
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      Leading Hospital Group Transforms Patient Experience with Digital Innovation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      How a network of hospitals improved patient satisfaction by 45% while reducing operational costs through digital transformation.
                    </p>
                    <a href="/case-studies/healthcare-digital" className="link-with-arrow">Read case study</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img
                      src="https://ext.same-assets.com/452092240/3484517224.webp"
                      alt="Banking case study"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-secondary/10 text-secondary px-2 py-1 text-xs font-medium rounded">
                        Banking
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      Global Bank Accelerates Cloud Migration, Achieves 30% Cost Reduction
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A case study on how we helped a major banking institution modernize its infrastructure while ensuring regulatory compliance.
                    </p>
                    <a href="/case-studies/banking-cloud" className="link-with-arrow">Read case study</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-semibold text-primary">From Our Blog</h2>
              <a href="/insights/blog" className="link-with-arrow">Visit our blog</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/452092240/3654875937.webp"
                  alt="AI Ethics blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">April 28, 2025</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    The Ethics of AI: Balancing Innovation with Responsibility
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Exploring the ethical considerations of AI deployment and how organizations can ensure responsible innovation.
                  </p>
                  <a href="/blog/ai-ethics" className="link-with-arrow">Read post</a>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/1701120474/1114676292.webp"
                  alt="Remote work blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">April 21, 2025</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    The Future of Work: Hybrid Models That Drive Productivity
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Insights on how leading companies are implementing hybrid work models that enhance productivity and employee satisfaction.
                  </p>
                  <a href="/blog/future-work" className="link-with-arrow">Read post</a>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/1701120474/3390741273.webp"
                  alt="Blockchain blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">April 14, 2025</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Blockchain Beyond Cryptocurrency: Enterprise Applications
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Practical examples of how blockchain technology is transforming supply chain, healthcare, and financial services.
                  </p>
                  <a href="/blog/blockchain-enterprise" className="link-with-arrow">Read post</a>
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

export default Insights;
