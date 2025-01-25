/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public.html"
  ],
  theme: {
    colors: {
      'blue': '#17a2b8',
      'darkblue': '#1a7287',
      'white': '#ffffff',
      'grey': '#cccccc',
      'lightgrey': '#D3D3D3',
      'darkgrey': '#333333',
      'purple': '#8e7cc3',
      'red': '#e03e36',
      'green': '#77c889',
      'black': '#0a0c0d',
      'yellow': '#fde68a',
    },
    extend: {
      screens: {
        'mb': '640px',    'mp': { 'max': '639px' },       //Phone
        'tb': '768px',    'mt': { 'max': '767px' },       //Tablet
        'lp': '1024px',   'ml': { 'max': '1023px' },      //Laptop
        'dt': '1280px',   'md': { 'max': '1279px' },      //Desktop
      },
      width: {
        '1': '10%', '2': '20%',
        '3': '30%', '4': '40%',
        '5': '50%', '6': '60%',
        '7': '70%', '8': '80%',
        '9': '90%', 'full': '100%',
        
        'r1': '1rem', 'r2': '2rem', 'r3': '3rem',
        'r4': '4rem', 'r5': '5rem', 'r6': '6rem',
        'r7': '7rem', 'r8': '8rem', 'r9': '9rem',
        'r10': '10rem', 'r11': '11rem', 'r12': '12rem',
        'r13': '13rem', 'r14': '14rem', 'r15': '15rem',
        'r16': '16rem', 'r17': '17rem', 'r18': '18rem',
        'r19': '19rem', 'r20': '20rem', 'r21': '21rem',
        'r22': '22rem', 'r23': '23rem', 'r24': '24rem',
        'r25': '25rem', 'r26': '26rem', 'r27': '27rem',
        'r28': '28rem', 'r29': '29rem', 'r30': '30rem',
      },
      height: {
        '1': '10%', '2': '20%',
        '3': '30%', '4': '40%',
        '5': '50%', '6': '60%',
        '7': '70%', '8': '80%',
        '9': '90%', 'full': '100%',
        
        'r1': '1rem', 'r2': '2rem', 'r3': '3rem',
        'r4': '4rem', 'r5': '5rem', 'r6': '6rem',
        'r7': '7rem', 'r8': '8rem', 'r9': '9rem',
        'r10': '10rem', 'r11': '11rem', 'r12': '12rem',
        'r13': '13rem', 'r14': '14rem', 'r15': '15rem',
        'r16': '16rem', 'r17': '17rem', 'r18': '18rem',
        'r19': '19rem', 'r20': '20rem', 'r21': '21rem',
        'r22': '22rem', 'r23': '23rem', 'r24': '24rem',
        'r25': '25rem', 'r26': '26rem', 'r27': '27rem',
        'r28': '28rem', 'r29': '29rem', 'r30': '30rem',
      },
      
      scale: {
        '01': '1.01', '02': '1.02', '03': '1.03',
        '10': '1.10', '20': '1.20', '30': '1.30',
        '40': '1.40', '50': '1.50', '60': '1.60',
        '70': '1.70', '80': '1.80', '90': '1.90',
        '100': '2',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.center-all': {
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
        '.center-all-x': {
          justifyContent: 'center',
        },
        '.center-all-y': {
          alignItems: 'center',
        },
        '.scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#17a2b8 #d3d3d3',
        },
        '.scrollbar::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#17a2b8',
          borderRadius: '10px',
        },
        '.scrollbar::-webkit-scrollbar-track': {
          backgroundColor: '#d3d3d3',
        },
      };

      addUtilities(newUtilities, ['responsive']);
    }
  ],
};
