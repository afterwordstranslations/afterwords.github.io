export interface IServiceCard {
  label: string;
  description: React.ReactNode;
}
export const ServiceCard: React.FC<IServiceCard> = ({ description, label }) => {
  return (
    <div className="p-6 rounded bg-gray-200 dark:bg-slate-800">
      <h3 className="text-xl font-bold mb-4">{label}</h3>
      <>{description}</>
    </div>
  );
};
