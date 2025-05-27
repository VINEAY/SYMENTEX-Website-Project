import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const Themes = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Themes</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Explore our strategic perspectives on the key technology trends that are shaping business and society today.
              </p>
            </div>
          </div>
        </section>

        {/* Current Key Themes */}
        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary">Current Key Themes</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-4xl">
              Our research themes represent the most significant technology and business trends that we believe will shape the future. These themes are regularly updated based on our ongoing research and client engagements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Theme 1 */}
              <div className="flex flex-col h-full bg-white rounded-md overflow-hidden shadow-lg">
                <div className="h-48 relative">
                  <img
                    src="https://ext.same-assets.com/452092240/generative-ai.webp"
                    alt="Generative AI"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end p-6">
                    <h3 className="text-xl font-semibold text-white">Generative AI</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700 mb-6">
                    Exploring how generative AI is transforming business operations, customer experiences, and creative workflows, and how organizations can implement these technologies responsibly and effectively.
                  </p>
                  <div className="mt-auto">
                    <span className="text-sm font-medium text-primary">10 insights</span>
                    <div className="mt-4 flex space-x-2">
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">Enterprise adoption</span>
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">Ethics</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-100">
                  <a href="/insights/themes/generative-ai" className="font-medium text-secondary flex items-center">
                    Explore this theme
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Theme 2 */}
              <div className="flex flex-col h-full bg-white rounded-md overflow-hidden shadow-lg">
                <div className="h-48 relative">
                  <img
                    src="https://ext.same-assets.com/452092240/sustainable-tech.webp"
                    alt="Sustainable Technology"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end p-6">
                    <h3 className="text-xl font-semibold text-white">Sustainable Technology</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700 mb-6">
                    Examining how organizations are leveraging technology to reduce environmental impact, improve resource efficiency, and achieve sustainability goals while driving business value.
                  </p>
                  <div className="mt-auto">
                    <span className="text-sm font-medium text-primary">8 insights</span>
                    <div className="mt-4 flex space-x-2">
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">ESG</span>
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">Green IT</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-100">
                  <a href="/insights/themes/sustainable-technology" className="font-medium text-secondary flex items-center">
                    Explore this theme
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Theme 3 */}
              <div className="flex flex-col h-full bg-white rounded-md overflow-hidden shadow-lg">
                <div className="h-48 relative">
                  <img
                    src="https://ext.same-assets.com/452092240/digital-workforce.webp"
                    alt="Future of Work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end p-6">
                    <h3 className="text-xl font-semibold text-white">Future of Work</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700 mb-6">
                    Analyzing how hybrid work models, digital collaboration tools, and workplace automation are transforming organizational structures, talent strategies, and employee experiences.
                  </p>
                  <div className="mt-auto">
                    <span className="text-sm font-medium text-primary">12 insights</span>
                    <div className="mt-4 flex space-x-2">
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">Hybrid work</span>
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">Digital talent</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-100">
                  <a href="/insights/themes/future-of-work" className="font-medium text-secondary flex items-center">
                    Explore this theme
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Themes Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary">More Themes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Theme Row 1 */}
              <div className="flex items-center gap-6 bg-white p-6 rounded-md shadow-md">
                <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src="https://ext.same-assets.com/452092240/metaverse.webp"
                    alt="Metaverse & Web3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Metaverse & Web3</h3>
                  <p className="text-gray-700 mb-3">
                    Exploring the business applications of immersive technologies, decentralized ecosystems, and digital assets.
                  </p>
                  <a href="/insights/themes/metaverse-web3" className="font-medium text-secondary flex items-center text-sm">
                    View insights
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-white p-6 rounded-md shadow-md">
                <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src="https://ext.same-assets.com/452092240/security-resilience.webp"
                    alt="Security & Resilience"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Security & Resilience</h3>
                  <p className="text-gray-700 mb-3">
                    Examining modern cybersecurity approaches, zero trust architectures, and business continuity strategies.
                  </p>
                  <a href="/insights/themes/security-resilience" className="font-medium text-secondary flex items-center text-sm">
                    View insights
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Theme Row 2 */}
              <div className="flex items-center gap-6 bg-white p-6 rounded-md shadow-md">
                <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src="https://ext.same-assets.com/452092240/cloud-native.webp"
                    alt="Cloud-Native Transformation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Cloud-Native Transformation</h3>
                  <p className="text-gray-700 mb-3">
                    Strategies for building scalable, resilient applications and architectures in the cloud.
                  </p>
                  <a href="/insights/themes/cloud-native" className="font-medium text-secondary flex items-center text-sm">
                    View insights
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-white p-6 rounded-md shadow-md">
                <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src="https://ext.same-assets.com/452092240/data-strategy.webp"
                    alt="Data as Strategic Asset"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Data as Strategic Asset</h3>
                  <p className="text-gray-700 mb-3">
                    Approaches to data governance, monetization, and ethical use in the data-driven economy.
                  </p>
                  <a href="/insights/themes/data-strategy" className="font-medium text-secondary flex items-center text-sm">
                    View insights
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Theme Row 3 */}
              <div className="flex items-center gap-6 bg-white p-6 rounded-md shadow-md">
                <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src="https://ext.same-assets.com/452092240/customer-experience.webp"
                    alt="Next-Gen Customer Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Next-Gen Customer Experience</h3>
                  <p className="text-gray-700 mb-3">
                    Innovations in personalization, omnichannel engagement, and AI-powered customer interactions.
                  </p>
                  <a href="/insights/themes/customer-experience" className="font-medium text-secondary flex items-center text-sm">
                    View insights
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-white p-6 rounded-md shadow-md">
                <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src="https://ext.same-assets.com/452092240/platform-business.webp"
                    alt="Platform Business Models"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Platform Business Models</h3>
                  <p className="text-gray-700 mb-3">
                    Strategies for building and scaling platforms, ecosystems, and digital marketplaces.
                  </p>
                  <a href="/insights/themes/platform-business" className="font-medium text-secondary flex items-center text-sm">
                    View insights
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Informed Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-semibold mb-4">Stay informed on emerging themes</h2>
                <p className="text-lg">
                  Subscribe to our insights newsletter to receive updates on new research, themes, and strategic perspectives.
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

export default Themes;
