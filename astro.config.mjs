import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://syukurm-frontend-mentor-solutions.netlify.app/",
  integrations: [
    prefetch(),
    sitemap(),
    robotsTxt(),
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
    }),
  ],
});
