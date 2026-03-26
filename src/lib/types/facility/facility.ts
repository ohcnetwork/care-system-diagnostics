/**
 * Facility related types
 * This is a stub - actual types come from the parent Care app
 */

export interface PrintTemplate {
  slug: string;
  branding?: {
    header_image?: {
      url: string;
    };
    footer_image?: {
      url: string;
    };
    logo?: {
      url: string;
    };
  };
  page?: {
    size?: string;
    orientation?: string;
  };
  watermark?: {
    enabled: boolean;
    text?: string;
    opacity?: number;
  };
  print_setup?: {
    auto_print: boolean;
  };
}

export interface Facility {
  id: string;
  name: string;
  print_templates?: PrintTemplate[];
}
