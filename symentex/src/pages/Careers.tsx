import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary overflow-hidden">
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

          <div className="container-wide relative z-10 flex flex-col md:flex-row items-center py-16">
            <div className="md:w-1/2 text-white space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Welcome to careers at SYMENTEX
              </h1>
              <p className="text-xl font-light max-w-md">
                Where you're empowered to combine your passions with our reach to engineer a smarter, more connected world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="bg-secondary text-white hover:bg-secondary/90 px-6 py-3">
                  View job openings
                </Button>
                <Button className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3">
                  Join talent community
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0">
              <img
                src="https://ext.same-assets.com/1701120474/2692282049.webp"
                alt="SYMENTEX team members"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 bg-blue-50">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6 text-center text-primary">Our Mission</h2>
              <div className="bg-white p-10 rounded-lg shadow-md">
                <p className="text-xl text-gray-700 leading-relaxed">
                  For more than 15 years, our entrepreneurial spirit has defined SYMENTEX.
                  <br /><br />
                  When we're not advising our clients on the next groundbreaking solution, we're improving lives by <span className="text-secondary font-medium">volunteering</span> in our communities, <span className="text-secondary font-medium">fostering inclusion</span> through our affinity groups and so much more. We don't just dream of a better way—we make it happen!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10">
              <h2 className="text-3xl font-semibold text-primary">SYMENTEX careers blog</h2>
              <a href="/blog" className="link-with-arrow">View all blogs</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02]">
                <img
                  src="https://ext.same-assets.com/1701120474/1114676292.webp"
                  alt="Training and development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 bg-white">
                  <div className="text-gray-500 text-sm mb-2">Monday, April 28, 2025</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">150 trainings and counting: Meet super learner Arjun</h3>
                  <p className="text-gray-700 mb-4">
                    Arjun shares his passion for learning and how it has been a game-changer for his career growth at SYMENTEX.
                  </p>
                  <a href="/blog/learning-growth" className="link-with-arrow">Read more</a>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02]">
                <img
                  src="https://ext.same-assets.com/1701120474/2812591835.webp"
                  alt="Career restart"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 bg-white">
                  <div className="text-gray-500 text-sm mb-2">Monday, April 21, 2025</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">How I relaunched my career to new heights</h3>
                  <p className="text-gray-700 mb-4">
                    Samira shares how she successfully relaunched her career after an extended break through our Returnship Program.
                  </p>
                  <a href="/blog/returnship-program" className="link-with-arrow">Read more</a>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02]">
                <img
                  src="https://ext.same-assets.com/1701120474/3390741273.webp"
                  alt="Leadership journey"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 bg-white">
                  <div className="text-gray-500 text-sm mb-2">Monday, April 14, 2025</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Becoming a career role model: Vidya's inspiring journey</h3>
                  <p className="text-gray-700 mb-4">
                    Vidya shares her secret sauce to becoming a career role model and offers advice to those starting their career.
                  </p>
                  <a href="/blog/career-growth" className="link-with-arrow">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <div className="rounded-t-lg overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/1701120474/631124031.webp"
                    alt="Inclusive workplace"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-8 flex-grow rounded-b-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">A community where everyone can thrive</h3>
                  <p className="text-gray-700 mb-6">
                    We're focused on building an inclusive environment where everyone feels welcomed, heard and celebrated. Our diverse perspectives drive innovation and better outcomes for our clients.
                  </p>
                  <a href="/culture" className="btn-symentex inline-block">See our culture in action</a>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="rounded-t-lg overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/452092240/3654875937.webp"
                    alt="Career development"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-white p-8 flex-grow rounded-b-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Be in the driver's seat of your journey</h3>
                  <p className="text-gray-700 mb-6">
                    When it comes to your career, you know what's best for you. Here, you're empowered to chart your own course with us—aligned with your career and life goals.
                  </p>
                  <a href="/learning-development" className="btn-symentex inline-block">Explore our L&D programs</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Where are you in your career journey?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Students & Emerging Talent</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  Chances are you're not looking for business as usual. Neither are we. Start your career with our team that cares about you—and your success.
                </p>
                <a href="/careers/students" className="link-with-arrow mt-auto">Learn more</a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Professionals</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  A great workplace thrives on ideas and opportunities. You'll find both at SYMENTEX. Take initiative, bring your entrepreneurial thinking and grow your career.
                </p>
                <a href="/careers/professionals" className="link-with-arrow mt-auto">Learn more</a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Alumni</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  Want to make your way back to SYMENTEX? We welcome you with impactful work and a breadth of career options to take you where you want to go!
                </p>
                <a href="/careers/alumni" className="link-with-arrow mt-auto">Learn more</a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Returnship</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  We believe a pause in your career to pursue other important life callings can only help you emerge stronger with a renewed sense of purpose. Transition back with our Returnship Program.
                </p>
                <a href="/careers/returnship" className="link-with-arrow mt-auto">Learn more</a>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-8 text-primary">Latest job openings</h2>
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="flex flex-col p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">Senior Frontend Developer</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      New York, NY
                      <span className="mx-2">•</span>
                      <span>Digital Engineering</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Join our engineering team to build innovative web applications using React, Next.js, and other modern frontend technologies.
                    </p>
                    <a href="/jobs/senior-frontend-developer" className="link-with-arrow mt-auto">View details</a>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="flex flex-col p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">Cloud Solutions Architect</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      San Francisco, CA
                      <span className="mx-2">•</span>
                      <span>Cloud Services</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Design and implement cloud-native solutions, helping clients modernize their infrastructure on AWS, Azure, and GCP.
                    </p>
                    <a href="/jobs/cloud-solutions-architect" className="link-with-arrow mt-auto">View details</a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="flex flex-col p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">Data Scientist</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Boston, MA
                      <span className="mx-2">•</span>
                      <span>AI & Analytics</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Create machine learning models and data analytics solutions that drive business insights and improve decision-making.
                    </p>
                    <a href="/jobs/data-scientist" className="link-with-arrow mt-auto">View details</a>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="flex flex-col p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">UX/UI Designer</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Chicago, IL
                      <span className="mx-2">•</span>
                      <span>Experience Design</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Create intuitive, engaging user experiences and interfaces for web and mobile applications that delight users.
                    </p>
                    <a href="/jobs/ux-ui-designer" className="link-with-arrow mt-auto">View details</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="btn-symentex px-8 py-3">Browse all jobs</Button>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-16">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <img
                  src="https://ext.same-assets.com/1701120474/2177269220.jpeg"
                  alt="Great Place to Work certification"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-semibold mb-6 text-primary">We've been recognized!</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We're proud to be recognized as a Great Place to Work in 20 countries around the world! Representing 85% of our global team, this award is particularly special because it is the only recognition earned based on what our associates had to say about their work experiences. It's a testament to our commitment to fostering a best-in-class culture in every locale!
                </p>
                <a href="/culture/employee-stories" className="link-with-arrow">
                  Our associates share their experience
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Talent Community CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-semibold mb-4">Join our talent community</h2>
                <p className="text-lg">
                  Haven't found the right opportunity yet? Receive the latest updates on job opportunities, recruitment events and company news tailored just for you.
                </p>
              </div>
              <div>
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
                  Sign up
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

export default Careers;
