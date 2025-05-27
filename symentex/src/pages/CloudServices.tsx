import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const CloudServices = () => {
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
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Solutions</h1>
                <p className="text-xl md:text-2xl max-w-2xl font-light mb-8">
                  Transform your business with our comprehensive cloud services and solutions.
                </p>
                <Button className="btn-symentex px-6 py-3 text-base">
                  Talk to our experts
                </Button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
                <img
                  src="https://ext.same-assets.com/452092240/4176732882.jpeg"
                  alt="Cloud technology visualization"
                  className="max-w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Accelerate your Cloud Journey</h2>
                <p className="text-lg mb-4 text-gray-700">
                  Cloud is more than infrastructure—it's a catalyst for business transformation. SYMENTEX's comprehensive cloud solutions help you innovate faster, scale efficiently, and gain competitive advantage.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Whether you're planning your first migration, optimizing existing workloads, or building cloud-native applications, our end-to-end capabilities deliver measurable business outcomes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-secondary font-bold text-lg mb-2">550+</div>
                    <div className="text-gray-700">Cloud Migrations</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-secondary font-bold text-lg mb-2">1000+</div>
                    <div className="text-gray-700">Cloud Experts</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-secondary font-bold text-lg mb-2">200%</div>
                    <div className="text-gray-700">Avg ROI from Migration</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-secondary font-bold text-lg mb-2">30+</div>
                    <div className="text-gray-700">Cloud Partner Awards</div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Featured Client Success Story</h3>
                  <p className="text-gray-700 mb-4">
                    A leading healthcare provider needed to modernize their infrastructure while ensuring regulatory compliance and data security. SYMENTEX designed and implemented a hybrid cloud solution that:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Reduced operational costs by 35%</li>
                    <li>Decreased deployment time from weeks to hours</li>
                    <li>Enhanced data security and compliance</li>
                    <li>Improved application performance by 40%</li>
                  </ul>
                  <a href="/case-studies/healthcare-cloud" className="link-with-arrow">
                    Read the full case study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Cloud Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Cloud Migration</h3>
                <p className="text-gray-700 mb-4">
                  Move your applications, databases, and infrastructure to the cloud safely and efficiently with our proven migration methodology.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Comprehensive assessment and planning
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Minimized downtime and risk
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Automated migration tools
                  </li>
                </ul>
                <a href="/services/cloud/migration" className="link-with-arrow">
                  Learn more
                </a>
              </div>

              <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Cloud Security</h3>
                <p className="text-gray-700 mb-4">
                  Protect your cloud environments with advanced security solutions designed to safeguard data, detect threats, and ensure compliance.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Continuous security monitoring
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Identity and access management
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Compliance automation
                  </li>
                </ul>
                <a href="/services/cloud/security" className="link-with-arrow">
                  Learn more
                </a>
              </div>

              <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Cloud-Native Development</h3>
                <p className="text-gray-700 mb-4">
                  Build modern applications that fully leverage cloud capabilities with our cloud-native development services.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Microservices architecture
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Containerization and orchestration
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    DevOps and CI/CD implementation
                  </li>
                </ul>
                <a href="/services/cloud/cloud-native" className="link-with-arrow">
                  Learn more
                </a>
              </div>

              <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Cloud Optimization</h3>
                <p className="text-gray-700 mb-4">
                  Maximize the value of your cloud investments through continuous optimization of performance, cost, and resource utilization.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cost management and optimization
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Performance monitoring and tuning
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Resource right-sizing
                  </li>
                </ul>
                <a href="/services/cloud/optimization" className="link-with-arrow">
                  Learn more
                </a>
              </div>

              <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Database Modernization</h3>
                <p className="text-gray-700 mb-4">
                  Transform your data platform with our database modernization services, migrating to cloud-native database solutions.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Database assessment and planning
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Schema conversion and data migration
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    NoSQL and distributed database adoption
                  </li>
                </ul>
                <a href="/services/cloud/database-modernization" className="link-with-arrow">
                  Learn more
                </a>
              </div>

              <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Cloud Managed Services</h3>
                <p className="text-gray-700 mb-4">
                  Focus on your core business while we manage your cloud infrastructure with our comprehensive managed services.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 monitoring and support
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Proactive maintenance and updates
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Incident response and resolution
                  </li>
                </ul>
                <a href="/services/cloud/managed-services" className="link-with-arrow">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-8 text-center text-primary">Our Cloud Partners</h2>
            <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-12">
              We collaborate with leading cloud providers to deliver best-in-class solutions tailored to your unique business needs.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-md shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#FF9900] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  <h3 className="font-semibold text-gray-800">AWS</h3>
                  <p className="text-gray-600 text-sm">Advanced Consulting Partner</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-md shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#0078D4] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <h3 className="font-semibold text-gray-800">Microsoft Azure</h3>
                  <p className="text-gray-600 text-sm">Gold Cloud Platform Partner</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-md shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#4285F4] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <h3 className="font-semibold text-gray-800">Google Cloud</h3>
                  <p className="text-gray-600 text-sm">Premier Partner</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-md shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#E61587] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <h3 className="font-semibold text-gray-800">IBM Cloud</h3>
                  <p className="text-gray-600 text-sm">Platinum Business Partner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to accelerate your cloud journey?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let our cloud experts help you build a roadmap to modernization and transformation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
                Schedule a Consultation
              </Button>
              <Button className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                Download Cloud Guide
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CloudServices;
