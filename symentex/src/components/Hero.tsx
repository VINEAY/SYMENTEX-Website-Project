import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Triangular design using absolute positioning */}
      <div className="absolute right-0 bottom-0 w-full h-full">
        <div
          className="absolute right-0 bottom-0 w-3/4 h-full bg-secondary/30 transform -skew-x-12"
          style={{ transformOrigin: 'bottom right' }}
        />
        <div
          className="absolute right-0 bottom-0 w-1/2 h-full bg-secondary/40 transform -skew-x-12"
          style={{ transformOrigin: 'bottom right' }}
        />
      </div>

      {/* Main hero content */}
      <div className="container-wide relative z-10 flex flex-col md:flex-row items-center py-16 min-h-[400px]">
        <div className="md:w-1/2 text-white space-y-6 bg-primary/50 p-6 rounded-md backdrop-blur-sm">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-4">
              <a href="/services" className="text-xs font-semibold uppercase tracking-wider py-1 border-b border-white hover:border-white transition-colors">
                Multi-agent services
              </a>
              <a href="/innovations" className="text-xs font-semibold uppercase tracking-wider py-1 border-b border-white hover:border-white transition-colors">
                New minds, new markets
              </a>
              <a href="/ai" className="text-xs font-semibold uppercase tracking-wider py-1 border-b border-white hover:border-white transition-colors">
                Age of gen AI
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              SYMENTEX Moment
            </h1>
          </div>

          <p className="text-xl md:text-2xl font-light">
            Intuition engineered—human insight, superhuman speed
          </p>

          <div className="pt-4">
            <Button className="btn-symentex px-6 py-3 text-base">
              Read more
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          {/* Hero image */}
          <div className="relative">
            <img
              src="https://ext.same-assets.com/452092240/3093596075.jpeg"
              alt="Business professional looking at data analytics"
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom news bar */}
      <div className="relative z-10 bg-white py-3 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-xs text-gray-500">
              Press release | April 30, 2025
            </div>
            <div className="flex-1 md:ml-4">
              <h3 className="text-lg font-semibold text-gray-800">
                SYMENTEX reports first quarter 2025 results
              </h3>
            </div>
            <a href="/financial-results" className="link-with-arrow text-sm mt-2 md:mt-0">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
