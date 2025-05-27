import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const ConsumerGoods = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consumer Goods</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Driving innovation and digital transformation in consumer goods to enhance experience, efficiency, and growth.
            </p>
          </div>
        </section>

        {/* Industry Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Transforming Consumer Goods</h2>
                <p className="text-lg mb-4 text-gray-700">
                  The consumer goods industry is experiencing unprecedented disruption. Changing consumer preferences, direct-to-consumer models, sustainability demands, and digital technologies are reshaping how products are created, marketed, sold, and delivered.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  SYMENTEX partners with leading consumer goods companies across food and beverage, personal care, home goods, and other segments to navigate these challenges and capitalize on new opportunities through digital transformation.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our solutions help consumer goods companies enhance customer experiences, optimize operations, build resilient supply chains, and develop new business models that drive sustainable growth and competitive advantage.
                </p>
                <Button className="btn-symentex mt-4">Explore our consumer goods solutions</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/consumer-goods-innovation.webp"
                    alt="Consumer goods digital innovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Focus Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Consumer Goods Solutions</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Consumer Insights & Experience</h3>
                <p className="text-gray-700">
                  Leverage AI, analytics, and digital platforms to gather deep consumer insights and create personalized, omnichannel experiences that build loyalty and drive growth.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Digital Commerce & Marketing</h3>
                <p className="text-gray-700">
                  Enhance direct-to-consumer capabilities, digital marketing effectiveness, and e-commerce operations with data-driven strategies and advanced digital platforms.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Smart Manufacturing</h3>
                <p className="text-gray-700">
                  Transform production facilities with Industry 4.0 technologies including IoT, AI, and automation to improve quality, efficiency, flexibility, and sustainability.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Supply Chain Resilience</h3>
                <p className="text-gray-700">
                  Build agile, transparent, and sustainable supply chains with digital technologies that enhance visibility, forecasting, planning, logistics, and risk management.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Product Innovation</h3>
                <p className="text-gray-700">
                  Accelerate innovation with digital platforms that enhance product development, enable data-driven decisions, and facilitate collaboration across the ecosystem.
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
                    src="https://ext.same-assets.com/452092240/cpg-digital-transformation.webp"
                    alt="CPG digital transformation"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Digital Transformation for Global CPG</h3>
                  <p className="text-gray-700 mb-4">
                    We partnered with a leading consumer packaged goods company to implement a comprehensive digital transformation program spanning consumer insights, digital marketing, e-commerce, and supply chain operations. The initiative resulted in a 25% increase in digital sales, 30% improvement in marketing ROI, and 15% reduction in supply chain costs.
                  </p>
                  <a href="/case-studies/cpg-transformation" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/food-beverage-supply-chain.webp"
                    alt="Food and beverage supply chain transformation"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Supply Chain Transformation for F&B Leader</h3>
                  <p className="text-gray-700 mb-4">
                    Our team helped a global food and beverage company redesign their supply chain with a digital platform incorporating AI-powered demand forecasting, real-time visibility, and sustainability tracking. The solution reduced inventory by 20%, improved forecast accuracy by 35%, decreased carbon footprint by 15%, and enhanced resilience to disruptions.
                  </p>
                  <a href="/case-studies/food-supply-chain" className="text-secondary font-medium flex items-center">
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

        {/* Industry Insights Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-8 text-primary">Industry Insights</h2>
            <p className="text-lg mb-8 text-gray-700">
              Explore our latest thinking on consumer goods trends, innovations, and strategic imperatives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/direct-to-consumer.webp"
                  alt="Direct-to-consumer strategies"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">The Future of Direct-to-Consumer</h3>
                  <p className="text-gray-700 mb-4">Strategies and technologies for building successful direct-to-consumer channels in the evolving digital landscape.</p>
                  <a href="/insights/d2c-strategies" className="text-secondary font-medium">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/sustainable-consumer-goods.webp"
                  alt="Sustainable consumer goods"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Sustainability in Consumer Goods</h3>
                  <p className="text-gray-700 mb-4">How digital technologies are enabling more sustainable product development, manufacturing, packaging, and supply chains.</p>
                  <a href="/insights/sustainable-consumer-goods" className="text-secondary font-medium">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/ai-consumer-insights.webp"
                  alt="AI-powered consumer insights"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">AI-Powered Consumer Insights</h3>
                  <p className="text-gray-700 mb-4">Leveraging artificial intelligence and analytics to better understand consumers and drive product and marketing decisions.</p>
                  <a href="/insights/ai-consumer-insights" className="text-secondary font-medium">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to transform your consumer goods business?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX can help your organization navigate change and drive sustainable growth in the consumer goods industry.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our Consumer Goods Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConsumerGoods;
