export interface IServiceCard {
  label: string;
  description: React.ReactNode;
}

export const ServiceCard: React.FC<IServiceCard> = ({ description, label }) => {
  return (
    <div className="group p-6 rounded-2xl bg-base-100 border border-base-300 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content wrapper with relative positioning to stay above overlay */}
      <div className="relative z-10">
        {/* Decorative accent line */}
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mb-4 group-hover:w-20 transition-all duration-300" />

        <h3 className="text-xl font-bold mb-4 text-base-content group-hover:text-primary transition-colors duration-300">
          {label}
        </h3>
        <div className="text-base-content leading-relaxed mb-4">{description}</div>
        {/*<a className="link link-primary" href="">Learn more</a>*/}
      </div>
    </div>
  );
};
