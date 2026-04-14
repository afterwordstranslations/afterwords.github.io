export interface LanguagePair {
  source: string;
  target: string;
}

export type ProjectType = "personal" | "business" | "";

export interface QuoteState {
  currentStep: number;
  services: string[];
  projectType: ProjectType;
  industries: string[];
  personalDocTypes: string[];
  languagePairs: LanguagePair[];
  customLanguage: string;
  volume: string;
  customVolume: string;
  timeline: string;
  customContext: string;
  specialRequirements: string;
  customRequirements: string;
}

export type QuoteAction =
  | { type: "TOGGLE_SERVICE"; payload: string }
  | { type: "SET_PROJECT_TYPE"; payload: ProjectType }
  | { type: "TOGGLE_INDUSTRY"; payload: string }
  | { type: "TOGGLE_PERSONAL_DOC_TYPE"; payload: string }
  | { type: "SET_CUSTOM_CONTEXT"; payload: string }
  | { type: "ADD_LANGUAGE_PAIR"; payload: LanguagePair }
  | { type: "REMOVE_LANGUAGE_PAIR"; payload: number }
  | { type: "SET_CUSTOM_LANGUAGE"; payload: string }
  | { type: "SET_VOLUME"; payload: string }
  | { type: "SET_CUSTOM_VOLUME"; payload: string }
  | { type: "SET_TIMELINE"; payload: string }
  | { type: "SET_SPECIAL_REQUIREMENTS"; payload: string }
  | { type: "SET_CUSTOM_REQUIREMENTS"; payload: string }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "GO_TO_STEP"; payload: number };
