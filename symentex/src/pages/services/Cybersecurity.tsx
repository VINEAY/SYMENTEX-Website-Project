import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const Cybersecurity = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Protect your business with advanced security solutions for the digital age.
            </p>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Safeguard Your Digital Future</h2>
                <p className="text-lg mb-4 text-gray-700">
                  In an increasingly connected world, cybersecurity is not just an IT concern but a fundamental business imperative. As threats evolve in sophistication and scale, organizations need comprehensive protection strategies that secure their digital assets while enabling innovation and growth.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  SYMENTEX's Cybersecurity Services provide end-to-end protection for your entire digital ecosystem. We combine advanced technologies, industry-leading expertise, and proven methodologies to defend against current threats while preparing for emerging vulnerabilities.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our approach to cybersecurity is business-aligned, risk-based, and transformation-focused, helping you build cyber resilience while accelerating your digital journey with confidence.
                </p>
                <Button className="btn-symentex mt-4">Explore our cybersecurity solutions</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/cybersecurity-hero.webp"
                    alt="Advanced cybersecurity operations center with digital security visualizations"
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
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Cybersecurity Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Security Strategy & Governance</h3>
                <p className="text-gray-700">
                  Develop comprehensive cybersecurity strategies, risk management frameworks, and governance models aligned with your business objectives and regulatory requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Cloud Security</h3>
                <p className="text-gray-700">
                  Secure your cloud environments with solutions for identity management, data protection, application security, and cloud infrastructure security across multi-cloud ecosystems.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Identity & Access Management</h3>
                <p className="text-gray-700">
                  Implement robust identity and access management solutions to ensure the right people have the right access to the right resources, with zero-trust security models.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Security Operations Center</h3>
                <p className="text-gray-700">
                  Monitor, detect, investigate, and respond to cybersecurity threats in real-time with our managed security operations center services powered by advanced analytics and automation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Data Protection</h3>
                <p className="text-gray-700">
                  Safeguard sensitive data throughout its lifecycle with encryption, data loss prevention, privacy solutions, and data governance frameworks that maintain compliance.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Security Awareness</h3>
                <p className="text-gray-700">
                  Build a security-conscious culture through comprehensive security awareness programs, phishing simulations, and role-based training for all levels of your organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Cybersecurity Approach</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Assess</h3>
                <p className="text-gray-700 text-center">
                  Evaluate your current security posture, identify vulnerabilities, and understand your risk landscape through comprehensive security assessments.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Transform</h3>
                <p className="text-gray-700 text-center">
                  Develop and implement security strategies and solutions tailored to your specific business needs, risk profile, and compliance requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Manage</h3>
                <p className="text-gray-700 text-center">
                  Continuously monitor, detect, and respond to threats with managed security services that provide 24/7 protection for your digital assets.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-md shadow-md relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-4 text-center">Advance</h3>
                <p className="text-gray-700 text-center">
                  Continuously evolve your security program with cutting-edge technologies and practices that anticipate emerging threats and business needs.
                </p>
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
                    src="https://ext.same-assets.com/452092240/financial-security-transformation.webp"
                    alt="Financial services security transformation"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Global Financial Institution Security Transformation</h3>
                  <p className="text-gray-700 mb-4">
                    We helped a leading global bank transform its cybersecurity program to address the evolving threat landscape while supporting digital innovation. The program encompassed cloud security, identity management, secure DevOps, and a next-generation security operations center, resulting in 60% faster threat detection, 45% reduction in security incidents, and enabling secure launch of new digital services.
                  </p>
                  <a href="/case-studies/financial-security" className="text-secondary font-medium flex items-center">
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
                    src="https://ext.same-assets.com/452092240/healthcare-data-protection.webp"
                    alt="Healthcare data protection"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Healthcare Provider Data Protection Program</h3>
                  <p className="text-gray-700 mb-4">
                    Our team implemented a comprehensive data protection program for a large healthcare network, including encryption, data loss prevention, and access controls across their hybrid IT environment. The solution safeguarded patient data, ensured regulatory compliance, and reduced security risks by 65% while enabling secure data sharing for improved patient care.
                  </p>
                  <a href="/case-studies/healthcare-data-protection" className="text-secondary font-medium flex items-center">
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
            <h2 className="text-3xl font-semibold mb-6">Ready to strengthen your cybersecurity posture?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how SYMENTEX's cybersecurity services can help protect your organization against evolving threats while enabling digital transformation.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Connect with Our Cybersecurity Experts
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cybersecurity;
