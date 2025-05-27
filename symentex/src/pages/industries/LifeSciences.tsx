import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const LifeSciences = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Life Sciences</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Accelerating innovation in pharmaceuticals, biotechnology, and medical devices.
            </p>
          </div>
        </section>

        {/* Industry Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Transforming Life Sciences</h2>
                <p className="text-lg mb-4 text-gray-700">
                  The life sciences industry is at a pivotal moment of transformation. Advances in technology, changing patient expectations, and evolving regulatory landscapes are creating both challenges and opportunities for pharmaceutical, biotech, and medical device companies.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  SYMENTEX partners with leading life sciences organizations to accelerate research and development, optimize manufacturing operations, enhance patient engagement, and navigate complex regulatory requirements.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our comprehensive solutions leverage advanced technologies including AI, cloud computing, and data analytics to drive innovation, improve outcomes, and deliver life-changing therapies and devices to patients worldwide.
                </p>
                <Button className="btn-symentex mt-4">Explore our life sciences solutions</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/life-sciences-lab.webp"
                    alt="Life sciences laboratory research"
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
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Life Sciences Solutions</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">R&D Acceleration</h3>
                <p className="text-gray-700">
                  Accelerate drug discovery and development through AI-powered target identification, high-throughput screening platforms, and predictive analytics that reduce time-to-market.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Clinical Trial Optimization</h3>
                <p className="text-gray-700">
                  Enhance clinical trial design, patient recruitment, and data management with digital platforms and analytics that improve trial efficiency and outcomes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Smart Manufacturing</h3>
                <p className="text-gray-700">
                  Transform pharmaceutical and medical device manufacturing with Industry 4.0 technologies, including IoT, digital twins, and advanced analytics for improved quality and efficiency.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Regulatory Compliance & Safety</h3>
                <p className="text-gray-700">
                  Ensure compliance with evolving global regulations through digital quality management systems, automated adverse event reporting, and pharmacovigilance solutions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Patient-Centric Engagement</h3>
                <p className="text-gray-700">
                  Create personalized patient experiences through digital health platforms, remote monitoring solutions, and engagement tools that improve adherence and outcomes.
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
                    src="https://ext.same-assets.com/452092240/pharmaceutical-research.webp"
                    alt="AI-powered drug discovery platform"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">AI-Powered Drug Discovery Platform</h3>
                  <p className="text-gray-700 mb-4">
                    We developed an AI-powered drug discovery platform for a leading pharmaceutical company, enabling researchers to identify promising drug candidates 60% faster. The solution combines machine learning, molecular modeling, and vast biomedical databases to predict efficacy and toxicity, significantly accelerating the early stages of drug development.
                  </p>
                  <a href="/case-studies/ai-drug-discovery" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/medical-device-manufacturing.webp"
                    alt="Medical device manufacturing optimization"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Digital Transformation of Medical Device Manufacturing</h3>
                  <p className="text-gray-700 mb-4">
                    Our team implemented a comprehensive digital transformation for a global medical device manufacturer, creating a connected factory ecosystem with IoT sensors, real-time monitoring, and predictive maintenance. The solution reduced production downtime by 35%, improved quality metrics by 28%, and enhanced regulatory compliance with automated documentation.
                  </p>
                  <a href="/case-studies/medical-device-digital" className="text-secondary font-medium flex items-center">
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
              Explore our latest thinking on life sciences trends and innovations shaping the future of healthcare.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/genomics-trends.webp"
                  alt="Genomics and precision medicine"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">The Genomics Revolution in Healthcare</h3>
                  <p className="text-gray-700 mb-4">How advances in genomic sequencing and analysis are enabling precision medicine and personalized therapies.</p>
                  <a href="/insights/genomics-revolution" className="text-secondary font-medium">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/digital-clinical-trials.webp"
                  alt="Digital clinical trials"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Reinventing Clinical Trials for the Digital Age</h3>
                  <p className="text-gray-700 mb-4">Exploring how decentralized trials, digital biomarkers, and real-world evidence are transforming drug development.</p>
                  <a href="/insights/digital-clinical-trials" className="text-secondary font-medium">Read more</a>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src="https://ext.same-assets.com/452092240/ai-drug-discovery.webp"
                  alt="AI in drug discovery"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">AI's Transformative Impact on Drug Discovery</h3>
                  <p className="text-gray-700 mb-4">How artificial intelligence is accelerating the identification and development of novel therapeutics.</p>
                  <a href="/insights/ai-drug-discovery" className="text-secondary font-medium">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to transform your life sciences organization?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX can help you innovate, optimize operations, and improve patient outcomes.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our Life Sciences Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LifeSciences;
