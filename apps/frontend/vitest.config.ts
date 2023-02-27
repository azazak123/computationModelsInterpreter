import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "c8",
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.ts",
  },
});
