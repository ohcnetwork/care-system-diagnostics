import routes from "./routes";

const manifest = {
  plugin: "care_system_diagnostics",
  routes,
  extends: [],
  components: {},
  devices: [],
} as const;

export default manifest;
