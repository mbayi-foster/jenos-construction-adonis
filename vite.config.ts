import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entryPoints: ['resources/css/app.css', 'resources/js/app.js'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],

      /**
       * Extra files that no entrypoint imports (images used directly inside
       * the Edge templates, favicons, ...). Without this list, Vite ignores
       * them and they are missing from `public/assets` after a build, so the
       * `asset()` helper cannot resolve them in production.
       *
       * The paths are emitted verbatim and must be listed one by one, glob
       * patterns are not supported for assets.
       */
      assets: {
        assets: [
          'resources/assets/images/favicon.png',
          'resources/assets/images/logo.jpeg',
          'resources/assets/images/logo-sans.png',
        ],
      },
    }),
  ],

  server: {
    watch: {
      ignored: ['**/storage/**', '**/tmp/**'],
    },
  },
})
