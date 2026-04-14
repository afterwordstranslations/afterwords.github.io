"use client";

import { useReducer, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { FadeIn } from "~/components/animations/FadeIn";
import {
  SERVICES,
  INDUSTRIES,
  PERSONAL_DOC_TYPES,
  LANGUAGES,
  COMMON_LANGUAGE_PAIRS,
  VOLUME_PRESETS_TRANSLATION,
  VOLUME_PRESETS_SUBTITLING,
  VOLUME_PRESETS_INTERPRETING,
  REQUIREMENT_PRESETS_TRANSLATION,
  REQUIREMENT_PRESETS_SUBTITLING,
  REQUIREMENT_PRESETS_INTERPRETING,
  TIMELINES,
  STEP_LABELS,
  TOTAL_STEPS,
} from "./constants";
import { trackQuoteEvent } from "./analytics";
import type { QuoteState, QuoteAction, LanguagePair } from "./types";

// ─── Reducer ───────────────────────────────────────────────────────────────

const initialState: QuoteState = {
  currentStep: 0,
  services: [],
  projectType: "",
  industries: [],
  personalDocTypes: [],
  languagePairs: [],
  customLanguage: "",
  customContext: "",
  volume: "",
  customVolume: "",
  timeline: "",
  specialRequirements: "",
  customRequirements: "",
};

function quoteReducer(state: QuoteState, action: QuoteAction): QuoteState {
  switch (action.type) {
    case "TOGGLE_SERVICE": {
      const services = state.services.includes(action.payload)
        ? state.services.filter((s) => s !== action.payload)
        : [...state.services, action.payload];
      return { ...state, services };
    }
    case "SET_PROJECT_TYPE":
      return { ...state, projectType: action.payload };
    case "TOGGLE_INDUSTRY": {
      const industries = state.industries.includes(action.payload)
        ? state.industries.filter((i) => i !== action.payload)
        : [...state.industries, action.payload];
      return { ...state, industries };
    }
    case "TOGGLE_PERSONAL_DOC_TYPE": {
      const personalDocTypes = state.personalDocTypes.includes(action.payload)
        ? state.personalDocTypes.filter((d) => d !== action.payload)
        : [...state.personalDocTypes, action.payload];
      return { ...state, personalDocTypes };
    }
    case "SET_CUSTOM_CONTEXT":
      return { ...state, customContext: action.payload };
    case "ADD_LANGUAGE_PAIR":
      return {
        ...state,
        languagePairs: [...state.languagePairs, action.payload],
      };
    case "REMOVE_LANGUAGE_PAIR":
      return {
        ...state,
        languagePairs: state.languagePairs.filter(
          (_, i) => i !== action.payload,
        ),
      };
    case "SET_CUSTOM_LANGUAGE":
      return { ...state, customLanguage: action.payload };
    case "SET_VOLUME":
      return { ...state, volume: action.payload };
    case "SET_CUSTOM_VOLUME":
      return { ...state, customVolume: action.payload };
    case "SET_TIMELINE":
      return { ...state, timeline: action.payload };
    case "SET_SPECIAL_REQUIREMENTS":
      return { ...state, specialRequirements: action.payload };
    case "SET_CUSTOM_REQUIREMENTS":
      return { ...state, customRequirements: action.payload };
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, TOTAL_STEPS - 1),
      };
    case "PREV_STEP":
      return { ...state, currentStep: Math.max(state.currentStep - 1, 0) };
    case "GO_TO_STEP":
      return { ...state, currentStep: action.payload };
    default:
      return state;
  }
}

// ─── Email obfuscation ────────────────────────────────────────────────────

function getEmail(): string {
  const user = ["in", "fo"].join("");
  const domain = ["after", "words"].join("") + "." + ["g", "r"].join("");
  return `${user}@${domain}`;
}

// ─── Message formatting ───────────────────────────────────────────────────

