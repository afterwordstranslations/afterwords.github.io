"use client";

import { useReducer, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { FadeIn } from "~/components/animations/FadeIn";
import { STEP_LABELS, TOTAL_STEPS } from "./constants";
import { trackQuoteEvent } from "./analytics";
import { trackContact } from "~/lib/analytics";
import type { QuoteState, QuoteAction } from "./types";

// ─── Steps ─────────────────────────────────────────────────────────────────
import { StepServicesAndType } from "./components/steps/StepServicesAndType";
import { StepContext } from "./components/steps/StepContext";
import { StepLanguages } from "./components/steps/StepLanguages";
import { StepVolumeAndTimeline } from "./components/steps/StepVolumeAndTimeline";
import { StepRequirements } from "./components/steps/StepRequirements";
import { StepCommunication } from "./components/steps/StepCommunication";

// ─── Components ────────────────────────────────────────────────────────────
import { WizardNav } from "./components/WizardNav";
import { ReviewPanel } from "./components/ReviewPanel";

// ─── Sections ──────────────────────────────────────────────────────────────
import { HowItWorks } from "./components/sections/HowItWorks";
import { FeaturedTestimonial } from "./components/sections/FeaturedTestimonial";
import { DirectContact } from "./components/sections/DirectContact";

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
  specialRequirements: [],
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
    case "TOGGLE_SPECIAL_REQUIREMENT": {
      const specialRequirements = state.specialRequirements.includes(
        action.payload,
      )
        ? state.specialRequirements.filter((r) => r !== action.payload)
        : [...state.specialRequirements, action.payload];
      return { ...state, specialRequirements };
    }
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

// ─── Main Page Component ──────────────────────────────────────────────────

export default function GetAQuoteClient() {
  const [state, dispatch] = useReducer(quoteReducer, initialState);
  const [direction, setDirection] = useState(1);
  const [showWizard, setShowWizard] = useState(false);

  useEffect(() => {
    trackQuoteEvent("quote_wizard_start");
  }, []);

  const handleNext = useCallback(() => {
    trackQuoteEvent("quote_step_complete", {
      step_name: STEP_LABELS[state.currentStep],
      step_number: String(state.currentStep + 1),
    });

    // Track granular selections per step
    if (state.currentStep === 0 && state.services.length > 0) {
      trackQuoteEvent("quote_services_selected", {
        services: state.services.join(", "),
        project_type: state.projectType || "not_set",
      });
    }
    if (state.currentStep === 1) {
      if (state.projectType === "business" && state.industries.length > 0) {
        trackQuoteEvent("quote_industry_selected", {
          industries: state.industries.join(", "),
        });
      }
      if (state.projectType === "personal" && state.personalDocTypes.length > 0) {
        trackQuoteEvent("quote_doc_types_selected", {
          doc_types: state.personalDocTypes.join(", "),
        });
      }
    }
    if (state.currentStep === 2 && state.languagePairs.length > 0) {
      trackQuoteEvent("quote_languages_selected", {
        pairs: state.languagePairs.map((p) => `${p.source}→${p.target}`).join(", "),
      });
    }
    if (state.currentStep === 3) {
      if (state.volume) {
        trackQuoteEvent("quote_volume_selected", { volume: state.volume });
      }
      if (state.timeline) {
        trackQuoteEvent("quote_timeline_selected", { timeline: state.timeline });
      }
    }

    setDirection(1);
    dispatch({ type: "NEXT_STEP" });
  }, [state]);

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

  const handleOpenWizard = useCallback(() => {
    setShowWizard(true);
    trackQuoteEvent("quote_wizard_opened");
    window.scrollTo(0, 0);
  }, []);

  const handleCloseWizard = useCallback(() => {
    setShowWizard(false);
    window.scrollTo(0, 0);
  }, []);

  // Fire method_selected when reaching contact step
  useEffect(() => {
    if (state.currentStep === TOTAL_STEPS - 1) {
      trackQuoteEvent("quote_method_selected", { method: "viewed" });
    }
  }, [state.currentStep]);

  const renderStep = () => {
    switch (state.currentStep) {
      case 0:
        return (
          <StepServicesAndType
            services={state.services}
            projectType={state.projectType}
            dispatch={dispatch}
          />
        );
      case 1:
        return (
          <StepContext
            projectType={state.projectType}
            industries={state.industries}
            personalDocTypes={state.personalDocTypes}
            customContext={state.customContext}
            dispatch={dispatch}
          />
        );
      case 2:
        return (
          <StepLanguages
            pairs={state.languagePairs}
            customLanguage={state.customLanguage}
            dispatch={dispatch}
          />
        );
      case 3:
        return (
          <StepVolumeAndTimeline
            volume={state.volume}
            customVolume={state.customVolume}
            timeline={state.timeline}
            services={state.services}
            dispatch={dispatch}
          />
        );
      case 4:
        return (
          <StepRequirements
            specialRequirements={state.specialRequirements}
            customRequirements={state.customRequirements}
            services={state.services}
            projectType={state.projectType}
            dispatch={dispatch}
          />
        );
      case 5:
        return <StepCommunication state={state} />;
      default:
        return null;
    }
  };

  const showReviewPanel = state.currentStep >= 4;

  // ─── Full-page wizard view ───────────────────────────────────────────────

  if (showWizard) {
    return (
      <div className="min-h-screen bg-base-100">
        {/* Wizard header */}
        <div className="border-b border-base-300 bg-base-100">
          <div className="container mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="shrink-0">
                <Image
                  src="/logo.svg"
                  className="w-28 md:w-36 invert dark:invert-0"
                  width={312}
                  height={67}
                  alt="Afterwords Logo"
                />
              </Link>
              <div className="h-6 w-px bg-base-300" />
              <button
                onClick={handleCloseWizard}
                className="inline-flex items-center gap-2 text-sm text-base-content/60 hover:text-base-content transition-colors cursor-pointer"
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
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back to contact options
              </button>
            </div>
            <p className="text-xs text-base-content/40">
              Step {state.currentStep + 1} of {TOTAL_STEPS}
            </p>
          </div>
        </div>

        {/* Wizard content — vertically centered */}
        <div className="flex-1 flex items-start justify-center py-12 md:py-20">
          <div className="container mx-auto px-8">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="bg-base-100 rounded-2xl shadow-xl border border-base-300 p-6 sm:p-8 md:p-10">
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

                {/* Collapsible review panel — visible from Requirements onward */}
                {showReviewPanel && (
                  <ReviewPanel state={state} onEdit={handleGoToStep} />
                )}

                <WizardNav
                  currentStep={state.currentStep}
                  onNext={handleNext}
                  onBack={handleBack}
                  onSkip={handleSkip}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Default contact page view ──────────────────────────────────────────

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="relative z-10">
          <div className="container mx-auto px-8">
            <Header />
          </div>

          <div className="pt-8 pb-16 md:pt-12 md:pb-24">
            <div className="container mx-auto px-8">
              <FadeIn>
                <p className="text-warm font-semibold text-sm uppercase tracking-[0.2em] mb-4">
                  Get in touch
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                  Great translations start
                  <br />
                  with a conversation.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-white/60 max-w-2xl mb-8">
                  A certified document, a business project, or something in
                  between &mdash; reach out however suits you best and
                  we&apos;ll take it from there.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => { trackContact("helpscout", "/get-a-quote"); window.Beacon?.("open"); }}
                    className="inline-flex items-center gap-2 bg-warm text-slate-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-warm-dark hover:text-white transition-all duration-300 cursor-pointer shadow-lg shadow-warm/20"
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
                        strokeWidth={1.5}
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                    Chat with us now
                  </button>
                  <button
                    onClick={handleOpenWizard}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Or let us walk you through it
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
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>      {/* Contact methods */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <FadeIn delay={0.3}>
              <DirectContact />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Featured Testimonial */}
      <FeaturedTestimonial />

      {/* Wizard teaser */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="rounded-2xl border border-base-300 bg-base-200/50 p-8 md:p-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-warm/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-warm"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-base-content mb-2">
                      Not sure where to start?
                    </h2>
                    <p className="text-sm text-base-content/60 leading-relaxed">
                      Answer a few quick questions about your project &mdash;
                      services, languages, volume &mdash; and we&apos;ll have
                      everything we need to send you a tailored quote.
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleOpenWizard}
                  className="mt-2 ml-14 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-warm text-slate-900 text-sm font-semibold hover:bg-warm-dark hover:text-white transition-all duration-200 cursor-pointer"
                >
                  Start with what you need
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
