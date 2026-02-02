import Emoji from "a11y-react-emoji/lib/Emoji";

export interface ILabeledEmoji {
  emoji: string;
  label: string;
}
const LabeledEmoji: React.FC<ILabeledEmoji> = ({ emoji, label }) => {
  return (
    <div className="flex">
      <div className="flex-none text-4xl"><Emoji symbol={emoji} /></div>
      <div className="flex-1 text-xl ml-2 leading-10 align-bottom">{label}</div>
    </div>
  );
}

export default LabeledEmoji;