function formatAnswers(state: QuoteState): string {
  const lines: string[] = ["Hi, I'd like to get a quote.\n"];

  if (state.services.length > 0) {
    lines.push(`Services: ${state.services.join(", ")}`);
  }
  if (state.projectType) {
    lines.push(
      `Project type: ${state.projectType === "personal" ? "Personal" : "Business"}`,
    );
  }
  if (state.projectType === "business" && state.industries.length > 0) {
    const industries = state.industries.filter((i) => i !== "Something else");
    if (industries.length > 0) lines.push(`Industry: ${industries.join(", ")}`);
  }
  if (state.projectType === "personal" && state.personalDocTypes.length > 0) {
    const docs = state.personalDocTypes.filter((d) => d !== "Something else");
    if (docs.length > 0) lines.push(`Document types: ${docs.join(", ")}`);
  }
  if (
    state.projectType === "business" &&
    state.industries.includes("Something else") &&
    state.customContext
  ) {
    lines.push(`Industry details: ${state.customContext}`);
  } else if (
    state.projectType === "personal" &&
    state.personalDocTypes.includes("Something else") &&
    state.customContext
  ) {
    lines.push(`Document details: ${state.customContext}`);
  }
  if (state.languagePairs.length > 0) {
    const pairs = state.languagePairs
      .map((p) => `${p.source} → ${p.target}`)
      .join(", ");
    lines.push(`Languages: ${pairs}`);
  }
  if (state.customLanguage) {
    lines.push(`Other language: ${state.customLanguage}`);
  }
  if (state.volume) {
    lines.push(`Volume: ${state.volume}`);
  }
  if (state.customVolume) {
    lines.push(`Volume details: ${state.customVolume}`);
  }
  if (state.timeline) {
    const label = TIMELINES.find((t) => t.value === state.timeline)?.label;
    lines.push(`Timeline: ${label || state.timeline}`);
  }
  if (state.specialRequirements) {
    lines.push(`Requirements: ${state.specialRequirements}`);
  }
  if (state.customRequirements) {
    lines.push(`Additional details: ${state.customRequirements}`);
  }

  return lines.join("\n");
}

// ─── Step animation variants ──────────────────────────────────────────────

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

// ─── Progress Bar ─────────────────────────────────────────────────────────

