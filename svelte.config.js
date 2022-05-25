import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte"],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({})],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({}),
		vite: {
			resolve: {
				alias: {
					$lib: path.resolve("src/lib"),
				},
			},
		},
	},
};

export default config;
