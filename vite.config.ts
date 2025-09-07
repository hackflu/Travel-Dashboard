import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from '@sentry/react-router';
const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-9n",
  project: "javascript-react",

  // An auth token is required for uploading source maps;
  // store it in an environment variable to keep it secure.
  authToken: "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",
  // ...
};

export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), tsconfigPaths(),reactRouter(),sentryReactRouter(sentryConfig, config)],
  ssr:{
    noExternal : [/@syncfusion/]
  },
}})
