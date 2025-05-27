import type React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5H35V35H5V5Z" fill="#1d2760" />
        <path d="M10 10L30 10L20 30L10 10Z" fill="#38bace" />
      </svg>
      <span className="ml-2 text-2xl font-bold">
        <span className="text-[#1d2760]">SYM</span>
        <span className="text-[#38bace]">ENTEX</span>
      </span>
    </div>
  );
};

export default Logo;
