import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const Explore = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Discover our complete collection of insights, organized by topic, industry, and format to help you navigate the future of technology and business.
              </p>
            </div>
          </div>
        </section>

        {/* Explore Topics */}
        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary">Explore by Topic</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">AI & Analytics</h3>
                <p className="text-gray-600 text-sm mb-4">Machine learning, analytics, data science, and AI innovation</p>
                <a href="/insights/topics/ai-analytics" className="text-secondary font-medium text-sm">View insights →</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Cloud Transformation</h3>
                <p className="text-gray-600 text-sm mb-4">Cloud strategy, migration, and modern infrastructure</p>
                <a href="/insights/topics/cloud" className="text-secondary font-medium text-sm">View insights →</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Digital Engineering</h3>
                <p className="text-gray-600 text-sm mb-4">Software engineering, DevOps, and modern development</p>
                <a href="/insights/topics/digital-engineering" className="text-secondary font-medium text-sm">View insights →</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Customer Experience</h3>
                <p className="text-gray-600 text-sm mb-4">CX design, digital experience, and user engagement</p>
                <a href="/insights/topics/customer-experience" className="text-secondary font-medium text-sm">View insights →</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Cybersecurity</h3>
                <p className="text-gray-600 text-sm mb-4">Security strategy, risk management, and compliance</p>
                <a href="/insights/topics/cybersecurity" className="text-secondary font-medium text-sm">View insights →</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Future of Work</h3>
                <p className="text-gray-600 text-sm mb-4">Workplace trends, talent, and organizational innovation</p>
                <a href="/insights/topics/future-of-work" className="text-secondary font-medium text-sm">View insights →</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Sustainability</h3>
                <p className="text-gray-600 text-sm mb-4">ESG initiatives, green IT, and sustainable business</p>
                <a href="/insights/topics/sustainability" className="text-secondary font-medium text-sm">View insights →</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Emerging Tech</h3>
                <p className="text-gray-600 text-sm mb-4">Blockchain, IoT, quantum computing, and more</p>
                <a href="/insights/topics/emerging-tech" className="text-secondary font-medium text-sm">View insights →</a>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button className="btn-symentex">View all topics</Button>
            </div>
          </div>
        </section>

        {/* Explore by Format */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary">Explore by Format</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary/70" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Research Reports</h3>
                  <p className="text-gray-600 mb-5">
                    In-depth analyses with data-backed insights on emerging technology trends and business transformation.
                  </p>
                  <a href="/insights/research" className="btn-symentex inline-block">View Research Reports</a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary/70" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Blog Articles</h3>
                  <p className="text-gray-600 mb-5">
                    Expert perspectives, commentary, and practical insights on technology and business innovation.
                  </p>
                  <a href="/insights/blog" className="btn-symentex inline-block">Read our Blog</a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary/70" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Case Studies</h3>
                  <p className="text-gray-600 mb-5">
                    Real-world examples of successful digital transformation and technology implementation.
                  </p>
                  <a href="/insights/case-studies" className="btn-symentex inline-block">Explore Case Studies</a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-primary/10 flex items-center justify-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary/70" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Webinars & Videos</h3>
                  <p className="text-gray-600 mb-5">
                    On-demand webinars, expert interviews, and video content exploring technology and business topics.
                  </p>
                  <a href="/insights/webinars" className="btn-symentex inline-block">Watch now</a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-primary/10 flex items-center justify-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary/70" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Infographics & Guides</h3>
                  <p className="text-gray-600 mb-5">
                    Visual content and practical guides to help navigate complex technology and business challenges.
                  </p>
                  <a href="/insights/guides" className="btn-symentex inline-block">View guides</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Insights */}
        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary">Trending Insights</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/452092240/3654875937.webp"
                  alt="AI Ethics blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-secondary/10 text-secondary px-2 py-1 text-xs font-medium rounded">
                      Research Report
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    The Ethics of AI: Balancing Innovation with Responsibility
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Exploring the ethical considerations of AI deployment and how organizations can ensure responsible innovation.
                  </p>
                  <a href="/blog/ai-ethics" className="link-with-arrow">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/452092240/ml-operations.webp"
                  alt="MLOps blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-secondary/10 text-secondary px-2 py-1 text-xs font-medium rounded">
                      Case Study
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    MLOps: Bridging the Gap Between Data Science and Production
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Best practices and frameworks for operationalizing machine learning models and creating sustainable AI development pipelines.
                  </p>
                  <a href="/case-studies/mlops" className="link-with-arrow">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ext.same-assets.com/452092240/zero-trust.webp"
                  alt="Zero Trust blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-secondary/10 text-secondary px-2 py-1 text-xs font-medium rounded">
                      White Paper
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Zero Trust Architecture: Security for the Modern Enterprise
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A practical guide to implementing zero trust security principles in today's distributed and cloud-native environments.
                  </p>
                  <a href="/whitepapers/zero-trust" className="link-with-arrow">Read more</a>
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

export default Explore;
