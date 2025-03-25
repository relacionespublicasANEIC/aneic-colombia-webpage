import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
export default {
    preprocess: vitePreprocess(),
    kit: {
        alias: {
            "@components/*": "./src/components/*",
            "@icons/*": "./src/icons/*"
        },
        adapter: adapter({
            pages: "dist",
            assets: "dist",
            fallback: undefined,
            precompress: false,
            strict: true
        })
    }
};