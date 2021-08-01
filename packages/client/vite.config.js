import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const viteEnv = {};

Object.keys(process.env).forEach((key) => {
  if (key.startsWith(`VITE_`)) {
    viteEnv[`import.meta.env.${key}`] = process.env[key];
  }
});

export default defineConfig({
  plugins: [vue()],
  define: viteEnv,
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
});
