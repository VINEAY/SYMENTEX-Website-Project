import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const ContactUs = () => {
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
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl md:text-2xl font-light">
                Have questions or need more information? Our team is here to help you find the right solutions for your business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-semibold mb-8 text-primary">Get in Touch</h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name*
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title*
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country/Region*
                    </label>
                    <select
                      id="country"
                      className="w-full p-3 border border-gray-300 rounded-md bg-white"
                      required
                    >
                      <option value="">Select Country/Region</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="IN">India</option>
                      <option value="AU">Australia</option>
                      <option value="SG">Singapore</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                      Inquiry Type*
                    </label>
                    <select
                      id="inquiryType"
                      className="w-full p-3 border border-gray-300 rounded-md bg-white"
                      required
                    >
                      <option value="">Select Inquiry Type</option>
                      <option value="Sales">Sales Inquiry</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="Support">Technical Support</option>
                      <option value="Careers">Careers Information</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    ></textarea>
                  </div>

                  <div className="col-span-2">
                    <div className="flex items-start mb-4">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1 mr-2"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to receive marketing communications from SYMENTEX. I understand I can unsubscribe at any time. View our <a href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</a>.
                      </label>
                    </div>

                    <Button className="btn-symentex px-8 py-3 text-base">
                      Submit
                    </Button>
                  </div>
                </form>
              </div>

              <div className="lg:w-1/3 bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Global Headquarters</h3>
                <address className="not-italic mb-6">
                  <p className="mb-1">SYMENTEX World Headquarters</p>
                  <p className="mb-1">500 Technology Square</p>
                  <p className="mb-1">Boston, MA 02139</p>
                  <p className="mb-1">United States</p>
                  <p className="mt-4">
                    <a href="tel:+18005559999" className="text-secondary hover:underline">+1 (800) 555-9999</a>
                  </p>
                  <p>
                    <a href="mailto:info@symentex.com" className="text-secondary hover:underline">info@symentex.com</a>
                  </p>
                </address>

                <h3 className="text-xl font-semibold mb-4 text-primary mt-8">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" className="text-gray-600 hover:text-primary" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com" className="text-gray-600 hover:text-primary" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a href="https://facebook.com" className="text-gray-600 hover:text-primary" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                    </svg>
                  </a>
                  <a href="https://youtube.com" className="text-gray-600 hover:text-primary" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Locations */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary text-center">Our Global Locations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">North America</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Boston (HQ)</p>
                    <p className="text-gray-600">500 Technology Square</p>
                    <p className="text-gray-600">Boston, MA 02139</p>
                  </li>
                  <li>
                    <p className="font-medium">New York</p>
                    <p className="text-gray-600">5 Madison Avenue</p>
                    <p className="text-gray-600">New York, NY 10010</p>
                  </li>
                  <li>
                    <p className="font-medium">San Francisco</p>
                    <p className="text-gray-600">100 California Street</p>
                    <p className="text-gray-600">San Francisco, CA 94111</p>
                  </li>
                  <li>
                    <p className="font-medium">Toronto</p>
                    <p className="text-gray-600">200 Bay Street</p>
                    <p className="text-gray-600">Toronto, ON M5J 2J2</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">Europe</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">London</p>
                    <p className="text-gray-600">1 Canada Square</p>
                    <p className="text-gray-600">London E14 5AB</p>
                  </li>
                  <li>
                    <p className="font-medium">Paris</p>
                    <p className="text-gray-600">1 Avenue des Champs-Élysées</p>
                    <p className="text-gray-600">75008 Paris</p>
                  </li>
                  <li>
                    <p className="font-medium">Berlin</p>
                    <p className="text-gray-600">Potsdamer Platz 10</p>
                    <p className="text-gray-600">Berlin 10785</p>
                  </li>
                  <li>
                    <p className="font-medium">Amsterdam</p>
                    <p className="text-gray-600">Gustav Mahlerlaan 10</p>
                    <p className="text-gray-600">1082 PP Amsterdam</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">Asia Pacific</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Singapore</p>
                    <p className="text-gray-600">1 Raffles Place</p>
                    <p className="text-gray-600">Singapore 048616</p>
                  </li>
                  <li>
                    <p className="font-medium">Tokyo</p>
                    <p className="text-gray-600">Tokyo Midtown Tower</p>
                    <p className="text-gray-600">Minato-ku, Tokyo 107-6237</p>
                  </li>
                  <li>
                    <p className="font-medium">Sydney</p>
                    <p className="text-gray-600">1 O'Connell Street</p>
                    <p className="text-gray-600">Sydney NSW 2000</p>
                  </li>
                  <li>
                    <p className="font-medium">Bangalore</p>
                    <p className="text-gray-600">Embassy Golf Links Business Park</p>
                    <p className="text-gray-600">Bangalore 560071</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-semibold mb-10 text-primary text-center">Frequently Asked Questions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-primary">What industries does SYMENTEX serve?</h3>
                <p className="text-gray-700">
                  SYMENTEX serves a wide range of industries including Banking, Healthcare, Manufacturing, Retail, Technology, Insurance, and more. Our solutions are tailored to address the unique challenges and opportunities in each sector.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-primary">How quickly can you deploy solutions?</h3>
                <p className="text-gray-700">
                  Our deployment timelines vary based on the complexity of the solution and your organization's readiness. We offer accelerated implementation frameworks that can deliver value in as little as 4-6 weeks for certain solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-primary">Do you offer support after implementation?</h3>
                <p className="text-gray-700">
                  Yes, we provide comprehensive post-implementation support including 24/7 technical assistance, ongoing maintenance, regular updates, and continuous optimization services to ensure your solution delivers maximum value.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-primary">How do I request a product demo?</h3>
                <p className="text-gray-700">
                  You can request a product demo by completing our contact form above, specifying "Product Demo" in the inquiry type, or by emailing demos@symentex.com with your specific interests and requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
