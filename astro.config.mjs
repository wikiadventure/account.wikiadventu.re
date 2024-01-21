import { defineConfig } from 'astro/config';
import Icons from 'unplugin-icons/vite';
import netlify from '@astrojs/netlify/functions';
import ssl from '@vitejs/plugin-basic-ssl';


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [
      ssl(),
      Icons({
        compiler: 'astro',
        autoInstall: true,
      }),
    ],
    server: {
      https: true,
    },
  },
});