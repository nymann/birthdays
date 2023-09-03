import { sveltekit } from "@sveltejs/kit/vite";

const config = {
        plugins: [sveltekit()],
        test: {
                environment: "jsdom",
                include: ["src/**/*.{test,spec}.{js,ts}"],
                setupFiles: ["src/vitest/registerMatchers.js", "src/vitest/cleanupDom.js"],
                reporter: "verbose",
                restoreMocks: true,
        },
};

export default config;
