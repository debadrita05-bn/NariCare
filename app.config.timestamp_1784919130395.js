// app.config.ts
import { defineConfig } from "@tanstack/react-start/config";
var app_config_default = defineConfig({
  server: {
    preset: "vercel",
    vercel: {
      functions: {
        "**": {
          includeFiles: "**/*.mjs"
        }
      }
    }
  }
});
export {
  app_config_default as default
};
