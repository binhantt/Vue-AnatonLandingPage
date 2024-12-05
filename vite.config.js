import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: { 
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@layouts': path.resolve(__dirname, './src/components/layouts'),
      '@base' : path.resolve(__dirname,'./src/components/base'), 
       '@product_demo': path.resolve(__dirname,'./src/components/Product_demo'),
      '@config': path.resolve(__dirname,'./src/config')
    }
  },
  plugins: [vue()],
})
