import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import Logo from './Logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top utility bar */}
      <div className="bg-gray-100 py-1 hidden md:block">
        <div className="container-wide flex justify-end space-x-4 text-xs">
          <Link to="/careers" className="text-gray-600 hover:text-primary">Careers</Link>
          <Link to="/news" className="text-gray-600 hover:text-primary">News</Link>
          <Link to="/events" className="text-gray-600 hover:text-primary">Events</Link>
          <Link to="/investors" className="text-gray-600 hover:text-primary">Investors</Link>

          <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-primary">
              US-EN
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-white shadow-lg rounded-sm z-50 hidden group-hover:block">
              <div className="p-2">
                <div className="font-medium text-sm mb-2">Americas</div>
                <ul className="text-xs space-y-1">
                  <li><Link to="/regions/us" className="block hover:text-secondary">United States</Link></li>
                  <li><Link to="/regions/ca" className="block hover:text-secondary">Canada</Link></li>
                  <li><Link to="/regions/mx" className="block hover:text-secondary">Mexico</Link></li>
                </ul>
              </div>
              <div className="p-2 border-t border-gray-100">
                <div className="font-medium text-sm mb-2">Europe</div>
                <ul className="text-xs space-y-1">
                  <li><Link to="/regions/uk" className="block hover:text-secondary">United Kingdom</Link></li>
                  <li><Link to="/regions/fr" className="block hover:text-secondary">France</Link></li>
                  <li><Link to="/regions/de" className="block hover:text-secondary">Germany</Link></li>
                </ul>
              </div>
              <div className="p-2 border-t border-gray-100">
                <div className="font-medium text-sm mb-2">Asia Pacific</div>
                <ul className="text-xs space-y-1">
                  <li><Link to="/regions/in" className="block hover:text-secondary">India</Link></li>
                  <li><Link to="/regions/sg" className="block hover:text-secondary">Singapore</Link></li>
                  <li><Link to="/regions/au" className="block hover:text-secondary">Australia</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <div className="group relative">
              <button className="nav-item group-hover:text-secondary flex items-center">
                Industries
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-80 bg-white shadow-lg rounded-sm z-50 hidden group-hover:block">
                <div className="p-3 grid grid-cols-2 gap-1">
                  <Link to="/industries/automotive" className="block text-sm hover:text-secondary">Automotive</Link>
                  <Link to="/industries/banking" className="block text-sm hover:text-secondary">Banking</Link>
                  <Link to="/industries/blue-economy" className="block text-sm hover:text-secondary">Blue Economy</Link>
                  <Link to="/industries/capital-markets" className="block text-sm hover:text-secondary">Capital Markets</Link>
                  <Link to="/industries/communications-media" className="block text-sm hover:text-secondary">Communications & Media</Link>
                  <Link to="/industries/consumer-goods" className="block text-sm hover:text-secondary">Consumer Goods</Link>
                  <Link to="/industries/education" className="block text-sm hover:text-secondary">Education</Link>
                  <Link to="/industries/healthcare" className="block text-sm hover:text-secondary">Healthcare</Link>
                  <Link to="/industries/information-services" className="block text-sm hover:text-secondary">Information Services</Link>
                  <Link to="/industries/insurance" className="block text-sm hover:text-secondary">Insurance</Link>
                  <Link to="/industries/life-sciences" className="block text-sm hover:text-secondary">Life Sciences</Link>
                  <Link to="/industries/manufacturing" className="block text-sm hover:text-secondary">Manufacturing</Link>
                  <Link to="/industries/oil-gas" className="block text-sm hover:text-secondary">Oil & Gas</Link>
                  <Link to="/industries/retail" className="block text-sm hover:text-secondary">Retail</Link>
                  <Link to="/industries/technology" className="block text-sm hover:text-secondary">Technology</Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="nav-item group-hover:text-secondary flex items-center">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-80 bg-white shadow-lg rounded-sm z-50 hidden group-hover:block">
                <div className="p-3 grid grid-cols-2 gap-1">
                  <Link to="/services/application-services" className="block text-sm hover:text-secondary">Application Services</Link>
                  <Link to="/services/automation" className="block text-sm hover:text-secondary">Automation</Link>
                  <Link to="/services/business-process" className="block text-sm hover:text-secondary">Business Process Services</Link>
                  <Link to="/services/cloud" className="block text-sm hover:text-secondary">Cloud Services</Link>
                  <Link to="/services/consulting" className="block text-sm hover:text-secondary">Consulting</Link>
                  <Link to="/services/cybersecurity" className="block text-sm hover:text-secondary">Cybersecurity</Link>
                  <Link to="/services/ai-analytics" className="block text-sm hover:text-secondary">Data & AI</Link>
                  <Link to="/services/digital-engineering" className="block text-sm hover:text-secondary">Digital Engineering</Link>
                  <Link to="/services/engineering-research" className="block text-sm hover:text-secondary">Engineering Research & Development</Link>
                  <Link to="/services/enterprise-platforms" className="block text-sm hover:text-secondary">Enterprise Platforms</Link>
                  <Link to="/services/experience" className="block text-sm hover:text-secondary">Experience</Link>
                  <Link to="/services/internet-of-things" className="block text-sm hover:text-secondary">Internet of Things</Link>
                  <Link to="/services/quality-engineering" className="block text-sm hover:text-secondary">Quality Engineering & Assurance</Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="nav-item group-hover:text-secondary flex items-center">
                Insights
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-lg rounded-sm z-50 hidden group-hover:block">
                <div className="p-3 grid grid-cols-1 gap-1">
                  <Link to="/insights/featured" className="block text-sm hover:text-secondary">Featured</Link>
                  <Link to="/insights/blog" className="block text-sm hover:text-secondary">Blog</Link>
                  <Link to="/insights/themes" className="block text-sm hover:text-secondary">Themes</Link>
                  <Link to="/insights/research" className="block text-sm hover:text-secondary">Research</Link>
                  <Link to="/insights/explore" className="block text-sm hover:text-secondary">Explore</Link>
                  <Link to="/insights/case-studies" className="block text-sm hover:text-secondary">Case Studies</Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="nav-item group-hover:text-secondary flex items-center">
                About
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-lg rounded-sm z-50 hidden group-hover:block">
                <div className="p-3 grid grid-cols-1 gap-1">
                  <Link to="/about-us" className="block text-sm hover:text-secondary">Our Story</Link>
                  <Link to="/about/leadership" className="block text-sm hover:text-secondary">Leadership</Link>
                  <Link to="/about/sustainability" className="block text-sm hover:text-secondary">Sustainability</Link>
                  <Link to="/about/diversity-inclusion" className="block text-sm hover:text-secondary">Diversity & Inclusion</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12"/>
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container-wide py-4">
            <nav className="flex flex-col space-y-4">
              <details className="group">
                <summary className="flex justify-between items-center text-primary font-medium cursor-pointer">
                  Industries
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </summary>
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  <Link to="/industries/automotive" className="text-gray-600 hover:text-secondary">Automotive</Link>
                  <Link to="/industries/banking" className="text-gray-600 hover:text-secondary">Banking</Link>
                  <Link to="/industries/blue-economy" className="text-gray-600 hover:text-secondary">Blue Economy</Link>
                  <Link to="/industries/capital-markets" className="text-gray-600 hover:text-secondary">Capital Markets</Link>
                  <Link to="/industries/communications-media" className="text-gray-600 hover:text-secondary">Communications & Media</Link>
                  <Link to="/industries/consumer-goods" className="text-gray-600 hover:text-secondary">Consumer Goods</Link>
                  <Link to="/industries/education" className="text-gray-600 hover:text-secondary">Education</Link>
                  <Link to="/industries/healthcare" className="text-gray-600 hover:text-secondary">Healthcare</Link>
                  <Link to="/industries/information-services" className="text-gray-600 hover:text-secondary">Information Services</Link>
                  <Link to="/industries/insurance" className="text-gray-600 hover:text-secondary">Insurance</Link>
                  <Link to="/industries/life-sciences" className="text-gray-600 hover:text-secondary">Life Sciences</Link>
                  <Link to="/industries/manufacturing" className="text-gray-600 hover:text-secondary">Manufacturing</Link>
                  <Link to="/industries/oil-gas" className="text-gray-600 hover:text-secondary">Oil & Gas</Link>
                  <Link to="/industries/retail" className="text-gray-600 hover:text-secondary">Retail</Link>
                  <Link to="/industries/technology" className="text-gray-600 hover:text-secondary">Technology</Link>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center text-primary font-medium cursor-pointer">
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </summary>
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  <Link to="/services/application-services" className="text-gray-600 hover:text-secondary">Application Services</Link>
                  <Link to="/services/automation" className="text-gray-600 hover:text-secondary">Automation</Link>
                  <Link to="/services/business-process" className="text-gray-600 hover:text-secondary">Business Process Services</Link>
                  <Link to="/services/cloud" className="text-gray-600 hover:text-secondary">Cloud Services</Link>
                  <Link to="/services/consulting" className="text-gray-600 hover:text-secondary">Consulting</Link>
                  <Link to="/services/cybersecurity" className="text-gray-600 hover:text-secondary">Cybersecurity</Link>
                  <Link to="/services/ai-analytics" className="text-gray-600 hover:text-secondary">Data & AI</Link>
                  <Link to="/services/digital-engineering" className="text-gray-600 hover:text-secondary">Digital Engineering</Link>
                  <Link to="/services/engineering-research" className="text-gray-600 hover:text-secondary">Engineering Research & Development</Link>
                  <Link to="/services/enterprise-platforms" className="text-gray-600 hover:text-secondary">Enterprise Platforms</Link>
                  <Link to="/services/experience" className="text-gray-600 hover:text-secondary">Experience</Link>
                  <Link to="/services/internet-of-things" className="text-gray-600 hover:text-secondary">Internet of Things</Link>
                  <Link to="/services/quality-engineering" className="text-gray-600 hover:text-secondary">Quality Engineering & Assurance</Link>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center text-primary font-medium cursor-pointer">
                  Insights
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </summary>
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  <Link to="/insights/featured" className="text-gray-600 hover:text-secondary">Featured</Link>
                  <Link to="/insights/blog" className="text-gray-600 hover:text-secondary">Blog</Link>
                  <Link to="/insights/themes" className="text-gray-600 hover:text-secondary">Themes</Link>
                  <Link to="/insights/research" className="text-gray-600 hover:text-secondary">Research</Link>
                  <Link to="/insights/explore" className="text-gray-600 hover:text-secondary">Explore</Link>
                  <Link to="/insights/case-studies" className="text-gray-600 hover:text-secondary">Case Studies</Link>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center text-primary font-medium cursor-pointer">
                  About
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </summary>
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  <Link to="/about-us" className="text-gray-600 hover:text-secondary">Our Story</Link>
                  <Link to="/about/leadership" className="text-gray-600 hover:text-secondary">Leadership</Link>
                  <Link to="/about/sustainability" className="text-gray-600 hover:text-secondary">Sustainability</Link>
                  <Link to="/about/diversity-inclusion" className="text-gray-600 hover:text-secondary">Diversity & Inclusion</Link>
                </div>
              </details>

              <Link to="/careers" className="text-primary font-medium">Careers</Link>
              <Link to="/news" className="text-primary font-medium">News</Link>
              <Link to="/events" className="text-primary font-medium">Events</Link>
              <Link to="/investors" className="text-primary font-medium">Investors</Link>

              <div className="pt-2 border-t border-gray-200">
                <Button className="btn-symentex w-full">Contact Us</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
