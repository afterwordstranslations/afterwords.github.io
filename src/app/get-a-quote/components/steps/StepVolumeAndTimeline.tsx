"use client";

import {
  VOLUME_PRESETS_TRANSLATION,
  VOLUME_PRESETS_SUBTITLING,
  VOLUME_PRESETS_INTERPRETING,
  TIMELINES,
} from "../../constants";
import { PresetWithCustom } from "../PresetWithCustom";
import type { QuoteAction } from "../../types";

export function StepVolumeAndTimeline({
  volume,
  customVolume,
  timeline,
  services,
  dispatch,
}: {
  volume: string;
  customVolume: string;
  timeline: string;
  services: string[];
  dispatch: React.Dispatch<QuoteAction>;
}) {
  const hasSubtitling = services.includes("Subtitling Services");
  const hasInterpreting = services.includes("Interpreting");
  const hasTranslation =
    services.includes("Certified Translations") ||
    (!hasSubtitling && !hasInterpreting);

  const presets: string[] = [];
  if (hasTranslation) presets.push(...VOLUME_PRESETS_TRANSLATION);
  if (hasSubtitling) presets.push(...VOLUME_PRESETS_SUBTITLING);
  if (hasInterpreting) presets.push(...VOLUME_PRESETS_INTERPRETING);
  const uniquePresets = [...new Set(presets)];

  const placeholder = hasSubtitling
    ? "e.g., 45-minute documentary, 10-episode series"
    : hasInterpreting
      ? "e.g., 3-day conference, 2-hour board meeting"
      : "e.g., 5,000 words, 3 certificates, 120-page manual";

  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-3">
        How much, and when?
      </h2>
      <p className="text-base-content/60 mb-8">
        Pick a range or describe the material, then let us know your timeline.
      </p>

      <PresetWithCustom
        presets={uniquePresets}
        selectedPreset={volume}
        onSelectPreset={(v) => dispatch({ type: "SET_VOLUME", payload: v })}
        customValue={customVolume}
        onCustomChange={(v) =>
          dispatch({ type: "SET_CUSTOM_VOLUME", payload: v })
        }
        placeholder={placeholder}
      />

      {/* Timeline section */}
      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40 mb-4">
          And when do you need it?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TIMELINES.map((option) => {
            const isSelected = timeline === option.value;
            return (
              <button
                key={option.value}
                onClick={() =>
                  dispatch({ type: "SET_TIMELINE", payload: option.value })
                }
                className={`p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-warm bg-warm/10 text-base-content shadow-md shadow-warm/10"
                    : "border-base-300 hover:border-warm/40 text-base-content/70 hover:text-base-content"
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      isSelected ? "border-warm" : "border-base-300"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-warm" />
                    )}
                  </div>
                  <span className="text-sm font-medium">{option.label}</span>
                </div>
                <p className="text-xs text-base-content/40 ml-7">
                  {option.description}
                </p>
                {option.priceHint && (
                  <p className="text-xs font-medium text-amber-500 ml-7 mt-0.5">
                    {option.priceHint}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
