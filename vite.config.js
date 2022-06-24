import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFonts({
      google: {
        families: ['Material+Symbols+Outlined'],
        styles: 'opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
        preload: true,
        defer: false,
      },
      custom: {
        families: [
          {
            name: 'Material Symbols Outlined',
            src:
              './src/assets/fonts/Material_Icons/Material+Symbols+Outlined.woff2',
            styles: 'opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
          },
          {
            name: 'Integral CF',
            local: 'Integral CF',
            src: './src/assets/fonts/IntegralCF/IntegralCF-Regular.ttf',
          },
          {
            name: 'Shadows Into Light',
            local: 'Shadows Into Light',
            src:
              './src/assets/fonts/Shadows_Into_Light/ShadowsIntoLight-Regular.ttf',
          },
          {
            name: 'Montserrat',
            local: 'Montserrat',
            src: './src/assets/fonts/Montserrat/static/Montserrat*',
          },
        ],
        preload: true,
        defer: false,
      },
    }),
  ],
})
