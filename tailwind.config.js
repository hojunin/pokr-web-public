/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: { max: '1224px' },
      desktop: { min: '1225px' },
    },
    extend: {
      fontSize: {
        h1: [
          '36px',
          {
            lineHeight: '48px',
            fontWeight: '900',
          },
        ],
        h2: [
          '26px',
          {
            lineHeight: '36px',
            fontWeight: '900',
          },
        ],
        h3: [
          '20px',
          {
            lineHeight: '32px',
            fontWeight: '900',
          },
        ],
        subtitle: [
          '18px',
          {
            lineHeight: '26px',
            fontWeight: '900',
          },
        ],
        bodyB: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '700',
          },
        ],
        bodyR: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '500',
          },
        ],
        button: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '900',
          },
        ],
        label1: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '700',
          },
        ],
        label2: [
          '12px',
          {
            lineHeight: '18px',
            fontWeight: '700',
          },
        ],
        caption: [
          '11px',
          {
            lineHeight: '15px',
            fontWeight: '500',
          },
        ],
      },
      textColor: {
        'pri-100': 'var(--pri-100)',
        'pri-200': 'var(--pri-200)',
        'pri-600': 'var(--pri-600)',
        'pri-400': 'var(--pri-400)',
        'pri-800': 'var(--pri-800)',
        'sub-blue-100': 'var(--sub-blue-100)',
        'sub-blue-400': 'var(--sub-blue-400)',
        'sub-purple-100': 'var(--sub-purple-100)',
        'sub-purple-400': 'var(--sub-purple-400)',
        'sub-orange-100': 'var(--sub-orange-100)',
        'sub-orange-400': 'var(--sub-orange-400)',
        'pokr-heading': 'var(--text-heading)',
        'pokr-body': 'var(--text-body)',
        'pokr-disabled': 'var(--text-disabled)',
        'content-black': 'var(--content-black)',
        'content-gray1': 'var(--content-gray1)',
        'content-gray2': 'var(--content-gray2)',
        'content-gray3': 'var(--content-gray3)',
      },
      borderColor: { 'pokr-gray': 'var(--border-gray)' },
      backgroundColor: {
        'pokr-gray': 'var(--bg-gray)',
      },
    },
  },
  plugins: [],
};
