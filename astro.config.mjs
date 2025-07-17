// @ts-check
import { defineConfig } from 'astro/config';
import Icons from 'unplugin-icons/vite';
import netlify from '@astrojs/netlify';
import ssl from '@vitejs/plugin-basic-ssl';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({}),
  vite: {
    plugins: [
      // @ts-ignore
      ssl({}),
      // @ts-ignore
      Icons({
        compiler: 'astro',
        autoInstall: true,
      }),
    ],
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist([
          'last 2 chrome versions',
          'last 2 firefox versions',
          'last 2 safari versions'
        ]))
      }
    },
    server: {
      https: {

      },
      proxy: {}
    },
  },
});
