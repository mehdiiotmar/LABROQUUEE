export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // obligatoire pour Netlify
  },
})
