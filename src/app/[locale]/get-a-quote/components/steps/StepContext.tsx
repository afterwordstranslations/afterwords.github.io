"use client";

import { INDUSTRIES, PERSONAL_DOC_TYPES } from "../../constants";
import { MultiSelectGrid } from "../MultiSelectGrid";
import type { QuoteAction, ProjectType } from "../../types";

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
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-3">
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
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-3">
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

export function StepContext({
  projectType,
  industries,
  personalDocTypes,
  customContext,
  dispatch,
}: {
  projectType: ProjectType;
  industries: string[];
  personalDocTypes: string[];
  customContext: string;
  dispatch: React.Dispatch<QuoteAction>;
}) {
  return projectType === "personal" ? (
    <StepPersonalDocTypes
      selected={personalDocTypes}
      customContext={customContext}
      dispatch={dispatch}
    />
  ) : (
    <StepIndustries
      selected={industries}
      customContext={customContext}
      dispatch={dispatch}
    />
  );
}
