export interface IStatCard {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const StatCard: React.FC<IStatCard> = ({ value, label, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-white/10 backdrop-blur-sm shadow hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="text-3xl mb-2 text-indigo-300">
        {icon}
      </div>
      <div className="text-2xl font-bold text-white mb-1">
        {value}
      </div>
      <div className="text-lg text-slate-300 text-center font-medium">
        {label}
      </div>
    </div>
  );
};
