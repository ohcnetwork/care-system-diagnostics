import { useQuery } from "@tanstack/react-query";

import careConfig from "@/lib/careConfig";

export interface PlugConfigMeta {
  url?: string;
  name?: string;
  [key: string]: unknown;
}

export interface PlugConfig {
  slug: string;
  meta: PlugConfigMeta;
}

/**
 * Hook to fetch all configured Care plugins from the backend API.
 *
 * This replicates how the parent Care app's PluginEngine fetches plugins:
 * it calls `GET /api/v1/plug_config/` and returns the list of configured plugins.
 *
 * Each plugin has a `slug` and `meta` (which includes the plugin's `url`).
 */
export const useCareApps = () => {
  const { data, isLoading } = useQuery<{ configs: PlugConfig[] }>({
    queryKey: ["care-plug-configs"],
    queryFn: async () => {
      const token = localStorage.getItem("care_access_token");
      const resp = await fetch(`${careConfig.apiUrl}/api/v1/plug_config/`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!resp.ok) {
        return { configs: [] };
      }
      return resp.json();
    },
  });

  return {
    apps: data?.configs ?? [],
    isLoading,
  };
};
