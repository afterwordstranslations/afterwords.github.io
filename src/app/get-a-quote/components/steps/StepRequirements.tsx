"use client";

import { REQUIREMENT_PRESETS } from "../../constants";
import { MultiPresetWithCustom } from "../MultiPresetWithCustom";
import type { QuoteAction, ProjectType } from "../../types";

export function StepRequirements({
  specialRequirements,
  customRequirements,
  services,
  projectType,
  dispatch,
}: {
  specialRequirements: string[];
  customRequirements: string;
  services: string[];
  projectType: ProjectType;
  dispatch: React.Dispatch<QuoteAction>;
}) {
  // Build preset list based on selected services × project type
  const typeKey = projectType === "personal" ? "personal" : "business";
  const presets: string[] = [];

  for (const service of services) {
    const servicePresets = REQUIREMENT_PRESETS[service];
    if (servicePresets) {
      presets.push(...servicePresets[typeKey]);
    }
  }

  // If no services selected, show all translation presets as fallback
  if (presets.length === 0) {
    const fallback = REQUIREMENT_PRESETS["Certified Translations"];
    if (fallback) presets.push(...fallback[typeKey]);
  }

  const uniquePresets = [...new Set(presets)];

  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-3">
        Anything we should know?
      </h2>
      <p className="text-base-content/60 mb-8">
        Select common requirements or describe your own below.
      </p>
      <MultiPresetWithCustom
        presets={uniquePresets}
        selected={specialRequirements}
        onToggle={(v) =>
          dispatch({ type: "TOGGLE_SPECIAL_REQUIREMENT", payload: v })
        }
        customValue={customRequirements}
        onCustomChange={(v) =>
          dispatch({ type: "SET_CUSTOM_REQUIREMENTS", payload: v })
        }
        placeholder="e.g., specific terminology glossary, formatting needs, deadlines for individual sections..."
        multiline
      />
    </div>
  );
}
