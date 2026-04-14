declare global {
  interface Window {
    Beacon: (action: string, data?: Record<string, unknown>) => void;
    gtag: (...args: unknown[]) => void;
  }
}

export {};
