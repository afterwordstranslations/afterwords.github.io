import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

export interface IServiceCard {
  label: string;
  description: React.ReactNode;
  learnMore?: string;
}

export const ServiceCard: React.FC<IServiceCard> = ({ description, label, learnMore = "" }) => {
  const Wrapper = learnMore.length ? Link : Fragment;
  const wrapperProps = learnMore.length ? { href: learnMore, className: "block" } : {}
  return (
    <Wrapper {...wrapperProps}>
      <div className="group p-6 rounded-2xl bg-base-100 border border-base-300 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content wrapper with relative positioning to stay above overlay */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Decorative accent line */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:w-20 transition-all duration-300" />
            {learnMore.length ? (
              <svg
                className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            ) : ""}
          </div>

          <h3 className="text-xl font-bold mb-4 text-base-content group-hover:text-primary transition-colors duration-300">
            {label}
          </h3>
          <div className="text-base-content leading-relaxed flex-1">{description}</div>
          {learnMore.length ? <Link className="link link-primary mt-4" href={learnMore}>Learn more</Link> : ""}
        </div>
      </div></Wrapper>
  );
};
