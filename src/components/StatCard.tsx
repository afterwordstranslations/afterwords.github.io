export interface IStatCard {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const StatCard: React.FC<IStatCard> = ({ value, label, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 bg-white dark:bg-slate-700 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <div className="text-3xl mb-2 text-indigo-900 dark:text-indigo-300">
        {icon}
      </div>
      <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-300 mb-1">
        {value}
      </div>
      <div className="text-lg text-gray-600 dark:text-slate-300 text-center font-medium">
        {label}
      </div>
    </div>
  );
};
