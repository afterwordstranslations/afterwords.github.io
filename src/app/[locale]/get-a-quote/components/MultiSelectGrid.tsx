"use client";

export function MultiSelectGrid({
  options,
  selected,
  onToggle,
}: {
  options: readonly string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <button
            key={option}
            onClick={() => onToggle(option)}
            className={`relative p-4 rounded-xl border-2 text-left text-sm font-medium transition-all duration-200 cursor-pointer ${
              isSelected
                ? "border-warm bg-warm/10 text-base-content shadow-md shadow-warm/10"
                : "border-base-300 hover:border-warm/40 text-base-content/70 hover:text-base-content"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                  isSelected ? "border-warm" : "border-base-300"
                }`}
              >
                {isSelected && (
                  <div className="w-2.5 h-2.5 rounded-full bg-warm" />
                )}
              </div>
              {option}
            </div>
          </button>
        );
      })}
    </div>
  );
}
