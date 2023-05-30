import { defineConfig } from 'astro/config';
import Icons from 'unplugin-icons/vite';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
        autoInstall: true,
      }),
    ],
  },
});