import dotenv from "dotenv";

dotenv.config();

export const config = {
  // Server configuration
  server: {
    port: process.env.PORT || 8080, // Port number for the server
  },
  //   // Database configuration
  //   database: {
  //     host: process.env.DB_HOST || "localhost",
  //     port: parseInt(process.env.DB_PORT || "", 10) || 3306,
  //     username: process.env.DB_USERNAME || "username",
  //     password: process.env.DB_PASSWORD || "password",
  //     database: process.env.DB_DATABASE || "database_name",
  //   },
  //   // API keys
  //   apiKeys: {
  //     // Example API key for external services
  //     apiKey: process.env.API_KEY || "your_api_key_here",
  //   },
  //   // Other application settings
  //   otherSettings: {
  //     // Example setting for enabling/disabling features
  //     featureEnabled: process.env.FEATURE_ENABLED === "true" || false,
  //   },
};