function ProgressBar({
  currentStep,
  onGoToStep,
}: {
  currentStep: number;
  onGoToStep: (step: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-1.5 mb-10">
      {STEP_LABELS.map((label, i) => {
        const isActive = i === currentStep;
        const isCompleted = i < currentStep;
        return (
          <div key={label} className="flex items-center gap-1 sm:gap-1.5">
            <button
              onClick={() => isCompleted && onGoToStep(i)}
              className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-warm text-slate-900 scale-110 shadow-lg shadow-warm/30"
                  : isCompleted
                    ? "bg-warm/20 text-warm cursor-pointer hover:bg-warm/30"
                    : "bg-base-200 text-base-content/40"
              }`}
              disabled={!isCompleted}
              aria-label={`Step ${i + 1}: ${label}`}
            >
              {isCompleted ? (
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                i + 1
              )}
            </button>
            {i < TOTAL_STEPS - 1 && (
              <div
                className={`hidden sm:block w-3 lg:w-6 h-0.5 transition-colors duration-300 ${
                  i < currentStep ? "bg-warm/40" : "bg-base-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Wizard Navigation ────────────────────────────────────────────────────

function WizardNav({
  currentStep,
  onNext,
  onBack,
  onSkip,
}: {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}) {
  const isFirstStep = currentStep === 0;
  const isReviewStep = currentStep === TOTAL_STEPS - 2;
  const isContactStep = currentStep === TOTAL_STEPS - 1;

  if (isContactStep) return null;

  return (
    <div className="flex items-center justify-between mt-10">
      <button
        onClick={onBack}
        disabled={isFirstStep}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
          isFirstStep
            ? "opacity-0 pointer-events-none"
            : "text-base-content/70 hover:text-base-content hover:bg-base-200 cursor-pointer"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
        Back
      </button>

      <div className="flex items-center gap-3">
        {!isReviewStep && (
          <button
            onClick={onSkip}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-base-content/50 hover:text-base-content/70 transition-colors duration-200 cursor-pointer"
          >
            Skip
          </button>
        )}
        <button
          onClick={onNext}
          className="flex items-center gap-2 bg-warm text-slate-900 font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-warm-dark hover:text-white transition-all duration-300 cursor-pointer shadow-md shadow-warm/20"
        >
          {isReviewStep ? "Choose how to send" : "Next"}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Multi-select card grid ───────────────────────────────────────────────

function MultiSelectGrid({
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
                className={`flex items-center justify-center w-5 h-5 rounded-md border-2 transition-all duration-200 ${
                  isSelected ? "bg-warm border-warm" : "border-base-300"
                }`}
              >
                {isSelected && (
                  <svg
                    className="w-3 h-3 text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
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

// ─── Preset chips with custom text input ──────────────────────────────────

function PresetWithCustom({
  presets,
  selectedPreset,
  onSelectPreset,
  customValue,
  onCustomChange,
  placeholder,
  multiline,
}: {
  presets: readonly string[];
  selectedPreset: string;
  onSelectPreset: (value: string) => void;
  customValue: string;
  onCustomChange: (value: string) => void;
  placeholder: string;
  multiline?: boolean;
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {presets.map((preset) => {
          const isSelected = selectedPreset === preset;
          return (
            <button
              key={preset}
              onClick={() => onSelectPreset(isSelected ? "" : preset)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-warm/15 text-warm border border-warm/30"
                  : "bg-base-200 text-base-content/60 hover:bg-base-300 hover:text-base-content border border-transparent"
              }`}
            >
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

// ─── Multi-select presets with custom text ────────────────────────────────

function MultiPresetWithCustom({
  presets,
  selected,
  onToggle,
  customValue,
  onCustomChange,
  placeholder,
  multiline,
}: {
  presets: readonly string[];
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
              {isSelected && (
                <span className="mr-1.5">&#10003;</span>
              )}
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

// ─── Step Components ──────────────────────────────────────────────────────

function StepServices({
  selected,
  dispatch,
}: {
  selected: string[];
  dispatch: React.Dispatch<QuoteAction>;
}) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3">
        What do you need?
      </h2>
      <p className="text-base-content/60 mb-8">
        Select the services you&apos;re interested in. Choose as many as you
        like.
      </p>
      <MultiSelectGrid
        options={SERVICES}
        selected={selected}
        onToggle={(v) => dispatch({ type: "TOGGLE_SERVICE", payload: v })}
      />
    </div>
  );
}

function StepProjectType({
  projectType,
  dispatch,
}: {
  projectType: string;
  dispatch: React.Dispatch<QuoteAction>;
}) {
  const options = [
    {
      value: "personal" as const,
      label: "Personal",
      description: "Certificates, diplomas, medical records, legal documents",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      value: "business" as const,
      label: "Business",
      description: "Corporate, industry-specific, or commercial projects",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3">
        Is this personal or business?
      </h2>
      <p className="text-base-content/60 mb-8">
        This helps us tailor the next steps to your needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option) => {
          const isSelected = projectType === option.value;
          return (
            <button
              key={option.value}
              onClick={() =>
                dispatch({ type: "SET_PROJECT_TYPE", payload: option.value })
              }
              className={`p-6 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-warm bg-warm/10 shadow-md shadow-warm/10"
                  : "border-base-300 hover:border-warm/40"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                  isSelected
                    ? "bg-warm/20 text-warm"
                    : "bg-base-200 text-base-content/50"
                }`}
              >
                {option.icon}
              </div>
              <h3 className="font-semibold text-base-content mb-1">
                {option.label}
              </h3>
              <p className="text-xs text-base-content/50">
                {option.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepIndustries({
  selected,
  customContext,
  dispatch,
}: {
  selected: string[];
  customContext: string;
  dispatch: React.Dispatch<QuoteAction>;
}) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3">
        What&apos;s your industry?
      </h2>
      <p className="text-base-content/60 mb-8">
        This helps us assign the right specialist to your project.
      </p>
      <MultiSelectGrid
        options={INDUSTRIES}
        selected={selected}
        onToggle={(v) => dispatch({ type: "TOGGLE_INDUSTRY", payload: v })}
      />
      {selected.includes("Something else") && (
        <input
          type="text"
          value={customContext}
          onChange={(e) =>
            dispatch({ type: "SET_CUSTOM_CONTEXT", payload: e.target.value })
          }
          placeholder="Tell us about your industry or field"
          className="input input-bordered w-full text-sm mt-4"
        />
      )}
    </div>
  );
}

function StepPersonalDocTypes({
  selected,
  customContext,
  dispatch,
}: {
  selected: string[];
  customContext: string;
  dispatch: React.Dispatch<QuoteAction>;
}) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3">
        What type of documents?
      </h2>
      <p className="text-base-content/60 mb-8">
        Select all that apply so we can prepare the right process for you.
      </p>
      <MultiSelectGrid
        options={PERSONAL_DOC_TYPES}
        selected={selected}
        onToggle={(v) =>
          dispatch({ type: "TOGGLE_PERSONAL_DOC_TYPE", payload: v })
        }
      />
      {selected.includes("Something else") && (
        <input
          type="text"
          value={customContext}
          onChange={(e) =>
            dispatch({ type: "SET_CUSTOM_CONTEXT", payload: e.target.value })
          }
          placeholder="Describe your document type"
          className="input input-bordered w-full text-sm mt-4"
        />
      )}
    </div>
  );
}

function StepLanguages({
  pairs,
  customLanguage,
  dispatch,
}: {
  pairs: LanguagePair[];
  customLanguage: string;
  dispatch: React.Dispatch<QuoteAction>;
}) {
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const addPair = useCallback(() => {
    if (!source || !target || source === target) return;
    const exists = pairs.some(
      (p) => p.source === source && p.target === target,
    );
    if (exists) return;
    dispatch({ type: "ADD_LANGUAGE_PAIR", payload: { source, target } });
    setSource("");
    setTarget("");
  }, [source, target, pairs, dispatch]);

  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3">
        Which languages?
      </h2>
      <p className="text-base-content/60 mb-6">
        Quick-add a common pair or build your own below.
      </p>

      {/* Common pair presets */}
      <div className="flex flex-wrap gap-2 mb-6">
        {COMMON_LANGUAGE_PAIRS.map((preset) => {
          const exists = pairs.some(
            (p) => p.source === preset.source && p.target === preset.target,
          );
          return (
            <button
              key={`${preset.source}-${preset.target}`}
              onClick={() => {
                if (!exists) {
                  dispatch({
                    type: "ADD_LANGUAGE_PAIR",
                    payload: preset,
                  });
                }
              }}
              disabled={exists}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                exists
                  ? "bg-warm/15 text-warm border border-warm/30"
                  : "bg-base-200 text-base-content/60 hover:bg-base-300 hover:text-base-content border border-transparent"
              }`}
            >
              {exists && <span className="mr-1.5">&#10003;</span>}
              {preset.source} → {preset.target}
            </button>
          );
        })}
      </div>

      {/* Custom pair builder */}
      <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40 mb-3">
        Or add a custom pair
      </p>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="select select-bordered flex-1"
        >
          <option value="">Source language</option>
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <div className="hidden sm:flex items-center text-base-content/30">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>

        <select
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="select select-bordered flex-1"
        >
          <option value="">Target language</option>
          {LANGUAGES.filter((l) => l !== source).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <button
          onClick={addPair}
          disabled={!source || !target || source === target}
          className="btn bg-warm text-slate-900 hover:bg-warm-dark hover:text-white border-none disabled:opacity-40"
        >
          + Add
        </button>
      </div>

      {pairs.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {pairs.map((pair, i) => (
            <div
              key={`${pair.source}-${pair.target}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-warm/10 text-sm font-medium border border-warm/20"
            >
              {pair.source} → {pair.target}
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_LANGUAGE_PAIR", payload: i })
                }
                className="text-base-content/40 hover:text-red-500 transition-colors cursor-pointer"
                aria-label={`Remove ${pair.source} to ${pair.target}`}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <input
        type="text"
        value={customLanguage}
        onChange={(e) =>
          dispatch({ type: "SET_CUSTOM_LANGUAGE", payload: e.target.value })
        }
        placeholder="Need a language not listed? Type it here"
        className="input input-bordered w-full text-sm"
      />
    </div>
  );
}

function StepVolume({
  volume,
  customVolume,
  services,
  dispatch,
}: {
  volume: string;
  customVolume: string;
  services: string[];
  dispatch: React.Dispatch<QuoteAction>;
}) {
  const hasSubtitling = services.includes("Subtitling Services");
  const hasInterpreting = services.includes("Interpreting");
  const hasTranslation =
    services.includes("Certified Translations") ||
    (!hasSubtitling && !hasInterpreting);

  // Combine relevant presets based on selected services
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
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3">
        How much content?
      </h2>
      <p className="text-base-content/60 mb-8">
        Pick a range or describe the material below.
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
    </div>
  );
}

function StepTimeline({
  timeline,
  dispatch,
}: {
  timeline: string;
  dispatch: React.Dispatch<QuoteAction>;
}) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3">
        When do you need it?
      </h2>
      <p className="text-base-content/60 mb-8">
        Tighter deadlines may affect the final price — see estimates below.
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
  );
}

function StepRequirements({
  specialRequirements,
  customRequirements,
  services,
  dispatch,
}: {
  specialRequirements: string;
  customRequirements: string;
  services: string[];
  dispatch: React.Dispatch<QuoteAction>;
}) {
  const hasSubtitling = services.includes("Subtitling Services");
  const hasInterpreting = services.includes("Interpreting");
  const hasTranslation =
    services.includes("Certified Translations") ||
    (!hasSubtitling && !hasInterpreting);

  const presets: string[] = [];
  if (hasTranslation) presets.push(...REQUIREMENT_PRESETS_TRANSLATION);
  if (hasSubtitling) presets.push(...REQUIREMENT_PRESETS_SUBTITLING);
  if (hasInterpreting) presets.push(...REQUIREMENT_PRESETS_INTERPRETING);
  // Deduplicate (NDA appears in all three)
  const uniquePresets = [...new Set(presets)];

  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3">
        Anything else?
      </h2>
      <p className="text-base-content/60 mb-8">
        Select common requirements or describe your own below.
      </p>
      <PresetWithCustom
        presets={uniquePresets}
        selectedPreset={specialRequirements}
        onSelectPreset={(v) =>
          dispatch({ type: "SET_SPECIAL_REQUIREMENTS", payload: v })
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

function StepReview({
  state,
  onEdit,
}: {
  state: QuoteState;
  onEdit: (step: number) => void;
}) {
  const timelineOption = TIMELINES.find((t) => t.value === state.timeline);

  const contextLabel =
    state.projectType === "personal" ? "Document types" : "Industry";
  const contextItems =
    state.projectType === "personal"
      ? state.personalDocTypes
      : state.industries;
  const filteredItems = contextItems.filter((i) => i !== "Something else");
  const contextParts = [
    filteredItems.length > 0 ? filteredItems.join(", ") : null,
    state.customContext || null,
  ].filter(Boolean);
  const contextValue = contextParts.length > 0 ? contextParts.join(" — ") : null;

  const volumeDisplay = [state.volume, state.customVolume]
    .filter(Boolean)
    .join(" — ");

  const requirementsDisplay = [
    state.specialRequirements,
    state.customRequirements,
  ]
    .filter(Boolean)
    .join(" — ");

  const sections = [
    {
      label: "Services",
      value: state.services.length > 0 ? state.services.join(", ") : null,
      step: 0,
    },
    {
      label: "Project type",
      value: state.projectType
        ? state.projectType === "personal"
          ? "Personal"
          : "Business"
        : null,
      step: 1,
    },
    {
      label: contextLabel,
      value: contextValue,
      step: 2,
    },
    {
      label: "Languages",
      value:
        state.languagePairs.length > 0
          ? state.languagePairs
              .map((p) => `${p.source} → ${p.target}`)
              .join(", ") +
            (state.customLanguage ? ` + ${state.customLanguage}` : "")
          : state.customLanguage || null,
      step: 3,
    },
    {
      label: "Volume",
      value: volumeDisplay || null,
      step: 4,
    },
    {
      label: "Timeline",
      value: timelineOption
        ? `${timelineOption.label}${timelineOption.priceHint ? ` (${timelineOption.priceHint})` : ""}`
        : null,
      step: 5,
    },
    {
      label: "Special requirements",
      value: requirementsDisplay || null,
      step: 6,
    },
  ];

  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3">
        Review your project
      </h2>
      <p className="text-base-content/60 mb-8">
        Here&apos;s a summary of your project details. Click edit to make
        changes.
      </p>

      <div className="space-y-4">
        {sections.map((section) => (
          <div
            key={section.label}
            className="flex items-start justify-between gap-4 p-4 rounded-xl bg-base-200/50 border border-base-300"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40 mb-1">
                {section.label}
              </p>
              <p
                className={`text-sm ${section.value ? "text-base-content" : "text-base-content/40 italic"}`}
              >
                {section.value || "Not specified"}
              </p>
            </div>
            <button
              onClick={() => onEdit(section.step)}
              className="text-xs font-medium text-warm hover:text-warm-dark transition-colors cursor-pointer shrink-0"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepCommunication({ state }: { state: QuoteState }) {
  const [copied, setCopied] = useState(false);

  const handleEmail = () => {
    trackQuoteEvent("quote_submitted", { method: "email" });
    const email = getEmail();
    const subject = encodeURIComponent("Quote Request — Afterwords");
    const body = encodeURIComponent(formatAnswers(state));
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_self");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(getEmail());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback — do nothing
    }
  };

  const handleWhatsApp = () => {
    trackQuoteEvent("quote_submitted", { method: "whatsapp" });
    const text = encodeURIComponent(formatAnswers(state));
    window.open(`https://wa.me/306988854427?text=${text}`, "_blank");
  };

  const handleBeacon = () => {
    trackQuoteEvent("quote_submitted", { method: "helpscout" });
    window.Beacon?.("open");
  };

  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3">
        How would you like to reach us?
      </h2>
      <p className="text-base-content/60 mb-8">
        Choose your preferred way to send your project details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* WhatsApp — order-first on mobile */}
        <button
          onClick={handleWhatsApp}
          className="order-first md:order-2 group p-6 rounded-2xl border-2 border-base-300 hover:border-[#25D366] text-left transition-all duration-300 cursor-pointer hover:shadow-lg"
        >
          <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-4 group-hover:bg-[#25D366]/20 transition-colors">
            <svg
              className="w-6 h-6 text-[#25D366]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <h3 className="font-semibold text-base-content mb-1">WhatsApp</h3>
          <p className="text-xs text-base-content/50">
            Chat with us directly
          </p>
          <span className="inline-block mt-3 text-xs font-medium text-[#25D366] md:hidden">
            Popular on mobile
          </span>
        </button>

        {/* Email */}
        <div className="order-2 md:order-1 group p-6 rounded-2xl border-2 border-base-300 hover:border-warm text-left transition-all duration-300 hover:shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center mb-4 group-hover:bg-warm/20 transition-colors">
            <svg
              className="w-6 h-6 text-warm"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-base-content mb-1">Email</h3>
          <p className="text-xs text-base-content/50 mb-4">
            Send us a detailed message
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={handleEmail}
              className="w-full text-center px-4 py-2 rounded-lg bg-warm text-slate-900 text-xs font-semibold hover:bg-warm-dark hover:text-white transition-all duration-200 cursor-pointer"
            >
              Open mail client
            </button>
            <button
              onClick={handleCopyEmail}
              className="w-full text-center px-4 py-2 rounded-lg border border-base-300 text-xs font-medium text-base-content/60 hover:border-warm hover:text-warm transition-all duration-200 cursor-pointer"
            >
              {copied ? "Copied!" : "Copy email address"}
            </button>
          </div>
        </div>

        {/* HelpScout — opens Beacon contact form */}
        <button
          onClick={handleBeacon}
          className="order-3 group p-6 rounded-2xl border-2 border-base-300 hover:border-blue-500 text-left transition-all duration-300 cursor-pointer hover:shadow-lg"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-base-content mb-1">
            Contact form
          </h3>
          <p className="text-xs text-base-content/50">
            Fill out our online form
          </p>
        </button>
      </div>
    </div>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────

export default function GetAQuoteClient() {
  const [state, dispatch] = useReducer(quoteReducer, initialState);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    trackQuoteEvent("quote_wizard_start");
  }, []);

  const handleNext = useCallback(() => {
    trackQuoteEvent("quote_step_complete", {
      step_name: STEP_LABELS[state.currentStep],
      step_number: String(state.currentStep + 1),
    });
    setDirection(1);
    dispatch({ type: "NEXT_STEP" });
  }, [state.currentStep]);

  const handleBack = useCallback(() => {
    trackQuoteEvent("quote_step_back", {
      step_name: STEP_LABELS[state.currentStep],
      step_number: String(state.currentStep + 1),
    });
    setDirection(-1);
    dispatch({ type: "PREV_STEP" });
  }, [state.currentStep]);

  const handleSkip = useCallback(() => {
    trackQuoteEvent("quote_step_skip", {
      step_name: STEP_LABELS[state.currentStep],
      step_number: String(state.currentStep + 1),
    });
    setDirection(1);
    dispatch({ type: "NEXT_STEP" });
  }, [state.currentStep]);

  const handleGoToStep = useCallback(
    (step: number) => {
      setDirection(step > state.currentStep ? 1 : -1);
      dispatch({ type: "GO_TO_STEP", payload: step });
    },
    [state.currentStep],
  );

  const handleMethodSelected = useCallback((method: string) => {
    trackQuoteEvent("quote_method_selected", { method });
  }, []);

  const renderStep = () => {
    switch (state.currentStep) {
      case 0:
        return (
          <StepServices selected={state.services} dispatch={dispatch} />
        );
      case 1:
        return (
          <StepProjectType
            projectType={state.projectType}
            dispatch={dispatch}
          />
        );
      case 2:
        return state.projectType === "personal" ? (
          <StepPersonalDocTypes
            selected={state.personalDocTypes}
            customContext={state.customContext}
            dispatch={dispatch}
          />
        ) : (
          <StepIndustries
            selected={state.industries}
            customContext={state.customContext}
            dispatch={dispatch}
          />
        );
      case 3:
        return (
          <StepLanguages
            pairs={state.languagePairs}
            customLanguage={state.customLanguage}
            dispatch={dispatch}
          />
        );
      case 4:
        return (
          <StepVolume
            volume={state.volume}
            customVolume={state.customVolume}
            services={state.services}
            dispatch={dispatch}
          />
        );
      case 5:
        return (
          <StepTimeline timeline={state.timeline} dispatch={dispatch} />
        );
      case 6:
        return (
          <StepRequirements
            specialRequirements={state.specialRequirements}
            customRequirements={state.customRequirements}
            services={state.services}
            dispatch={dispatch}
          />
        );
      case 7:
        return <StepReview state={state} onEdit={handleGoToStep} />;
      case 8:
        return <StepCommunication state={state} />;
      default:
        return null;
    }
  };

  // Fire method_selected when reaching contact step
  useEffect(() => {
    if (state.currentStep === TOTAL_STEPS - 1) {
      handleMethodSelected("viewed");
    }
  }, [state.currentStep, handleMethodSelected]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header region with dark background */}
      <div className="container mx-auto px-8">
        <Header />
      </div>

      {/* Hero */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container mx-auto px-8">
          <FadeIn>
            <p className="text-warm font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Free quote
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Tell us about your project
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-white/60 max-w-2xl">
              Answer a few quick questions and choose how you&apos;d like to
              hear back. It only takes a minute.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Wizard */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            <FadeIn delay={0.3}>
              <div className="bg-base-100 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                <ProgressBar
                  currentStep={state.currentStep}
                  onGoToStep={handleGoToStep}
                />

                {/* Step label */}
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-warm mb-6">
                  Step {state.currentStep + 1} of {TOTAL_STEPS} —{" "}
                  {STEP_LABELS[state.currentStep]}
                </p>

                {/* Animated step content */}
                <div className="relative overflow-hidden">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={state.currentStep}
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      {renderStep()}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <WizardNav
                  currentStep={state.currentStep}
                  onNext={handleNext}
                  onBack={handleBack}
                  onSkip={handleSkip}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
