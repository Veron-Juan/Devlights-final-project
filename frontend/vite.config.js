import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}}
})

//El define process.env es para poder testear la api key en un .env, lo ideal es pedir la api key al backend en un futuro