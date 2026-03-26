import SystemDiagnosticsPage from "@/pages/SystemDiagnosticsPage";

const routes = {
  "/facility/:facilityId/diagnostics": ({
    facilityId,
  }: {
    facilityId: string;
  }) => <SystemDiagnosticsPage facilityId={facilityId} />,
};

export default routes;
