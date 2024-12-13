import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000, // Change to a port you know is free
  },

  test: {
    globals: true,
    environment: "jsdom",
  },
});

// Server is set to port 4000, for the sake of the JSON server running on port 5000. - cybrrgrl

