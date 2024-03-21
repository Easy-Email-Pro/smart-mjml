import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import monacoEditorPlugin from "vite-plugin-monaco-editor";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), monacoEditorPlugin({})],
  resolve: {
    alias: {
      "smart-mjml": path.resolve(__dirname, "../../src/index"),
    },
  },
});
