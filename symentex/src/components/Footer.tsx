import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container-wide">
        {/* Career CTA */}
        <div className="bg-primary text-white p-10 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Drive your career forward. Fast.</h2>
          <a
            href="/careers"
            className="inline-block mt-2 px-6 py-3 bg-secondary text-white font-medium transition-colors hover:bg-secondary/90"
          >
            Browse job listings
          </a>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Get answers to your questions</h2>
          <p className="text-gray-600 mb-6">Our experts here to help them reimagine ways of working with technology</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization*</label>
              <input
                type="text"
                id="organization"
                className="w-full p-2 border border-gray-300 rounded-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Contact Number*</label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">Region*</label>
              <select
                id="region"
                className="w-full p-2 border border-gray-300 rounded-sm bg-white"
                required
              >
                <option value="">Select...</option>
                <option value="na">North America</option>
                <option value="eu">Europe</option>
                <option value="ap">Asia Pacific</option>
                <option value="la">Latin America</option>
              </select>
            </div>
            <div>
              <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type*</label>
              <select
                id="inquiry"
                className="w-full p-2 border border-gray-300 rounded-sm bg-white"
                required
              >
                <option value="">Select...</option>
                <option value="services">Services</option>
                <option value="careers">Careers</option>
                <option value="partnership">Partnership</option>
                <option value="media">Media</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-2 border border-gray-300 rounded-sm"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <div className="flex items-start mt-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 mr-2"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I would like SYMENTEX to contact me based on the information provided above. I agree to the processing of my personal data as described in the <a href="/privacy" className="text-secondary hover:underline">Privacy Policy</a>.
                </label>
              </div>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="btn-symentex px-8 py-3 mt-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mb-8">
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

        {/* Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
          <div>
            <h3 className="font-bold text-primary mb-3">Industries</h3>
            <ul className="space-y-2">
              <li><a href="/industries/banking" className="text-gray-600 hover:text-secondary">Banking</a></li>
              <li><a href="/industries/healthcare" className="text-gray-600 hover:text-secondary">Healthcare</a></li>
              <li><a href="/industries/insurance" className="text-gray-600 hover:text-secondary">Insurance</a></li>
              <li><a href="/industries/manufacturing" className="text-gray-600 hover:text-secondary">Manufacturing</a></li>
              <li><a href="/industries/retail" className="text-gray-600 hover:text-secondary">Retail</a></li>
              <li><a href="/industries/technology" className="text-gray-600 hover:text-secondary">Technology</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/digital-engineering" className="text-gray-600 hover:text-secondary">Digital Engineering</a></li>
              <li><a href="/services/ai-analytics" className="text-gray-600 hover:text-secondary">AI & Analytics</a></li>
              <li><a href="/services/cloud" className="text-gray-600 hover:text-secondary">Cloud</a></li>
              <li><a href="/services/core-modernization" className="text-gray-600 hover:text-secondary">Core Modernization</a></li>
              <li><a href="/services/iot" className="text-gray-600 hover:text-secondary">IoT</a></li>
              <li><a href="/services/cybersecurity" className="text-gray-600 hover:text-secondary">Cybersecurity</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-3">Insights</h3>
            <ul className="space-y-2">
              <li><a href="/insights/research" className="text-gray-600 hover:text-secondary">Research</a></li>
              <li><a href="/insights/reports" className="text-gray-600 hover:text-secondary">Reports</a></li>
              <li><a href="/insights/case-studies" className="text-gray-600 hover:text-secondary">Case Studies</a></li>
              <li><a href="/insights/blog" className="text-gray-600 hover:text-secondary">Blog</a></li>
              <li><a href="/insights/podcast" className="text-gray-600 hover:text-secondary">Podcast</a></li>
              <li><a href="/insights/world-economic-forum" className="text-gray-600 hover:text-secondary">World Economic Forum</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-3">About SYMENTEX</h3>
            <ul className="space-y-2">
              <li><a href="/about/our-story" className="text-gray-600 hover:text-secondary">Our Story</a></li>
              <li><a href="/about/leadership" className="text-gray-600 hover:text-secondary">Leadership</a></li>
              <li><a href="/about/sustainability" className="text-gray-600 hover:text-secondary">Sustainability</a></li>
              <li><a href="/about/diversity-inclusion" className="text-gray-600 hover:text-secondary">Diversity & Inclusion</a></li>
              <li><a href="/about/corporate-governance" className="text-gray-600 hover:text-secondary">Corporate Governance</a></li>
              <li><a href="/about/investors" className="text-gray-600 hover:text-secondary">Investors</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="border-t border-gray-200 pt-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SYMENTEX. All rights reserved.
          </div>
          <div className="space-x-4">
            <a href="/sitemap" className="hover:text-secondary">Sitemap</a>
            <a href="/terms" className="hover:text-secondary">Terms</a>
            <a href="/privacy" className="hover:text-secondary">Privacy Notice</a>
            <a href="/cookie-notice" className="hover:text-secondary">Cookie Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
