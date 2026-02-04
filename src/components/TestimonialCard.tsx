export interface ITestimonialCard {
  quote: string;
  author: string;
  company: string;
  industry?: string;
}

export const TestimonialCard: React.FC<ITestimonialCard> = ({
  quote,
  author,
  company,
  industry,
}) => {
  return (
    <div className="p-8 rounded-lg bg-white/10 backdrop-blur-sm h-full flex flex-col">
      <div>
        <div className="text-4xl text-indigo-300 mb-4">&ldquo;</div>
        <p className="text-lg mb-6 italic text-slate-200">
          {quote}
        </p>
      </div>
      <div className="border-t border-slate-600 pt-4 mt-auto">
        <div className="font-bold text-lg text-white">
          {author}
        </div>
        <div className="text-slate-300">{company}</div>
        {industry && (
          <div className="text-sm text-indigo-300 mt-1">
            {industry}
          </div>
        )}
      </div>
    </div>
  );
};
