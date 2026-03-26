/**
 * Care configuration
 * These values will be provided by the parent Care app at runtime
 * This is a stub for development/type checking purposes
 */

interface ILogo {
  light: string;
  dark: string;
}

interface CareConfig {
  apiUrl: string;
  mainLogo?: ILogo;
  stateLogo?: ILogo;
  customLogo?: ILogo;
  availableLocales?: string[];
  sentry?: {
    dsn?: string;
    environment?: string;
  };
  reCaptchaSiteKey?: string;
}

// Access the global config provided by the parent Care app
const careConfig: CareConfig =
  (typeof window !== "undefined" && (window as any).__CORE_ENV__) || {
    apiUrl: "",
    mainLogo: {
      light: "/images/care_logo.svg",
      dark: "/images/care_logo.svg",
    },
    availableLocales: ["en"],
  };

export default careConfig;
