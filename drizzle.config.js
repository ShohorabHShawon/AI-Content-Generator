/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:jlmx7RirPMt6@ep-square-cloud-a5cr2pza.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require",
  },
};
