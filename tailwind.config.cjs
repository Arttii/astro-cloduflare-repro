/* eslint-disable @typescript-eslint/no-var-requires */
const defaultConfig = require('tailwindcss/defaultConfig');
const formsPlugin = require('@tailwindcss/forms');

const path = require('path');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
    path.join('../packages/components/dist', '**/*.es.js'),
  ],

  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      colors: {
        primary: '#232323',

        secondary: '#232323',
        tahiti: '#3ab7bf',
        accent: '#3C3C3C',

        neutral: '#282828',
        dimmed: '#868E96',

        'base-100': '#FCFCFD',
        background: '#f3f3f4',
        info: '#3ABFF8',

        success: '#999999',

        warning: '#F18260',

        error: '#F87272',
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },
      animation: {
        progress: 'progress 3s infinite',
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      }
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),

    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hide': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',

            /* Firefox */
            'scrollbar-width': 'none',

            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },

          '.scrollbar-default': {
            /* IE and Edge */
            '-ms-overflow-style': 'auto',

            /* Firefox */
            'scrollbar-width': 'auto',

            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'block',
            },
          },
        },
        ['responsive']
      );
    }),
  ],
  daisyui: {
    styled: true,
    logs: false,
    rtl: false,
    themes: [
      {
        daisy: {
          primary: '#232323',
          background: '#f3f3f4',
          secondary: '#232323',

          accent: '#4C4C4C',

          neutral: '#282828',

          'base-100': '#FCFCFD',

          info: '#3ABFF8',

          success: '#999999',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
};
