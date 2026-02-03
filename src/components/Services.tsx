export interface IServiceCard {
  label: string;
  description: React.ReactNode;
}

export const ServiceCard: React.FC<IServiceCard> = ({ description, label }) => {
  return (
    <div className="p-6 rounded bg-card shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-4 text-card-foreground">{label}</h3>
      <div className="text-muted-foreground">{description}</div>
    </div>
  );
};
