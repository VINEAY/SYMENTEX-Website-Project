import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const Blog = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Insights and perspectives from our experts on the latest technology trends, industry innovations, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Filters */}
        <section className="py-8 border-b">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full bg-primary text-white">All</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">AI & Data</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Cloud & DevOps</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Digital Experience</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Technology Strategy</button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full md:w-64"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary">Featured Posts</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg h-full">
                <div className="h-80">
                  <img
                    src="https://ext.same-assets.com/452092240/3654875937.webp"
                    alt="AI Ethics blog"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 bg-white flex-grow flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      AI & Data
                    </div>
                    <span className="text-gray-500 text-sm ml-4">April 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    The Ethics of AI: Balancing Innovation with Responsibility
                  </h3>
                  <p className="text-gray-700 mb-6 flex-grow">
                    Exploring the ethical considerations of AI deployment and how organizations can ensure responsible innovation while driving business value. This comprehensive perspective examines the key ethical challenges, regulatory landscape, and practical governance frameworks for AI ethics.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://ext.same-assets.com/452092240/author-sarah.webp"
                      alt="Sarah Johnson"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-primary">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">Chief AI Ethicist</p>
                    </div>
                  </div>
                  <Button className="btn-symentex mt-6">Read the full article</Button>
                </div>
              </div>

              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg h-full">
                <div className="h-80">
                  <img
                    src="https://ext.same-assets.com/1701120474/1114676292.webp"
                    alt="Remote work blog"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 bg-white flex-grow flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      Technology Strategy
                    </div>
                    <span className="text-gray-500 text-sm ml-4">April 21, 2025</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    The Future of Work: Hybrid Models That Drive Productivity
                  </h3>
                  <p className="text-gray-700 mb-6 flex-grow">
                    Insights on how leading companies are implementing hybrid work models that enhance productivity and employee satisfaction. This article shares evidence-based strategies, technology enablers, and organizational approaches for successful hybrid work implementation.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://ext.same-assets.com/452092240/author-david.webp"
                      alt="David Chen"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-primary">David Chen</p>
                      <p className="text-sm text-gray-600">Workplace Innovation Lead</p>
                    </div>
                  </div>
                  <Button className="btn-symentex mt-6">Read the full article</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary">Recent Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/1701120474/3390741273.webp"
                  alt="Blockchain blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      Cloud & DevOps
                    </div>
                    <span className="text-gray-500 text-xs">April 14, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Blockchain Beyond Cryptocurrency: Enterprise Applications
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Practical examples of how blockchain technology is transforming supply chain, healthcare, and financial services beyond the hype.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://ext.same-assets.com/452092240/author-michael.webp"
                      alt="Michael Wong"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <p className="text-sm text-gray-700">Michael Wong</p>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/452092240/edge-computing.webp"
                  alt="Edge Computing blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      Cloud & DevOps
                    </div>
                    <span className="text-gray-500 text-xs">April 10, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Edge Computing: Processing Data Where It Matters Most
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How edge computing is revolutionizing IoT applications, real-time analytics, and enabling new use cases across industries.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://ext.same-assets.com/452092240/author-rachel.webp"
                      alt="Rachel Torres"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <p className="text-sm text-gray-700">Rachel Torres</p>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/452092240/digital-experience-design.webp"
                  alt="Digital Experience blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      Digital Experience
                    </div>
                    <span className="text-gray-500 text-xs">April 7, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    The Psychology of Digital Experiences: Designing for Human Behavior
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Understanding cognitive biases and behavioral psychology principles to create more intuitive and effective digital experiences.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://ext.same-assets.com/452092240/author-james.webp"
                      alt="James Peterson"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <p className="text-sm text-gray-700">James Peterson</p>
                  </div>
                </div>
              </div>

              {/* Article 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/452092240/ml-operations.webp"
                  alt="MLOps blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      AI & Data
                    </div>
                    <span className="text-gray-500 text-xs">April 3, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    MLOps: Bridging the Gap Between Data Science and Production
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Best practices and frameworks for operationalizing machine learning models and creating sustainable AI development pipelines.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://ext.same-assets.com/452092240/author-lisa.webp"
                      alt="Lisa Kumar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <p className="text-sm text-gray-700">Lisa Kumar</p>
                  </div>
                </div>
              </div>

              {/* Article 5 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/452092240/zero-trust.webp"
                  alt="Zero Trust blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      Technology Strategy
                    </div>
                    <span className="text-gray-500 text-xs">March 30, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Zero Trust Architecture: Security for the Modern Enterprise
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A practical guide to implementing zero trust security principles in today's distributed and cloud-native environments.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://ext.same-assets.com/452092240/author-robert.webp"
                      alt="Robert Jackson"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <p className="text-sm text-gray-700">Robert Jackson</p>
                  </div>
                </div>
              </div>

              {/* Article 6 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/452092240/low-code.webp"
                  alt="Low-Code blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-medium rounded">
                      Digital Experience
                    </div>
                    <span className="text-gray-500 text-xs">March 25, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    The Rise of Low-Code/No-Code: Democratizing Application Development
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How low-code platforms are empowering business users and accelerating digital transformation initiatives across industries.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://ext.same-assets.com/452092240/author-emily.webp"
                      alt="Emily Chen"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <p className="text-sm text-gray-700">Emily Chen</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button className="btn-symentex">Load more articles</Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-semibold mb-4">Subscribe to our blog</h2>
                <p className="text-lg">
                  Get the latest insights and perspectives delivered directly to your inbox. No spam, just valuable content.
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

export default Blog;
