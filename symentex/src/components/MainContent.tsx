import { Button } from "./ui/button";

const MainContent = () => {
  return (
    <div className="bg-white">
      {/* Intro section */}
      <section className="py-14">
        <div className="container-wide">
          <p className="text-2xl md:text-3xl max-w-3xl font-light leading-normal text-gray-800">
            SYMENTEX helps companies modernize <span className="text-secondary font-medium">technology</span>,
            reimagine <span className="text-secondary font-medium">processes</span> and transform <span className="text-secondary font-medium">experiences</span> so they stay ahead in
            a fast-changing world.
          </p>
        </div>
      </section>

      {/* Featured Innovation Banner */}
      <section className="py-6">
        <div className="container-wide">
          <div className="relative overflow-hidden bg-primary text-white rounded-sm shadow-md">
            <div className="absolute top-0 right-0 bottom-0 w-1/2 lg:w-3/5">
              <img
                src="https://ext.same-assets.com/452092240/4176732882.jpeg"
                alt="Innovation with NVIDIA"
                className="h-full w-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="relative z-10 p-8 md:p-12 max-w-xl bg-primary/80 rounded-r-md">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Innovate beyond limits with NVIDIA and SYMENTEX</h2>
              <p className="text-white mb-6">
                Check out everything our partnership with NVIDIA has to offer—from AI-powered solutions to data-driven success.
              </p>
              <a href="/nvidia-partnership" className="link-with-arrow text-white">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-10">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Case studies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Case Study 1 */}
            <div className="group relative bg-[#573a60] text-white rounded-sm overflow-hidden h-64">
              <img
                src="https://ext.same-assets.com/452092240/678828995.webp"
                alt="Healthcare case study"
                className="absolute inset-0 h-full w-full object-cover object-center mix-blend-overlay opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
              <div className="relative z-10 p-6 flex flex-col h-full">
                <div className="text-xs uppercase tracking-wider bg-secondary/90 text-white inline-block px-2 py-1 mb-2 self-start rounded-sm">Healthcare</div>
                <h3 className="text-lg font-semibold mb-auto text-white">Healthcare organization unlocks technical debt</h3>
                <a href="/case-studies/healthcare" className="link-with-arrow text-white mt-4 self-start">
                  Read more
                </a>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group relative bg-[#255f6e] text-white rounded-sm overflow-hidden h-64">
              <img
                src="https://ext.same-assets.com/452092240/3484517224.webp"
                alt="Finance case study"
                className="absolute inset-0 h-full w-full object-cover object-center mix-blend-overlay opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
              <div className="relative z-10 p-6 flex flex-col h-full">
                <div className="text-xs uppercase tracking-wider bg-secondary/90 text-white inline-block px-2 py-1 mb-2 self-start rounded-sm">Finance</div>
                <h3 className="text-lg font-semibold mb-auto text-white">MedPartners powers business expansion</h3>
                <a href="/case-studies/finance" className="link-with-arrow text-white mt-4 self-start">
                  Read more
                </a>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="group relative bg-[#335066] text-white rounded-sm overflow-hidden h-64">
              <img
                src="https://ext.same-assets.com/452092240/3654875937.webp"
                alt="Healthcare case study"
                className="absolute inset-0 h-full w-full object-cover object-center mix-blend-overlay opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
              <div className="relative z-10 p-6 flex flex-col h-full">
                <div className="text-xs uppercase tracking-wider bg-secondary/90 text-white inline-block px-2 py-1 mb-2 self-start rounded-sm">Healthcare</div>
                <h3 className="text-lg font-semibold mb-auto text-white">Quick call volume response increases patient collections</h3>
                <a href="/case-studies/healthcare-collections" className="link-with-arrow text-white mt-4 self-start">
                  Read more
                </a>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="group relative bg-primary text-white rounded-sm overflow-hidden h-64">
              <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-foreground/30"></div>
              <div className="relative z-10 p-6 flex flex-col h-full">
                <div className="text-xl font-semibold mb-4 text-white">Discover more about our work</div>
                <Button className="btn-symentex mt-auto self-start">
                  See all case studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="bg-primary text-white py-8 my-10">
        <div className="container-wide">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Partnering with World Economic Forum to improve everyday life</h2>
          <p className="text-white mb-4 max-w-3xl">
            We're partnering with WEF to build new paths to address complex global challenges like responsible AI, education and upskilling for tomorrow's workforce and advancing the energy transition.
          </p>
          <a href="/wef-partnership" className="link-with-arrow text-white">
            Discover how thinking
          </a>
        </div>
      </section>

      {/* News Section */}
      <section className="py-10">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News 1 */}
            <div className="border border-gray-200 rounded-sm overflow-hidden transition-shadow hover:shadow-md">
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">
                  Press release | April 25, 2025
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  SYMENTEX Recognized by Assuretor as a Leader in the High-Tech Industry Digital Services 2024-2025 RadarView™
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  SYMENTEX has been recognized in Assuretor's 2024-2025 High-Tech Industry Digital Services RadarView™ as part of the report on tech service providers including from Amazon: AI-part.
                </p>
                <a href="/news/assuretor-recognition" className="link-with-arrow">
                  Know more
                </a>
              </div>
            </div>

            {/* News 2 */}
            <div className="border border-gray-200 rounded-sm overflow-hidden transition-shadow hover:shadow-md">
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">
                  Press release | April 30, 2025
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  SYMENTEX Reports First Quarter 2025 Results
                </h3>
                <p className="text-gray-600 mb-4">
                  Revenue of $5.7 billion increased 7.5% year-over-year or 8.2% in constant currency. Operating margin of 12.7% increased 25 basis points year-over-year. Diluted EPS of $1.25 increased 13.6% year-over-year.
                </p>
                <a href="/news/q1-results-2025" className="link-with-arrow">
                  Know more
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="/news" className="inline-block mt-4 px-8 py-3 border border-primary text-primary font-medium rounded-none hover:bg-primary hover:text-white transition-colors">
              See all SYMENTEX news
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
