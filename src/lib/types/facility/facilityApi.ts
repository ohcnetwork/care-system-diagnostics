import { apiRoutes, HttpMethod } from "@/lib/request";
import type { Facility } from "./facility";

/**
 * Facility API routes
 * This is a stub - actual implementation comes from the parent Care app
 */

const facilityApi = apiRoutes({
  get: {
    path: "/api/v1/facility/{facilityId}/",
    method: HttpMethod.GET,
    TResponse: {} as Facility,
  },
});

export default facilityApi;
