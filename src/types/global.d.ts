declare global {
  interface Window {
    Beacon: (action: string) => void;
  }
}

export {};
