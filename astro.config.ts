import { defineConfig } from "astro/config";
import hydroJS from "hydro-js-integrations/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [hydroJS()],
});
