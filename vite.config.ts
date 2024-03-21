import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {},
  define: {},
  build: {
    emptyOutDir: true,
    minify: false,
    manifest: false,
    sourcemap: true,
    target: "es2015",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "smart-mjml",
      formats: ["es", "cjs"],
      fileName: (mod) => `index.${mod}.js`,
    },
    rollupOptions: {
      plugins: [],
      external: ["react", "vue", "lodash"],
      output: {},
    },
    outDir: "lib",
  },
  optimizeDeps: {
    include: [],
  },
});
