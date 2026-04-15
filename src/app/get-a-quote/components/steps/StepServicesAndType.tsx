"use client";

import { motion } from "framer-motion";
import { SERVICES } from "../../constants";
import { MultiSelectGrid } from "../MultiSelectGrid";
import type { QuoteAction, ProjectType } from "../../types";

export function StepServicesAndType({
  services,
  projectType,
  dispatch,
}: {
  services: string[];
  projectType: ProjectType;
  dispatch: React.Dispatch<QuoteAction>;
}) {
  const options = [
    {
      value: "personal" as const,
      label: "Personal",
      description: "Certificates, diplomas, medical records, legal documents",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
    },
    {
      value: "business" as const,
      label: "Business",
      description: "Corporate, industry-specific, or commercial projects",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-3">
        What are you looking for?
      </h2>
      <p className="text-base-content/60 mb-8">
        Select your services, then tell us if it&apos;s personal or business.
      </p>

      <MultiSelectGrid
        options={SERVICES}
        selected={services}
        onToggle={(v) => dispatch({ type: "TOGGLE_SERVICE", payload: v })}
      />

      {services.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-8"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40 mb-3">
            Is this for&hellip;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((option) => {
              const isSelected = projectType === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() =>
                    dispatch({
                      type: "SET_PROJECT_TYPE",
                      payload: option.value,
                    })
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
        </motion.div>
      )}
    </div>
  );
}
