import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        // Library entry and output settings
        lib: {
            entry: resolve(__dirname, "packages/main.ts"),
            name: "@lewis/ui",
            // the proper extensions will be added
            fileName: (format) => `index.${format}.js`,
        },
        // Bunder options
        rollupOptions: {
            // Externalize react-related imports
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "react/jsx-runtime",
                },
            },
        },
    },
    plugins: [react(), dts({ insertTypesEntry: true })],
});
