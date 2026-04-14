"use client";

export function MultiPresetWithCustom({
  presets,
  selected,
  onToggle,
  customValue,
  onCustomChange,
  placeholder,
  multiline,
}: {
  presets: string[];
  selected: string[];
  onToggle: (value: string) => void;
  customValue: string;
  onCustomChange: (value: string) => void;
  placeholder: string;
  multiline?: boolean;
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {presets.map((preset) => {
          const isSelected = selected.includes(preset);
          return (
            <button
              key={preset}
              onClick={() => onToggle(preset)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-warm/15 text-warm border border-warm/30"
                  : "bg-base-200 text-base-content/60 hover:bg-base-300 hover:text-base-content border border-transparent"
              }`}
            >
              {isSelected && <span className="mr-1.5">&#10003;</span>}
              {preset}
            </button>
          );
        })}
      </div>
      {multiline ? (
        <textarea
          value={customValue}
          onChange={(e) => onCustomChange(e.target.value)}
          placeholder={placeholder}
          className="textarea textarea-bordered w-full text-sm min-h-24"
          rows={3}
        />
      ) : (
        <input
          type="text"
          value={customValue}
          onChange={(e) => onCustomChange(e.target.value)}
          placeholder={placeholder}
          className="input input-bordered w-full text-sm"
        />
      )}
    </div>
  );
}
