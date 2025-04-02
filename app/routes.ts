import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("services", "routes/services.tsx"),
  route("projects", "routes/projects.tsx"),
  route("timeline", "routes/timeline.tsx"),
] satisfies RouteConfig;
