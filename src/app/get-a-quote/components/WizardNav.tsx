"use client";

import { TOTAL_STEPS } from "../constants";

export function WizardNav({
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
  const isRequirementsStep = currentStep === TOTAL_STEPS - 2;
  const isContactStep = currentStep === TOTAL_STEPS - 1;

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

      {!isContactStep && (
        <div className="flex items-center gap-3">
          {!isRequirementsStep && (
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
            {isRequirementsStep ? "Choose how to send" : "Next"}
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
      )}
    </div>
  );
}
