import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import CloudServices from './pages/CloudServices';
import Careers from './pages/Careers';
import Insights from './pages/Insights';
import ContactUs from './pages/ContactUs';

// Industry pages
import Banking from './pages/industries/Banking';
import Healthcare from './pages/industries/Healthcare';
import Manufacturing from './pages/industries/Manufacturing';
import Insurance from './pages/industries/Insurance';
import Retail from './pages/industries/Retail';
import Technology from './pages/industries/Technology';
import Automotive from './pages/industries/Automotive';
import BlueEconomy from './pages/industries/BlueEconomy';
import CapitalMarkets from './pages/industries/CapitalMarkets';
import CommunicationsMedia from './pages/industries/CommunicationsMedia';
import ConsumerGoods from './pages/industries/ConsumerGoods';
import Education from './pages/industries/Education';
import InformationServices from './pages/industries/InformationServices';
import LifeSciences from './pages/industries/LifeSciences';
import OilGas from './pages/industries/OilGas';

// Service pages
import DigitalEngineering from './pages/services/DigitalEngineering';
import AIAnalytics from './pages/services/AIAnalytics';
import Consulting from './pages/services/Consulting';
import BusinessProcess from './pages/services/BusinessProcess';
import ApplicationServices from './pages/services/ApplicationServices';
import Automation from './pages/services/Automation';
import Cybersecurity from './pages/services/Cybersecurity';
import EngineeringResearch from './pages/services/EngineeringResearch';
import EnterprisePlatforms from './pages/services/EnterprisePlatforms';
import Experience from './pages/services/Experience';
import InternetOfThings from './pages/services/InternetOfThings';
import QualityEngineering from './pages/services/QualityEngineering';

// Insights pages
import Featured from './pages/insights/Featured';
import Blog from './pages/insights/Blog';
import Themes from './pages/insights/Themes';
import Research from './pages/insights/Research';
import Explore from './pages/insights/Explore';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <main className="flex-grow">
                  <MainContent />
                </main>
                <Footer />
              </>
            }
          />

          {/* About pages */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Service pages */}
          <Route path="/services/application-services" element={<ApplicationServices />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/business-process" element={<BusinessProcess />} />
          <Route path="/services/cloud" element={<CloudServices />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/ai-analytics" element={<AIAnalytics />} />
          <Route path="/services/digital-engineering" element={<DigitalEngineering />} />
          <Route path="/services/engineering-research" element={<EngineeringResearch />} />
          <Route path="/services/enterprise-platforms" element={<EnterprisePlatforms />} />
          <Route path="/services/experience" element={<Experience />} />
          <Route path="/services/internet-of-things" element={<InternetOfThings />} />
          <Route path="/services/quality-engineering" element={<QualityEngineering />} />

          {/* Industry pages */}
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/banking" element={<Banking />} />
          <Route path="/industries/blue-economy" element={<BlueEconomy />} />
          <Route path="/industries/capital-markets" element={<CapitalMarkets />} />
          <Route path="/industries/communications-media" element={<CommunicationsMedia />} />
          <Route path="/industries/consumer-goods" element={<ConsumerGoods />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/information-services" element={<InformationServices />} />
          <Route path="/industries/insurance" element={<Insurance />} />
          <Route path="/industries/life-sciences" element={<LifeSciences />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/oil-gas" element={<OilGas />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/technology" element={<Technology />} />

          {/* Insights pages */}
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/featured" element={<Featured />} />
          <Route path="/insights/blog" element={<Blog />} />
          <Route path="/insights/themes" element={<Themes />} />
          <Route path="/insights/research" element={<Research />} />
          <Route path="/insights/explore" element={<Explore />} />

          {/* Other pages */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
