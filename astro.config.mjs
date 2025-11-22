import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import editableRegions from "@cloudcannon/editable-regions/astro-integration";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: "https://sydneydecastrolmt.netlify.app",
  integrations: [
    editableRegions(),
    icon(),
    sitemap({
      filter: (page) => !page.includes("/admin"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  build: {
    // This ensures Netlify can detect forms
    format: "file",
  },
  // Add this for Netlify forms
  vite: {
    define: {
      // Helps with form detection
      __NETLIFY_FORM_DETECTION__: "true", 
    },
  }, 
});
