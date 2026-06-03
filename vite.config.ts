import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",

      pwaAssets: {
        disabled: false,
        config: true, // read pwa-assets.config.ts
      },

      manifest: {
        name: "My Bank",
        short_name: "Bank",
        description: "Secure mobile banking",
        theme_color: "#0b5fff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        scope: "/",
        lang: "en",
      },

      workbox: {
        // activate the new SW immediately, no waiting
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,

        // precache only the app shell (static build output)
        globPatterns: ["**/*.{js,css,html,svg,png,ico,woff2}"],

        // SPA fallback, but never serve cached HTML for backend routes
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/^\/api/, /^\/auth/],

        // IMPORTANT for a bank: do NOT add runtimeCaching for API or any
        // authenticated/sensitive endpoints. Leave them on the network.
        // Only cache truly static, non-sensitive third-party assets if needed.
        runtimeCaching: [],
      },

      // keep the SW off in dev for predictable local debugging;
      // flip to true only when you specifically want to test the SW
      devOptions: {
        enabled: false,
        type: "module",
      },
    }),
  ],
  preview: {
    port: 7777,
  },
});
