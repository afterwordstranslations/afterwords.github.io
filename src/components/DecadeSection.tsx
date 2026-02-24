import Emoji from "a11y-react-emoji";
import { StatCard } from "./StatCard";

export const DecadeSection = () => {
  return (

    <div className="hero-section h-full py-8" style={{ background: 'linear-gradient(to top right, oklch(27% 0.041 260.031), oklch(44% 0.043 257.281), oklch(27% 0.046 192.524))' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <p className="text-xl mb-2 text-slate-300">
            <Emoji symbol="🎉" className="mr-2" />10th Anniversary<Emoji symbol="🥳" className="ml-2" />
          </p>
          <h2 className="text-4xl font-bold mb-8 text-white">
            Our Decade of Excellence
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-white">
            Since 2015 we have been bridging languages and cultures across
            industries with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <StatCard
            value="5000+"
            label="Documents Delivered"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
                <path d="M10 9H8" />
              </svg>
            }
          />
          <StatCard
            value="450+"
            label="Annual Patent Projects"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            }
          />
          <StatCard
            value="9+"
            label="Specialized Industries"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01" />
                <path d="M16 6h.01" />
                <path d="M8 10h8" />
                <path d="M8 14h8" />
                <path d="M8 18h8" />
              </svg>
            }
          />
          <StatCard
            value="99.99%"
            label="Deadline Compliance"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};
