export interface IStatCard {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const StatCard: React.FC<IStatCard> = ({ value, label, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 bg-card rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <div className="text-3xl mb-2 text-primary">
        {icon}
      </div>
      <div className="text-2xl font-bold text-primary mb-1">
        {value}
      </div>
      <div className="text-lg text-muted-foreground text-center font-medium">
        {label}
      </div>
    </div>
  );
};
