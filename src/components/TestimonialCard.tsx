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
    <div className="p-8 rounded-lg bg-gray-100 dark:bg-slate-800 h-full">
      <div className="text-4xl text-indigo-900 dark:text-indigo-300 mb-4">&ldquo;</div>
      <p className="text-lg mb-6 italic text-gray-700 dark:text-slate-300">
        {quote}
      </p>
      <div className="border-t border-gray-300 dark:border-slate-600 pt-4">
        <div className="font-bold text-lg text-gray-900 dark:text-white">
          {author}
        </div>
        <div className="text-gray-600 dark:text-slate-400">{company}</div>
        {industry && (
          <div className="text-sm text-indigo-700 dark:text-indigo-400 mt-1">
            {industry}
          </div>
        )}
      </div>
    </div>
  );
};
