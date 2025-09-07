import * as Sentry from "@sentry/react-router";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://ca188d86db17be3bd49b9be6ecadc6f0@o4509773267075072.ingest.us.sentry.io/4509773278019584",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  // // Enable logs to be sent to Sentry
  // enableLogs: true,

  // integrations: [nodeProfilingIntegration()],
  // tracesSampleRate: 1.0, // Capture 100% of the transactions
  // profilesSampleRate: 1.0, // profile every transaction
});
