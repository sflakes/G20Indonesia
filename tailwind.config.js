  // tailwind.config.js
  module.exports = {

    purge: [],
 
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        backgroundImage: theme => ({

          'pinisi': "url('./assets/pinisi.jpg')",
          'jokowi': "url('./assets/Jokowi.png')",
          'aceh'  : "url('./assets/masjid-agung-aceh.png')",
          'monas'  : "url('./assets/monas.jpg')",
          'g20'  : "url('./assets/g20.jpg')",
          'mulyani'  : "url('./assets/SriMulyani.png')",
          'dpr'  : "url('./assets/Dpr.png')",
          'bromo'  : "url('./assets/bromos.jpg')",
         }),
         width: {
           precise: '1536px',
         },
         fontFamily: {
          'acme': 'Acme',
        }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
  