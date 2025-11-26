// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import edgeoneAdapter from "@edgeone/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://my-portfolio.edgeone.app/',
  vite: {
      plugins: [tailwindcss(), edgeoneAdapter()],
  },
  adapter: edgeoneAdapter(),
  integrations: [react()]
});