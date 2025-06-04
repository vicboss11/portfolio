import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), partytown()],
  site: 'https://victoralban.dev/'
});