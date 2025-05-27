import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const AboutUs = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SYMENTEX</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              Engineering a smarter, more intuitive world through technology and innovation.
            </p>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Our Story</h2>
                <p className="text-lg mb-4 text-gray-700">
                  SYMENTEX was founded with a vision to transform how businesses operate in the digital age. From our humble beginnings as a small IT consulting firm, we've grown into a global technology leader with over 10,000 associates worldwide.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  For more than 15 years, our entrepreneurial spirit has defined SYMENTEX. We combine deep industry expertise with the latest technologies to help our clients navigate complex challenges and emerge stronger.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Today, we partner with leading businesses across industries—from banking and healthcare to manufacturing and retail—helping them modernize technology, reimagine processes, and transform experiences.
                </p>
                <Button className="btn-symentex mt-4">Learn about our leadership</Button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden shadow-lg h-full">
                  <img
                    src="https://ext.same-assets.com/452092240/2320151587.webp"
                    alt="SYMENTEX team members collaborating"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Our Core Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Innovation</h3>
                <p className="text-gray-700">
                  We embrace change and continuously seek new ideas and approaches to solve complex problems. Innovation is at the heart of everything we do.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Collaboration</h3>
                <p className="text-gray-700">
                  We believe in the power of teamwork and diverse perspectives. By working together across disciplines and geographies, we deliver exceptional results.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-md">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Integrity</h3>
                <p className="text-gray-700">
                  We act with honesty, transparency, and ethical conduct in all our interactions. Trust is the foundation of our relationships with clients and colleagues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Our Global Presence</h2>
                <p className="text-lg mb-4 text-gray-700">
                  SYMENTEX operates in over 30 countries across North America, Europe, Asia Pacific, and emerging markets. Our global reach allows us to serve clients wherever they do business.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  With innovation hubs in major technology centers and delivery excellence centers strategically located around the world, we combine global capabilities with local insights.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>15+ Global Innovation Centers</li>
                  <li>50+ Delivery Excellence Centers</li>
                  <li>10,000+ Associates Worldwide</li>
                  <li>30+ Countries</li>
                </ul>
              </div>

              <div className="md:w-1/2">
                <div className="bg-gray-100 p-6 rounded-md">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">35+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">10k+</div>
                      <div className="text-sm text-gray-600">Associates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">500+</div>
                      <div className="text-sm text-gray-600">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">15+</div>
                      <div className="text-sm text-gray-600">Years of Innovation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <div className="text-sm text-gray-600">Tech Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-gray-600">Global Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-semibold mb-6">Meet our Leadership Team</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Our diverse and experienced leadership team drives our vision forward, combining industry expertise with a passion for innovation.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              View Leadership Team
            </Button>
          </div>
        </section>

        {/* Corporate Responsibility Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Corporate Responsibility</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col h-full">
                <div className="rounded-t-md overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/3484517224.webp"
                    alt="Sustainability initiatives"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Sustainability</h3>
                  <p className="text-gray-700 mb-4">
                    We're committed to environmental stewardship and have pledged to achieve net-zero emissions by 2040. Our initiatives include reducing our carbon footprint, minimizing waste, and promoting renewable energy.
                  </p>
                  <a href="/sustainability" className="link-with-arrow">Learn about our environmental initiatives</a>
                </div>
              </div>

              <div className="flex flex-col h-full">
                <div className="rounded-t-md overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/3654875937.webp"
                    alt="Diversity and inclusion"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 flex-grow rounded-b-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Diversity & Inclusion</h3>
                  <p className="text-gray-700 mb-4">
                    We believe diversity drives innovation. We're fostering an inclusive workplace where everyone feels valued and empowered to contribute. Our employee resource groups and mentorship programs support diversity at all levels.
                  </p>
                  <a href="/diversity" className="link-with-arrow">Explore our diversity programs</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
