"use client";

import { useState, useCallback } from "react";
import { LANGUAGES, COMMON_LANGUAGE_PAIRS } from "../../constants";
import type { QuoteAction, LanguagePair } from "../../types";

export function StepLanguages({
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
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-3">
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
              {preset.source} &rarr; {preset.target}
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
              {pair.source} &rarr; {pair.target}
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
