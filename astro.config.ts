/* eslint-disable @typescript-eslint/ban-ts-comment */
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import { SITE } from './src/config.mjs';
import react from '@astrojs/react';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';
import vercel from '@astrojs/vercel/serverless';
import cloudflare from '@astrojs/cloudflare';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
 
 
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.origin,
  base: SITE.basePathname,
  output: 'hybrid',
	adapter: cloudflare({mode:"directory",functionPerRoute:true}),
  server: {
    host: '127.0.0.1',
  },
  integrations: [
    //@ts-ignore
    react(),
    tailwind({
      applyBaseStyles: true,
      configFile: './tailwind.config.cjs',
    }),
    //@ts-ignore
    
    
		icon(
			{
				include: {
					tabler: ["*"], // (Default) Loads entire Material Design Icon set
					 
				},
			}
		),
  ],
  vite: {
    // build: {
    //   commonjsOptions: {
    //     transformMixedEsModules: true,
    //   },
    // },
    build: {
      rollupOptions: {
        plugins: [nodePolyfills() as any],
      },
      // lib: {
      // 	formats: ['umd'],
      // 	entry: path.resolve(__dirname, './src/lib/index.ts'),
      // }
    },

    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'window',
        },
        // Enable esbuild polyfill plugins
        plugins: [nodeModulesPolyfillPlugin() as any],
      },
      exclude: [ ],
    },
    resolve: {
      alias: [
        {
          find: '~',
          replacement: path.resolve(__dirname, './src'),
        },
				// {	
				// 	find: "svgo",
				// 	replacement: import.meta.env.PROD ? "svgo/dist/svgo.browser.js" : "svgo"
				// }

        // { find: /^@visx\/vendor$/, replacement: './node_modules/@visx/vendor/lib' },
        // { find: '@visx/vendor/d3-array', replacement: './node_modules/@visx/vendor/lib/d3-array.js' },
      ],
    },

    ssr: {
			// target: "webworker",
      noExternal: [  ],
    },
  },
  // define: {
  //   'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID),
  // },
});
