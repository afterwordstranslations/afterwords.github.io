"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TIMELINES } from "../constants";
import type { QuoteState } from "../types";

export function ReviewPanel({
  state,
  onEdit,
}: {
  state: QuoteState;
  onEdit: (step: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

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
  const contextValue =
    contextParts.length > 0 ? contextParts.join(" — ") : null;

  const volumeDisplay = [state.volume, state.customVolume]
    .filter(Boolean)
    .join(" — ");

  const timelineDisplay = timelineOption
    ? `${timelineOption.label}${timelineOption.priceHint ? ` (${timelineOption.priceHint})` : ""}`
    : null;

  const requirementsDisplay = [
    state.specialRequirements.length > 0
      ? state.specialRequirements.join(", ")
      : null,
    state.customRequirements || null,
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
      step: 0,
    },
    {
      label: contextLabel,
      value: contextValue,
      step: 1,
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
      step: 2,
    },
    {
      label: "Volume",
      value: volumeDisplay || null,
      step: 3,
    },
    {
      label: "Timeline",
      value: timelineDisplay,
      step: 3,
    },
    {
      label: "Special requirements",
      value: requirementsDisplay || null,
      step: 4,
    },
  ];

  // Only show sections that have values
  const filledSections = sections.filter((s) => s.value);

  if (filledSections.length === 0) return null;

  return (
    <div className="mt-8 mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-base-content/60 hover:text-base-content transition-colors cursor-pointer"
      >
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        Review your answers
        <span className="text-xs text-base-content/40">
          ({filledSections.length} answered)
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-3 mt-4">
              {filledSections.map((section) => (
                <div
                  key={section.label}
                  className="flex items-start justify-between gap-4 p-3 rounded-xl bg-base-200/50 border border-base-300"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40 mb-0.5">
                      {section.label}
                    </p>
                    <p className="text-sm text-base-content truncate">
                      {section.value}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
