import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig(({ command, mode }) => {
  const plugins = [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
  ];

  // Automatically use 'vercel' preset when building on Vercel, otherwise 'cloudflare-pages'
  if (command === "build") {
    plugins.push(
      nitro({
        preset: process.env.VERCEL ? "vercel" : "cloudflare-pages",
        noExternals: true
      }),
    );
  }

  return {
    plugins,
    resolve: {
      alias: {
        tslib: "tslib/tslib.es6.mjs",
      },
      dedupe: ["react", "react-dom", "@tanstack/react-router"],
    },
    ssr: command === "build" ? { noExternal: true } : {},

  };
});
