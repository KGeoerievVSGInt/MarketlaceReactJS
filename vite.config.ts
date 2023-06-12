import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "api/get_all_employees_data_from_bob": {
        target:
          "https://sm-server.netlify.app/api/get_all_employees_data_from_bob",
        changeOrigin: true,
      },
    },
  },
});
